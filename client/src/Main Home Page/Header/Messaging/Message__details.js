import React from "react";
import "./Message__details.css";

const Message__details = ({ name, message, img }) => {
  return (
    <>
      <div className="message__data">
        <div className="messagedata__left">
          <img src={img}></img>
        </div>
        <div className="messagedata__middle">
          <h4>{name}</h4>
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};

export default Message__details;
