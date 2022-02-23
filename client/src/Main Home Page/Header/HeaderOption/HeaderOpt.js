import React from "react";
import "./HeaderOpt.css";
import { Avatar } from "@material-ui/core";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../features/userSlice";

function HeaderOpt({ avatar, Icon, title, onClick }) {
  // const user = useSelector(selectUser);

  return (
    <>
      <div onClick={onClick} className="headerOption">
        {Icon  && <i className={Icon} />}
        {avatar && <Avatar className="headerOption__icon" src={avatar} />}
        <h3 className="headerOption__title">{title}</h3>
      </div>
    </>
  );
}

export default HeaderOpt;
