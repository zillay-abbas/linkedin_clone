import React, { useState } from "react";
import "./SignUp.css";
import URLs from "../Values/URLs";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const Email = (eve) => {
    setEmail(eve.target.value);
  };

  const Password = (eve) => {
    setPassword(eve.target.value);
  };

  const Name = (eve) => {
    setName(eve.target.value);
  };

  const CPassword = (eve) => {
    setCPassword(eve.target.value);
  };

  const addUser = async () => {
    //this function will click on Agree button on signup
    let passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (password.length == 0 || cpassword.length == 0) {
      //if empty password fields then display from here or you can also check length of other inputs here
      alert("Fill all the fields to continue");
    } else if (!passwordValidation.test(password)) {
      //if password doesn't contain length of 6 to 20 and one number, one lower and one upper
      //then display message here
      alert(
        "Password must contain length of 6 to 20 and one number, one lower and one upper"
      );
    } else if (!(password == cpassword)) {
      //if password and confirm password not match then display from here
      alert("Password and Confirm Password not matched");
    } else {
      var API_URL = URLs.SignUpURL;
      // We have created a separate component for Urls from where we are importing this url.

      fetch(API_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name, // pass the full name here
          email: email, // pass the email here
          password: password, //pass the password here
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (!response.error) {
            //successful shift to next cmponent
            alert("Successful");
          }
          //failed to signup error message is in 'response.msg' show it where you showing error
          else alert("Failed to Add");
        })
        .catch((error) => {
          //display ther 'error' in error field, this error will come if any failure in upper code
          alert(error);
        });
    }
  };
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Sign Up</span>
          </div>
          <form action="#">
            <div className="row">
              <i className="fas fa-user-alt"></i>
              <input
                type="text"
                value={name}
                placeholder="Full Name"
                required
                autoComplete="off"
                onChange={Name}
              ></input>
            </div>
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
            <div className="row">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                value={cpassword}
                placeholder="Confirm Password"
                required
                autoComplete="off"
                onChange={CPassword}
              ></input>
            </div>
            <div className="pass">
              <p>
                {" "}
                By clicking Agree & Join, you agree to
                <a href="#"> User Agreement</a> ,{" "}
                <a href="#"> Privacy Policy</a> , and{" "}
                <a href="#"> Cookie Policy</a>
              </p>
            </div>
            <div className="row button">
              <input
                type="submit"
                value="Agree & Join"
                onClick={addUser}
              ></input>
            </div>
            <div className="signup-link">
              Already on LinkedIn?
              <a href="#">Sign In</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
