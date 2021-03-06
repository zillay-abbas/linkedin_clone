const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
var validator = require("email-validator");
var passwordValidator = require("password-validator");
var numValidator = require("validator");
const sendMail = require("../middlewares/sendMail");

const { User } = require("../models/userModel");

var schema = new passwordValidator();
schema.is().min(4);

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Validation checking
  if (!email || !password) {
    res.status(400).json({
      error: true,
      msg: "Please fill in all fields",
    });
  } else {
    //validation passed

    try {
      let user = await User.getUserbyEmail(email);
      if (user) {
        let storedPass = user.user_password;

        const passwordMatch = await bcrypt.compare(password, storedPass);

        if (passwordMatch) {
          let payload = { id: user.user_id };
          let token = jwt.sign(payload, "secret");

          res.status(201).json({
            error: false,
            msg: "Login Successfuly",
            token: token,
            user: user,
          });
        } else {
          res.status(401).json({
            error: true,
            msg: "Invalid Password",
          });
        }
      } else {
        res.status(400).json({
          error: true,
          msg: "User Not Found",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: true,
        msg: "Server error",
      });
    }
  }
};

exports.registerUser = async (req, res) => {
  // Get form request
  const { name, email, password } = req.body;

  // Validation checking
  if (!name || !email || !password) {
    res.status(400).json({
      error: true,
      msg: "Input not correct",
    });
  } else {
    try {
      if (validator.validate(email) && schema.validate(password)) {
        let hashPassword = await bcrypt.hash(password, 10);

        const user = await User.getUserbyEmail(email);

        if (user) {
          res.status(400).json({
            error: true,
            msg: "User with this email already exists",
          });
        } else {
          // Add user with stored porcedure
          const secret = "secret";
          const status = false;
          const theme = 1;
          const color = 1;

          const token = jwt.sign({ email: email }, secret);

          const mailVerification = await sendMail(
            name,
            email,
            "Account Verification",
            "Click button to verify mail",
            token
          );
          if (mailVerification.rejected.length == 0) {
            const addUser = User.insertUser(
              name,
              email,
              hashPassword,
              status,
              token,
              theme,
              color,
            );

            res.status(200).json({
              error: false,
              msg: "Account Created",
              status,
            });
          } else {
            res.status(500).json({
              error: true,
              msg: "Server error",
            });
          }
        }
      } else {
        res.status(422).json({
          error: true,
          msg: "Please enter valid details",
        });
      }
    } catch (error) {
      res.status(500).json({
        error: true,
        msg: "Server Error",
      });
    }
  }
};

exports.updateEmail = async (req, res) => {
  const { id, name, oldMail, newMail } = req.body;
  if (!oldMail || !newMail) {
    res.status(500).json({
      error: true,
      msg: "Incorrect input",
    });
  } else {
    try {
      const isExists = await User.checkMail(oldMail);
      if (!isExists) {
        res.status(500).json({
          error: true,
          msg: "Account with this email not exists",
        });
      } else {
        const isUpdated = await User.updateMail(id, newMail);
        if (isUpdated) {
          const token = jwt.sign({ email: email }, secret);

          const updateToken = await User.updateToken(id, token);

          const mailVerification = await sendMail(
            name,
            newMail,
            "Account Verification",
            "Click button to verify mail",
            token
          );

          res.status(200).json({
            error: false,
            msg: "Email sent",
          });
        }
      }
    } catch (error) {
      res.status(500).json({
        error: true,
        msg: "Server error",
      });
    }
  }
};

exports.returnHome = async (req, res) => {
  res.status(200).json({
    error: false,
    msg: "Home Page",
  });
};

exports.updateUser = async (req, res) => {
  // Get form request

  const {
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
    img,
  } = req.body;

  // Validation checkin
  if (
    !id ||
    !name ||
    !email ||
    !password ||
    !contact ||
    !u_status ||
    !page ||
    !gender ||
    !bio ||
    !city ||
    !country ||
    !site
  ) {
    res.status(400).json({
      error: true,
      msg: "Input not correct",
    });
  } else {
    try {
      if (
        validator.validate(email) &&
        schema.validate(password) &&
        numValidator.isNumeric(contact)
      ) {
        let hashPassword = await bcrypt.hash(password, 10);

        const updateUser = User.updateUser(
          id,
          name,
          contact,
          email,
          hashPassword,
          u_status,
          page,
          gender,
          bio,
          city,
          country,
          site
        );

        res.status(200).json({
          error: false,
          msg: "User updated",
          user: updateUser,
        });
      } else {
        res.status(422).json({
          error: true,
          msg: "Please enter valid details",
        });
      }
    } catch (error) {
      res.status(500).json({
        error: true,
        msg: "Server Error",
      });
    }
  }
};

exports.updateUserImage = async (req, res) => {
  // Get form request

  const { id } = req.body;
  const imgPath = req.file.path;

  // Validation checkin
  if (!id || !imgPath) {
    res.status(400).json({
      error: true,
      msg: "Input not correct",
    });
  } else {
    try {
      const user = await User.getUserbyId(parseInt(id));

      if (user) {
        const updateUser = User.updateUserImage(id, imgPath);

        res.status(200).json({
          error: false,
          msg: "Image Added",
          user: updateUser,
        });
      } else {
        res.status(422).json({
          error: true,
          msg: "Please enter valid user id",
        });
      }
    } catch (error) {
      res.status(500).json({
        error: true,
        msg: "Server Error",
      });
    }
  }
};

exports.getUserImage = async (req, res) => {
  res.download("public/uploads/profilePic/" + req.params.imgPath);
};

exports.verifyUser = async (req, res) => {
  const token = req.params.code;

  console.log(`token: ${token}`);

  // Validation checking
  if (!token) {
    res.status(401).json({
      error: true,
      msg: "Token not found",
    });
  } else {
    try {
      //validation passed
      let user = await User.getUserbyToken(token);

      console.log(user);

      console.log(`userid : ${user.user_id}`);

      if (user) {
        const status = true;
        const verifyUser = User.updateUserVerification(user.user_id, status);

        res.status(401).json({
          error: false,
          msg: "Verification Done",
          user: verifyUser,
        });
      } else {
        res.status(401).json({
          error: true,
          msg: "Invalid token",
        });
      }
    } catch (error) {
      res.status(500).json({
        error: true,
        msg: "Server Error",
      });
    }
  }
};

exports.getUserDetails = async (req, res) => {
  const { id } = req.body;

  // Validation checking
  if (!id) {
    res.status(401).json({
      error: true,
      msg: "Please fill in all fields",
    });
  } else {
    try {
      //validation passed
      let foundUser = await User.getUserbyId(id).catch((error) =>
        res.status(500).json({ msg: "Server Error" })
      );

      if (foundUser) {
        foundUser.user_img;
        console.log(`path : ${foundUser.user_img}`);
        res.status(401).json({
          error: false,
          msg: "User Details",
          user: foundUser,
        });
      } else {
        res.status(401).json({
          error: true,
          msg: "User Not Found",
        });
      }
    } catch (error) {
      res.status(500).json({
        error: true,
        msg: "Server Error",
      });
    }
  }
};

exports.logoutUser = async (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/");
};
