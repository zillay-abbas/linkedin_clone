const { User } = require("../models/userModel");
var fs = require("fs");

exports.createPost = async (req, res) => {
  // Get form request
  const { id, title } = req.body;

  // Validation checking
  if (!id) {
    res.status(400).json({
      error: true,
      msg: "Input not correct",
    });
  } else {
    let postTitle = null;
    let postImg = false;

    if (title) {
      postTitle = title;
    }

    if (req.files.length > 0) {
      postImg = true;
    }

    console.log(req.files.length);

    console.log(Number(postImg));

    const userPost = await User.createPost(
      postTitle,
      new Date(),
      Number(postImg),
      parseInt(id)
    ).catch((err) => {
      res.status(500).json({
        error: true,
        msg: "Server Error",
      });
    });

    if (postImg) {
      for (var i = 0; i < req.files.length; i++) {
        const postImg = User.createPostImage(
          userPost.post_id,
          req.files[i].path
        );
      }
    }

    console.log(userPost);

    res.status(200).json({
      error: false,
      msg: "Post Created",
    });
  }
};

//remaining
exports.getPost = async (req, res) => {
  const { id, type } = req.body;
  console.log("id: " + id);
  switch (type) {
    case "mine":
      let userPosts = await User.getPostbyUser(parseInt(id));

      for (let i = 0; i < userPosts.length; i++) {
        const postImages = await User.getPostImages(userPosts[i].post_id);
        console.log(postImages);
        userPosts[i].img_address = postImages;

        console.log(userPosts);
      }

      res.status(200).json({
        error: false,
        posts: userPosts,
      });
      break;

    case "both":
      const newsFeedPosts = await User.getNewsfeedPost(id);

      for (let i = 0; i < userPosts.length; i++) {
        const postImages = await User.getPostImages(userPosts[i].post_id);
        console.log(postImages);
        userPosts[i].img_address = postImages;

        console.log(userPosts);
      }

      res.status(200).json({
        error: false,
        posts: userPosts,
      });
      break;

    default:
      break;
  }
};

exports.updatePost = async (req, res) => {
  // Get form request
  const { postId, title } = req.body;

  let postTitle = null;
  let postImg = false;

  if (title) {
    postTitle = title;
  }

  if (req.files.length > 0) {
    postImg = true;
  }

  const getPostImg = await User.getPostImages(parseInt(postId));
  console.log(getPostImg);

  if (getPostImg.length > 0) {
    for (let i = 0; i < getPostImg.length; i++) {
      fs.unlink(getPostImg[i].postImg_imgAddress, function (err) {
        if (err) throw err;
        console.log("File deleted!");
      });
    }
  }

  try {
    const delImg = await User.deletePostImg(parseInt(postId));
    console.log(delImg);

    const userPost = await User.updatePost(
      postTitle,
      new Date(),
      Number(postImg),
      parseInt(postId)
    );

    if (postImg) {
      for (var i = 0; i < req.files.length; i++) {
        const postImg = User.createPostImage(
          userPost.post_id,
          req.files[i].path
        );
      }
    }

    console.log(userPost);

    res.status(200).json({
      error: false,
      msg: "Post Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      msg: "Server Error",
    });
  }
};

exports.deletePost = async (req, res) => {
  // Get form request
  const { postId } = req.body;

  const getPostImg = await User.getPostImages(parseInt(postId));

  if (getPostImg.length > 0) {
    for (let i = 0; i < getPostImg.length; i++) {
      fs.unlink(getPostImg[i].postImg_imgAddress, function (err) {
        if (err) throw err;
        console.log("File deleted!");
      });
    }
  }

  try {
    const delImg = await User.deletePostImg(parseInt(postId));
    const userPost = await User.deletePost(parseInt(postId));

    res.status(200).json({
      error: false,
      msg: "Post Removed",
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      msg: "Server Error",
    });
  }
};

exports.likePost = async (req, res) => {
  const { postID, userID } = req.body;
  try {
    const isLiked = await User.checkPostLike(
      parseInt(postID),
      parseInt(userID)
    );

    console.log(isLiked);

    let like;
    if (isLiked) {
      like = await User.removePostLike(isLiked.like_id);
    } else {
      like = await User.addPostLikes(parseInt(postID), parseInt(userID));
    }
    res.status(300).json({
      error: false,
      msg: "like",
      isLiked: like,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      msg: "Server Error",
    });
  }
};

exports.commentOnPost = async (req, res) => {
  const { postID, userID, desc } = req.body;

  if (desc) {
    try {
      const comment = await User.addPostComment(
        parseInt(postID),
        parseInt(userID),
        desc
      );

      res.status(300).json({
        error: false,
        msg: "comment",
        comment,
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        msg: "Server Error",
      });
    }
  } else {
    res.status(400).json({
      error: true,
      msg: "Add comment",
    });
  }
};

exports.removeComment = async (req, res) => {
  const { commentID } = req.body;

  try {
    const comment = await User.removePostComment(commentID);
    res.status(300).json({
      error: false,
      msg: "comment",
      comment,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      msg: "Server Error",
    });
  }
};

exports.updateComment = async (req, res) => {
  const { commentID, postID, userID, desc } = req.body;

  if (desc) {
    try {
      const comment = await User.updatePostComment(
        parseInt(commentID),
        parseInt(postID),
        parseInt(userID),
        desc
      );

      res.status(200).json({
        error: false,
        msg: "comment",
        comment,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: true,
        msg: "Server Error",
      });
    }
  } else {
    res.status(400).json({
      error: true,
      msg: "Add comment",
    });
  }
};
