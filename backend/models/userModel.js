const PrismaClient = require("@prisma/client");
const prisma = new PrismaClient.PrismaClient();
const db = require("../config/Database");

class User {
  static async createPost(title, time, img, id) {
    return await prisma.user_posts.create({
      data: {
        post_title: title,
        post_time: time,
        post_img: img,
        user_id: id,
      },
    });
  }

  static async deletePostImg(postId){
    return await prisma.post_images.deleteMany({
      where: {
        postImg_postId: postId,
      },
    })
  }

  static async deletePost(postID){
    return await prisma.user_posts.delete({
      where: {
        post_id: postID,
      }
    });
  }

  static async checkPostLike(postId, userId){
    return await prisma.user_post_likes.findFirst({
      where: {
        post_id: postId,
        user_id: userId,
      },
    });
  }

  static async removePostLike(likeID){
    return await prisma.user_post_likes.delete({
      where: {
        like_id: likeID,
      },
    })
  }

  static async addPostLikes(postId, userId){
    return await prisma.user_post_likes.create({
      data: {
        post_id: postId,
        user_id: userId,
      },
    })
  }

  static async addPostComment(postId, userId, comment){
    return await prisma.user_post_comments.create({
      data: {
        post_id: postId,
        user_id: userId,
        comment_description: comment,
      },
    })
  }

  static async updatePostComment(commentID, postID, userID, desc){
    return await prisma.user_post_comments.update({
      where: {
        comment_id: commentID
      },
      data: {
        post_id: postID,
        user_id: userID,
        comment_description: desc,
      }
    })
  }

  static async removePostComment(commentID){
    return await prisma.user_post_comments.delete({
      where: {
        comment_id: commentID,
      },
    })
  }

  static async updatePost(title, time, img, id){
    return await prisma.user_posts.update({
      where: {
        post_id: id,
      },
      data: {
        post_title: title,
        post_time: time,
        post_img: img,
      },
    })
  }

  static async getPostImages(id) {
    return await prisma.post_images.findMany({
      where: {
        postImg_postId: id,
      },
      select: {
        postImg_imgAddress: true,
      },
    });
  }

  static async getPostbyUser(id) {
    return await prisma.user_posts.findMany({
      where: {
        user_id: id,
      },
    });
  }

  static async getPostbyUser(id) {
    return await prisma.user_posts.findMany({
      where: {
        user_id: id,
      },
    });
  }

  static async getNewsfeedPost(id) {
    return await prisma.user_posts.findMany({
      where: {
        user_id: id,
      },
    });
  }

  static createPostImage(id, imgAdd) {
    return db.execute("CALL insert_postImage(?, ?)", [id, imgAdd]);
  }

  static removePreviousImg(postId) {
    // return await prisma.
  }

  static async getUserbyEmail(email) {
    return await prisma.users.findUnique({
      where: {
        user_email: email,
      },
    });
  }

  static async getUserbyToken(token) {
    return await prisma.users.findUnique({
      where: {
        confirmationCode: token,
      },
    });

    // return "true";
  }

  static async getUserbyTokenS(token) {
    return db.execute("CALL selectwith_token(?)", [token]);
    // return "true";
  }

  static async getUserbyId(id) {
    return await prisma.users.findUnique({
      where: {
        user_id: id,
      },
    });
  }

  static insertUser(name, email, password, status, token) {
    return db.execute("CALL create_user(?, ?, ?, ?, ?)", [
      name,
      email,
      password,
      status,
      token,
    ]);
  }

  static updateUserVerification(id, status) {
    return db.execute("CALL verify_user(?, ?)", [id, status]);
  }

  static updateUser(
    id,
    name,
    contact,
    email,
    password,
    u_status,
    page,
    gender,
    bio,
    city,
    country,
    site
  ) {
    return db.execute("CALL update_user(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
      id,
      name,
      contact,
      email,
      password,
      u_status,
      page,
      gender,
      bio,
      city,
      country,
      site,
    ]);
  }

  static updateUserImage(id, imgAdress) {
    return db.execute("CALL update_img(?,?)", [id, imgAdress]);
  }
}

module.exports = { User };
