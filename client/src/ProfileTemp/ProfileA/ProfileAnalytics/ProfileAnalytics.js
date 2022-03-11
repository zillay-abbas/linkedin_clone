import React from "react";

import { BsEyeFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";

import "./ProfileAnalytics.css";

const ProfileAnalytics = () => {
  return (
    <div className="analytics_cont">
      <div className="proj_head">
        <h3>Analytics</h3>
        <h5 className="proj_privacy">
          {" "}
          <BsEyeFill className="mx_1" /> Only you can see
        </h5>
      </div>

      <div className="ana_det">
        <div className="ana_sub ana_view">
          <div className="first_line">
            <IoIosPeople className="ana_icon" />
            <h3>10K profile view</h3>
          </div>
          <i>Discover who's viewed your profile.</i>
        </div>
        <div className="ana_sub ana_serach">
          <div className="first_line">
            <IoIosPeople className="ana_icon" />
            <h3>50K search apperence</h3>
          </div>
          <i>Discover who's viewed your profile.</i>
        </div>
      </div>
    </div>
  );
};

export default ProfileAnalytics;
