const express = require("express");
const router = express.Router();
const uploadProfileImg = require('../middlewares/updateProfileImages');
const uploadPostImg = require("../middlewares/uploadPostImages");
const uploadPageProfile = require("../middlewares/uploadPageProfile");
const passport = require("passport");

require('dotenv').config();

require("../middlewares/passport-setup");

const { registerUser, checkUser, updateUser,
     updateUserImage, getUserImage, getUserDetails,
     confirmUser, returnHome, inFail, logoutUser } = require("../controllers/userController");

const { createPost, getPost, updatePost, 
     likePost, deletePost, commentOnPost, 
     updateComment, removeComment } = require('../controllers/userPostController');

const { createPage, getPage, updatePage, removePage } = require('../controllers/userPageController');

//Register handle
router.route("/register").post(registerUser);
//Login handle
router.route("/login").post(checkUser);

router.route("/loginWithGoogle").get(passport.authenticate('google', {scope: ['profile', 'email']}));

router.route("/loginGoogle/check").get(passport.authenticate('google', {failureRedirect: '/v1/user/fail'}), function(req, res) { res.redirect('/v1/user/home')});

router.route("/home").get(returnHome);

router.route("/fail").get(inFail);

router.route("/confirm/:code").get(confirmUser);

router.route("/update/info").post(updateUser);

router.route("/update/profile").post(uploadProfileImg.single('img'), updateUserImage);

router.route("/getUser/userImg/:imgPath").get(getUserImage);

router.route("/getUser/userProfile").post(getUserDetails);

router.route("/post/create").post(uploadPostImg.array('img',12), createPost);

router.route("/post/retrive").post(getPost);

router.route("/post/update").post(uploadPostImg.array('img',12), updatePost);

router.route("/post/delete").post(deletePost);

router.route("/post/like").post(likePost);

router.route("/post/comment").post(commentOnPost);

router.route("/post/comment/update").post(updateComment);

router.route("/post/comment/remove").post(removeComment);

router.route("/page/create").post(uploadPageProfile.single('pageImg'), createPage);

router.route("/page/getPage").post(getPage);

router.route("/page/update").post(uploadPageProfile.single('pageImg'), updatePage);

router.route("/page/remove").post(removePage);

//logout
router.route("/logout").get(logoutUser);

module.exports = router;