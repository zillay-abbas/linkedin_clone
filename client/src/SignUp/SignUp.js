import React, { useState } from "react";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import isEmail from "validator/lib/isEmail";

import Loader from "../app/Loader";
import { registerUser } from "../app/Redux/Action/userAction";

import "./SignUp.css";

function SignUp() {
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const { loading } = useSelector((state) => state.user);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [msg, setMsg] = useState("");

  const [filled, setFilled] = useState(true);
  const dispatch = useDispatch();

  const handleRegister = () => {
    if (
      name !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      if (isEmail(email)) {
        if (password === confirmPassword) {
          dispatch(registerUser(name, email, password));
        } else {
          setMsg("Please enter same password");
          setFilled(true);
        }
      } else {
        setMsg("Please enter correct email");
        setFilled(true);
      }
    } else {
      setMsg("Please fill all fields");
      setFilled(true);
    }
  };

  const handleChange = (e) => {
    setFilled(false);
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "confirmPassword":
        setConfirmPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="up_sign_cont">
      <div className="up_signin_wrap">
        <img
          src="/img/logo/login_logo.png"
          alt="logo"
          className="up_logo_img"
        />

        <div className="up_inp">
          <div className="up_input_wrap">
            <input
              className="up_inpt_sign"
              type="text"
              id="name"
              placeholder="Name"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="up_input_wrap">
            <input
              className="up_inpt_sign"
              type="text"
              id="email"
              placeholder="Email"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="up_input_wrap">
            <input
              className="up_inpt_sign"
              type={passwordShown ? "text" : "password"}
              id="password"
              placeholder="Password"
              required
              onChange={(e) => handleChange(e)}
            />
            {passwordShown ? (
              <AiFillEye onClick={() => setPasswordShown(!passwordShown)} />
            ) : (
              <AiFillEyeInvisible
                onClick={() => setPasswordShown(!passwordShown)}
              />
            )}
          </div>
          <div className="up_input_wrap">
            <input
              className="up_inpt_sign"
              type={confirmPasswordShown ? "text" : "password"}
              placeholder="Confirm Password"
              id="confirmPassword"
              required
              onChange={(e) => handleChange(e)}
            />
            {confirmPasswordShown ? (
              <AiFillEye onClick={() => setPasswordShown(!passwordShown)} />
            ) : (
              <AiFillEyeInvisible
                onClick={() => setConfirmPasswordShown(!confirmPasswordShown)}
              />
            )}
          </div>
          {filled ? <small style={{ color: "red" }}>{msg}</small> : ""}
        </div>

        <button className="up_btn_login" onClick={handleRegister} >
          {loading ? (
            <>
              <div>Loading...</div>
              <Loader className="spinn_" />
            </>
          ) : (
            <>Register</>
          )}
        </button>

        <Link className="up_link_cust" to="/">
          Have account? Signin
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
