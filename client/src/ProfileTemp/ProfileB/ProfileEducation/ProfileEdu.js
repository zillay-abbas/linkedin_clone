import React from "react";

import Institute from "./Institute/Institute";

import "./ProfileEdu.css";

const ProfileAnalytics = () => {
  return (
    <div className="b_edu_cont">
      <div className="b_edu_head">
        <h3>Education</h3>
      </div>

      <div className="b_edu_det">
        <Institute />
      </div>
    </div>
  );
};

export default ProfileAnalytics;
