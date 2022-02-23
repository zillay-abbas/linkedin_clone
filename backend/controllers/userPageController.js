const { Page } = require("../models/pageModel");
const { User } = require("../models/userModel");

exports.createPage = async (req, res) => {
  // Get form request
  const { name, desc, u_id } = req.body;
  const img = req?.file?.path;

  // Validation checking
  if (!name || !u_id) {
    res.status(400).json({
      error: true,
      msg: "Input not correct",
    });
  } else {
    // Create page
    let description = null;
    let imgAdd = null;

    if (desc) {
      description = desc;
    }

    if (img) {
      imgAdd = img;
    }

    try {
      const page = await Page.createPage(name, description, imgAdd, u_id);

      const userPage = true;

      const user = await User.getUserbyId(parseInt(u_id));

      const updateUser = await User.updateUser(
        user.user_id,
        user.user_name,
        user.user_contact,
        user.user_email,
        user.user_password,
        user.user_status,
        userPage,
        user.user_gender,
        user.user_bio,
        user.user_city,
        user.user_country,
        user.user_site
      );

      console.log("page");
      console.log(page);
      console.log("user");
      console.log(user);
      console.log("updateUser");
      console.log(updateUser);

      res.status(200).json({
        error: false,
        msg: "Page Created",
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        msg: "Server error",
      });
    }
  }
};

exports.updatePage = async (req, res) => {
  // Get form request

  const { id, name, desc } = req.body;
  const imgAdd = req?.file?.path;

  let img = null;
  let description = null;

  if (desc) {
    description = desc;
    console.log(desc);
  }

  if (req.file) {
    console.log(imgAdd);
    img = imgAdd;
  }
  console.log(id);
  console.log(name);
  console.log(description);
  console.log(img);

  const updatePage = await Page.updatePage(id, name, description, img);

  res.status(200).json({
    error: false,
    msg: "Page updated",
    page: updatePage,
  });
};

exports.getPage = async (req, res) => {
  const { p_id } = req.body;

  //validation passed
  let page = await Page.getPagebyId(p_id);

  if (page) {
    res.status(201).json({
      error: false,
      msg: "Page found",
      page: page,
    });
  } else {
    res.status(401).json({
      error: true,
      msg: "Page Not Found",
    });
  }
};

exports.removePage = async (req, res) => {
  const { id } = req.body;
  try {
    const page = await Page.removePage(parseInt(id));

    res.status(200).json({
      error: false,
      msg: "Page removed",
      page: page,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      msg: "Server error",
    });
  }
};
