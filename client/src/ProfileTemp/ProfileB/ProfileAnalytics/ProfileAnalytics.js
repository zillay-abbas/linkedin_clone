import React from "react";

import { IoIosPeople } from "react-icons/io";

import "./ProfileAnalytics.css";

const ProfileAnalytics = () => {
  return (
    <div className="b_analytics_cont">
      <div className="b_ana_det">
        <div className="b_ana_sub ana_view">
          <div className="b_first_line">
            <h3>10K</h3>
          </div>
          <i>views</i>
        </div>
        <div className="black_bar_div"></div>
        <div className="b_ana_sub ana_serach">
          <div className="b_first_line">
            <h3>200+</h3>
          </div>
          <i>Project completed</i>
        </div>
        <div className="black_bar_div"></div>
        <div className="b_ana_sub ana_serach">
          <div className="b_first_line">
            <h3>100k</h3>
          </div>
          <i>Search</i>
        </div>
      </div>

      <div className="desc_div">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        ipsam praesentium dolorem. Et, pariatur deserunt minus iste officia
        cupiditate repellat exercitationem necessitatibus neque? Quos iure
        cumque similique laborum? Rerum, similique.
      </div>
      
    </div>
  );
};

export default ProfileAnalytics;
