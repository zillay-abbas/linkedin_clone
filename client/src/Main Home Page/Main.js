import {React, useState} from "react";
// import CloneHead from "./Header/CloneHead";
// import { useSelector } from "react-redux";
// import { selectUser } from "../features/userSlice";
import Header from "./Header/Header";
import Leftsidebar from "./Left SideBar/Leftsidebar";
import "./Main.css";
import Feed from "./News Feed/Feed";
import Widgets from "./Right SideBar/Widgets";
import SideDrawer from './SideDrawer/SideDrawer';
import BackDrop from './BackDrop/BackDrop';
// import SignIn from "../Sign in Page/SignIn";

function Main() {
  // const user = useSelector(selectUser);
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <>
      <div className="app">
        {/* <CloneHead /> */}
        <Header click={() => setSideToggle(true)}/>
        
        <SideDrawer show = {sideToggle}/>
        <BackDrop show = {sideToggle} click = {() => setSideToggle(false)}/>
        
        <div className="app__body">
          <div className="left_side">
            <Leftsidebar />
          </div>
          <div className="center_feed">
            <Feed />
          </div>
          <div className="right_side">
            <Widgets />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
