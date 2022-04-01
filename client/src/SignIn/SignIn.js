import React, { useState } from "react";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../app/Redux/Action/userAction";
import { useSelector } from "react-redux";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import isEmail from "validator/lib/isEmail";
import Loader from "../app/Loader";

import "./SignIn.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const [passwordShown, setPasswordShown] = useState(false);
  const [msg, setMsg] = useState("");

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);

  const handleLogin = async () => {
    if (email !== "" && password !== "") {
      if (isEmail(email)) {
        dispatch(loginUser(email, password));
      } else {
        setMsg("Please enter valid email");
        setErr(true);
      }
    }
    else{
      setMsg("Please fill all fields");
      setErr(true);
    }
  };

  return (
    <div className="sign_cont">
      <div className="signin_wrap">
        <img src="/img/logo/login_logo.png" alt="logo" className="logo_img" />

        <div className="inp">
          <div className="input_wrap">
            <div className="icon_name">
              <MdEmail />
              <input
                className="inpt_sign"
                type="text"
                placeholder="Email ID"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="input_wrap">
            <div className="icon_name">
              <RiLockPasswordFill />
              <input
                className="inpt_sign"
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {passwordShown ? (
              <AiFillEye onClick={() => setPasswordShown(!passwordShown)} />
            ) : (
              <AiFillEyeInvisible
                onClick={() => setPasswordShown(!passwordShown)}
              />
            )}
          </div>
          {err ? <small style={{ color: "red" }}>{msg}</small> : ""}

        </div>


        <div className="input_chk">
          <div className="remember_me">
            <input type="checkbox" name="rem" id="rem" value="Remember me" />
            <label className="rem" htmlFor="rem">
              {" "}
              Remember me
            </label>
          </div>
          <br></br>
          <Link className="link_cust" to="">
            Forgot Password?
          </Link>
        </div>

        <button className="btn_login" onClick={handleLogin} >
          {loading ? (
            <>
              <div>Loading...</div>
              <Loader className="spinn_" />
            </>
          ) : (
            <>Login</>
          )}
        </button>
        <Link className="link_cust" to="/register">
          Don't have any account? Signup
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
