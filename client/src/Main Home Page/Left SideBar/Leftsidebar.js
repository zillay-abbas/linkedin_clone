import { Avatar } from "@material-ui/core";
import React from "react";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../features/userSlice";
import "./Leftsidebar.css";

function Leftsidebar() {
  // const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentitem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <>
      {/* We are dividing our sidebar into two parts top and bottom */}
      <div className="sidebar">
        {/* This is top of the sidebar containing a background image an avatar(containing profile of the user logged in) and the name and gmail of that very user who has logged in */}
        <div className="sidebar__top">
          <img src="https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" />
          <Avatar className="sidebar__avatar" />
          <h2>Get me</h2>
          <h4>getme00@gmail.com</h4>
          {/* user.email */}
        </div>

        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p> Who viewed you </p>
            <p className="sidebar__statNumber">1,234</p>
          </div>
          <div className="sidebar__stat">
            <p> Views on post </p>
            <p className="sidebar__statNumber">5,678</p>
          </div>
        </div>

        <div className="sidebar__bottom">
          <p>Recent</p>

          {recentItem("reactjs")}
          {recentItem("programming")}
          {recentItem("softwareengineering")}
          {recentItem("design")}
          {recentItem("developer")}
        </div>
      </div>
    </>
  );
}

export default Leftsidebar;
