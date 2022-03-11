import React from "react";

import "./Profile.css";

export const Profile = () => {
  return (
    <div className="pro-cont">
      <div className="pro-img">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
          className="avatar"
        />
        <div className="pro-det">
          <div className="pro-name">Qurashi</div>
          <div className="pro-bio">Mobile Developer</div>
        </div>
      </div>
      <div className="date-line">
          
      </div>
    </div>
  );
};
