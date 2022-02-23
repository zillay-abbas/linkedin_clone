import "./SideDrawer.css";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HeaderOpt from "../Header/HeaderOption/HeaderOpt";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];

  const logout = () => {};

  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <HeaderOpt
          avatar="https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png"
          // user.photo
          onClick={logout}
        />
        <HeaderOpt Icon="fas fa-house-user" title="Home" />
        <HeaderOpt Icon="fas fa-user-friends" title="My Network" />
        <HeaderOpt Icon="fa fa-briefcase" title="Jobs" />
        <HeaderOpt Icon="fas fa-sms" title="Messaging" />
        <HeaderOpt Icon="fas fa-bell" title="Notifications" />
      </ul>
    </div>
  );
};

export default SideDrawer;
