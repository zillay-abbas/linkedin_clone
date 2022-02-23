import React from "react";
import "./Header.css";
import HeaderOpt from "./HeaderOption/HeaderOpt";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../features/userSlice";

function Header({click}) {
  // const user = useSelector(selectUser);

  const logout = () => {};
  return (
    <>
      {/* We are dividing our header into two parts left and right */}
      <div className="header">
        {/* Firstly we will see the left side of the header which contains an image which is serving as logo, a search icon and an input field as a search bar */}

        <div className="header__left">
          
          <img className="icon" src="img/GETME.png" />

          <div className="header__search">
            {/* Search Icon */}
            <i className="fa fa-search search_icon"></i>
            <input type="text" />
          </div>


          <div className="hamburger__menu" onClick={click}>
            <div></div>
            <div></div>
            <div></div>
          </div>

        </div>
        {/* Secondly we will see the right side of header in which there is a nav bar and an avatar placed where the profile of the logined person will be displayed.
        basically we are sending the contents and icons of the navbar as a prop to another component(HeaderOpt) which we have specifically created for this purpose */}
        <div className="header__right">
          <HeaderOpt Icon="fas fa-house-user" title="Home" />
          <HeaderOpt Icon="fas fa-user-friends" title="My Network" />
          <HeaderOpt Icon="fa fa-briefcase" title="Jobs" />
          <HeaderOpt Icon="fas fa-sms" title="Messaging" />
          <HeaderOpt Icon="fas fa-bell" title="Notifications" />
          <HeaderOpt
            avatar="https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png"
            // user.photo
            onClick={logout}
          />
        </div>
      </div>

      {/* <div className="onHamburgericon__click">
        <div className="crossIcon">
          <i className="fas fa-times " />
        </div>
      </div> */}
    </>
  );
}

export default Header;
