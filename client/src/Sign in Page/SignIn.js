import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./SignIn.css";
// import { login } from "../features/userSlice";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  //   {
  // then(
  //       dispatch(login({email: .user.email,uid: .user.uid,}))
  //   });

  // we will call dispatch both in register and signin.

  const loginToApp = (eve) => {
    eve.preventDefault();
    if (!email && !password) {
      alert("Please fill all the fields");
    }
  };
  const register = () => {};

  const Email = (eve) => {
    setEmail(eve.target.value);
  };
  //   To get the email which user has typed.

  const Password = (eve) => {
    setPassword(eve.target.value);
  };
  //   To get the password which user has typed.
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
                value={email}
                placeholder="Email or Phone"
                required
                autoComplete="off"
                onChange={Email}
              ></input>
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                value={password}
                placeholder="Password"
                required
                autoComplete="off"
                onChange={Password}
              ></input>
            </div>
            <div className="pass">
              <a href="#">Forgot password?</a>
            </div>
            <div className="row button">
              <input type="submit" value="Log In" onClick={loginToApp}></input>
            </div>
            <div className="signup-link">
              New Here?
              <a href="#" onClick={register}>
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
