import React, { useState } from "react";
import "./Messages__review.css";
import { Data } from "./MessageApi";

const Messages__review = ({onclick}) => {
  return (
    <div className="top-cont" onClick={onclick}>
      <div className="message__r">
        <div className="messager__left">
          <img src="/img/linkedin_profile.png" className="msg-img" alt="profile"></img>
        </div>
        <div className="messager__middle">
          <h4 className="pro-name">Name</h4>
          <div className="pro-chat-det">
            <p className="pro-rep">Profile Name:</p>
            <p className="pro-chat">Message</p>
          </div>
        </div>
      </div>
      <div className="end-line">
      </div>
    </div>
  );
};

export default Messages__review;
