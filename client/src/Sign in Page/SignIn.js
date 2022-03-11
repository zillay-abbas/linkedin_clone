import React from "react";
import "./SignIn.css";
// import { login } from "../features/userSlice";

function SignIn() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Sign In</span>
          </div>
          <form action="#">
            <div className="row">
              <i className="fas fa-user-alt"></i>
              <input
                type="text"
                placeholder="Email or Phone"
                required
                autoComplete="off"
              ></input>
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                required
                autoComplete="off"
              ></input>
            </div>
            <div className="pass">
              <a href="#!">Forgot password?</a>
            </div>
            <div className="row button">
              <input type="submit" value="Log In"></input>
            </div>
            <div className="signup-link">
              New Here?
              <a href="#!">
                Join Now
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
