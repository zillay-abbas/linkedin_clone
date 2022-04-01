import React from "react";
import { Navigate } from "react-router-dom";

import "./Verify.css";

const Verify = () => {
  return (
    <div className="verify_cont">
      <div className="verify_card">
        {/* img */}
        <img className="ver_img" src="img/template_icons/ID_ver.png" alt="" />
        {/* txt */}

        <div className="data_div">
          <p className="head_p">
            We send verification link to your provided email,
            <br />
            <p> please verify to continue.</p>
          </p>
          <p className="title_p">
            After verification click on below "
            <span className="title_red">Continue Button</span>"
          </p>
        </div>
        <div className="btn_wrap">
          <Navigate  className="cont" to="/home" >Continue</Navigate>
          {/* <button className="cont">Continue</button> */}
          <div className="cent_wrap">
            <div className="line_div"></div>
            <span>or</span>
            <div className="line_div"></div>
          </div>

          <button className="resend">Resend Verification</button>
        </div>

        <button className="change">Change Email</button>
      </div>
    </div>
  );
};

export default Verify;
