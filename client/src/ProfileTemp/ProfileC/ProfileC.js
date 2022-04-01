import React, { useState } from "react";
import "./ProfileC.css";
import { AiFillStar } from "react-icons/ai";
import { RiRadioButtonLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { BsPlusCircle } from "react-icons/bs";

function ProfileC({ bgcolor, txtcolor }) {
  return (
    <>
      <div className="Profile">
        <div className="body" style={{ backgroundColor: bgcolor }}>
          <div className="top">
            <img src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__340.png"></img>
            <div className="ratings" style={{ color: txtcolor }}>
              (
              <span>
                <AiFillStar />
              </span>
              <p>3.4 </p> )
            </div>
            <a href="#" style={{ color: txtcolor }}>
              Follow
            </a>
            {/* <button className="edit" onClick={() => setShow(true)}>
              Edit
            </button> */}
          </div>

          <div className="p_name" style={{ color: txtcolor }}>
            <h2>M.ANSARI</h2>
            <span>
              <RiRadioButtonLine />
            </span>
          </div>

          <div className="p_field" style={{ color: txtcolor }}>
            <h4>
              ACCOUNTS & FINANCE | <span>Paris,France</span>
            </h4>
          </div>

          <div className="p_bio" style={{ color: txtcolor }}>
            <h5>
              I am an Accounts & Finance Expert with over 8 years of freelance
              Experience...
            </h5>
          </div>

          <div className="like_follower_projects" style={{ color: txtcolor }}>
            <div className="likes">
              <h2>420</h2>
              <h5>LIKES</h5>
            </div>

            <div className="followers">
              <h2>9,992</h2>
              <h5>FOLLOWERS</h5>
            </div>

            <div className="projects">
              <h2>11</h2>
              <h5>PROJECTS</h5>
            </div>
          </div>

          <div className="skills" style={{ color: txtcolor }}>
            <div className="bar">
              <TiTick />
              <h4>SKIILS</h4>
            </div>
            <div className="skill_cards">
              <a href="#" className="accounts">
                Accounts
              </a>
              <a href="#" className="graphics">
                Graphics
              </a>
              <a href="#" className="ui">
                Ui
              </a>
              <a href="#" className="ux">
                Ux
              </a>
              <a href="#" className="software">
                Software
              </a>
              <a href="#" className="interior">
                Interior
              </a>
              <a href="#" className="development">
                Development
              </a>
              <div className="plus_btn">
                <BsPlusCircle />
              </div>
            </div>
          </div>

          <div className="education" style={{ color: txtcolor }}>
            <div className="edu_top">
              <h4>Education</h4>
            </div>
            <div className="edu_uni">
              <h4>Comsats University Islamabad</h4>
            </div>
            <div className="edu_explanation">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileC;
