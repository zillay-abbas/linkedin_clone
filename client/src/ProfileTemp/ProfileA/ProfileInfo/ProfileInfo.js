import React from "react";

import { FaSchool } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

import { Link } from "react-router-dom";
import "./ProfileInfo.css";

const ProfileInfo = () => {
  return (
    <div className="profile_info">
      {/* background img */}
      <img
        className="img_background"
        src="img/background/img_bg.jpeg"
        alt="background"
      />
      <div className="profile_main">
        <div className="profile_img_rat">
          {/* profile img */}
          <img
            className="img_profile"
            src="img/profile/profile1.jpeg"
            alt="profile"
          />
          {/* ratings */}

          <div className="pro_rating">
            <AiFillStar className="star_color" />
            <AiFillStar className="star_color" />
            <AiFillStar className="star_color" />
            <AiFillStar className="star_color" />
            <h5 className="p_left">4</h5>
          </div>
        </div>

        <div className="profile_det">
          {/* name */}
          <p className="profile_name">Muhammad Bin Khalid</p>
          {/* education */}

          <div className="pro_desc">
            <FaSchool className="icon_desc" />
            <p className="prof_desc">Student at comsats university islamabad</p>
          </div>

          <div className="pro_desc">
            <MdLocationPin className="icon_desc" />
            <p className="prof_loc">
              Rwp, Punjab, Pakistan.{" "}
              <Link className="contact_link" to="#">
                Contact info
              </Link>
            </p>
          </div>
          {/* connections */}
          <p className="prof_conn">
            Connections: <span>0</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
