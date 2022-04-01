const express = require("express");
const router = express.Router();
const uploadProfileImg = require("../middlewares/updateProfileImages");
const uploadPostImg = require("../middlewares/uploadPostImages");
const uploadPageProfile = require("../middlewares/uploadPageProfile");
const passport = require("passport");

require("dotenv").config();

require("../middlewares/passport-setup");

const {
  registerUser,
  updateEmail,
  verifyUser,
  loginUser,
} = require("../controllers/userController");

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/verify/:code").get(verifyUser);

router.route("/update/email").post(updateEmail);

// router.route("/loginWithGoogle").get(passport.authenticate('google', {scope: ['profile', 'email']}));

// router.route("/loginGoogle/check").get(passport.authenticate('google', {failureRedirect: '/v1/user/fail'}), function(req, res) { res.redirect('/v1/user/home')});

// //logout
// router.route("/logout").get(logoutUser);

module.exports = router;
