import { Avatar } from "@material-ui/core";
import React from "react";
import "./Profile.css";
import Header from "../Main Home Page/Header/Header";
import Button from "./Button";
import Skills from "./Dynamic one/Skills";
import Interests_navmenu from "./Dynamic one/Interests_navmenu";
import Education from "./Dynamic one/Education";

const Profile = () => {
  return (
    <>
      <div className="Main__Profile">
        <Header />
        <div className="Personalinfo__buttons">
          <div className="bg">
            <img src="img/bg.jpg"></img>
          </div>
          <div className="Personal__info">
            {/* <img src="img/avatar (3).png" className="avatar"/> */}
            <Avatar className="avatar" />
            <h2> Meee </h2>
            <p>Student at ABC University</p>
            <p>
              Rawalpindi, Punjab Pakistan
              <span>
                <a href="#" className="contact">
                  Contact info
                </a>
              </span>
            </p>
            <div className="buttons">
              <Button title="Open to" />
              <Button title="Add Profile Section" />
              <Button title="More" />
            </div>
          </div>
        </div>
        <div className="Suggested__foryou">
          <h2>Suggested for you</h2>
          <h5>Where do you currently work?</h5>
          <div className="Suggested__button">
            <button className="button"> Add Positions </button>
          </div>
        </div>
        <div className="Analytics">
          <h2>Analytics</h2>
          <div className="Analytics__main">
            <div className="profile__views">
              <h3> A profile views </h3>
              <p> Discover who's viewed you profile. </p>
            </div>
            <div className="post__views">
              <h3> B post views </h3>
              <p> Check out who's engaging with your posts. </p>
            </div>
            <div className="search__appearances">
              <h3> C search appearances </h3>
              <p>See how often you appeared in search result.</p>
            </div>
          </div>
        </div>
        <div className="resources">
          <div className="resources__main">
            <h2>Resources</h2>
            <div className="creator__mode">
              <h3>Creator Mode</h3>
              <p>
                Get discovered showcase content on your profile and get access
                to creator tools
              </p>
            </div>
            <div className="my__network">
              <h3>My Network</h3>
              <p>See and manage your connections and interests.</p>
            </div>
          </div>
        </div>

        <div className="about">
          <div className="About__main">
            <h2>About</h2>
            <p>
              i am student at this uni.This industry is very interesting field.{" "}
            </p>
          </div>
        </div>

        <div className="activity">
          <div className="activity__main">
            <h2>Activity</h2>
            <p>You commented on a post</p>
            <p>comment</p>
          </div>
        </div>

        <div className="education">
          <div className="education__main">
            <h2>Education</h2>
            <Education uni="This University" degree="This Degree" />
          </div>
        </div>

        <div className="skills">
          <div className="skills__main">
            <h2>Skills</h2>
            <div className="skills__name">
              <Skills title="MIPS Assembly" />
              <Skills title="Computer Hardware" />
              <Skills title="Typing" />
            </div>
          </div>
        </div>

        <div className="interests">
          <div className="interest__main">
            <h2>Interests</h2>
            <div className="nav__menu">
              <Interests_navmenu title="Influencers" />
              <Interests_navmenu title="Companies" />
              <Interests_navmenu title="Groups" />
              <Interests_navmenu title="Schools" />
            </div>
          </div>
        </div>

        <div className="footer">
          <img src="img/GETME.png" />
          <div className="footer__main">
            <div className="footer__col1">
              <h3>About</h3>
              <h3>Community Guidlines</h3>
              <h3>Privacy & Terms</h3>
              <h3>Safety Center</h3>
            </div>
            <br />
            <div className="footer__col2">
              <h3>Accessibility</h3>
              <h3>Careers</h3>
              <h3>Ad Choices</h3>
              <h3>Mobile</h3>
            </div>
            <br />
            <div className="footer__col3">
              <h3>Talent Solutions</h3>
              <h3>Marketing Solutions</h3>
              <h3>Advertising</h3>
              <h3>Small Business</h3>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
