import React from "react";

import { FaSchool } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

import { Link } from "react-router-dom";
import "./ProfileInfo.css";

const ProfileInfo = () => {
  return (
    <div className="profile_b_info">
      {/* background img */}
      <img
        className="img_background_b"
        src="img/background/img_bg.jpeg"
        alt="background"
      />

      <div className="profile_b_main">
        {/* follow btn */}
        <div className="follow_btn">Follow</div>

        {/* profile img */}
        <img
          className="img_profile_b"
          src="img/profile/profile1.jpeg"
          alt="profile"
        />

        {/* ratings */}
        <div className="pro_rating_b">
          <AiFillStar className="star_color_b" />
          <AiFillStar className="star_color_b" />
          <AiFillStar className="star_color_b" />
          <AiFillStar className="star_color_b" />
          <h5 className="p_left_b">4</h5>
        </div>
      </div>

      <div className="profile_det_b">
        {/* name */}
        <p className="profile_name_b">Muhammad Bin Khalid</p>
        {/* education */}

        <div className="pro_desc_b">
          <FaSchool className="icon_desc_b" />
          <p className="prof_desc_b">Student at comsats university islamabad</p>
        </div>

        <div className="pro_desc_b">
          <MdLocationPin className="icon_desc_b" />
          <p className="prof_loc_b">
            Rwp, Punjab, Pakistan.{" "}
            <Link className="contact_link_b" to="#">
              Contact info
            </Link>
          </p>
        </div>
        {/* connections */}
        <p className="prof_conn_b">
          Connections: <span>0</span>
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;
