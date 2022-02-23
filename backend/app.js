const express = require("express");
const cors = require('cors');
const passport = require("passport");
const cookieSession = require('cookie-session');

const userRoute = require("./routes/userRoute");

const app = express();

app.use(cookieSession({
    name: 'tuto-session',
    keys: ['key1', 'key2']
  }));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false}));

app.use("/v1/user", userRoute);

// app.use("/", function(req, res){
//   res.send('connect');
// });


module.exports = app;