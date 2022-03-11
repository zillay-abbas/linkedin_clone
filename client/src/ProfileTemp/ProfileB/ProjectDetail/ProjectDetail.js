import React from "react";

import { BsEyeFill } from "react-icons/bs";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import "./ProjectDetail.css";
import ProjectPost from "./ProjectPost/ProjectPost";

const PersonStat = () => {

  const moveForward = () => {
  };

  const movePrevious = () => {
  };

  return (
    <div className="b_project_cont">
      <div className="b_proj_head">
        <h3>Projects Completed</h3>
        <h5 className="b_proj_privacy">
          {" "}
          <BsEyeFill className="b_mx_1" /> Only you can see
        </h5>
      </div>

      <div className="b_slider_view">
        <div className="b_slide_left slide_arrow" onClick={movePrevious}>
          <AiOutlineLeft />
        </div>
        <div className="b_scroll_cont post_slider">
             <ProjectPost />
        </div>
        <div className="b_slide_right slide_arrow" onClick={moveForward}>
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
};

export default PersonStat;
