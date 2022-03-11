import React from "react";

import { BsEyeFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import Institute from "./Institute/Institute";

import "./ProfileEdu.css";

const ProfileAnalytics = () => {
  return (
    <div className="edu_cont">
      <div className="edu_head">
        <h3>Education</h3>
      </div>

      <div className="edu_det">
        <Institute />
      </div>
    </div>
  );
};

export default ProfileAnalytics;
