import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Chat } from "../Profile/Chat/Chat";
import { Profile } from "../Profile/Profile";

import "./ChatComp.css";

const ChatComp = ({onclick}) => {
  return (
    <>
      <div className="right__top">
        <div className="pro_back" onClick={onclick}>
          <ArrowBackIcon />
        </div>
        <div className="pro-name">
          <h3 className="flex-grow-1">Profile Name</h3>
        </div>

        <div className="pro__opt">
          <div className="left-icons">
            <i className="fa fa-bars" />
          </div>
          <div className="left-icons">
            <i className="fas fa-edit" />
          </div>
        </div>
      </div>

      <div className="message__det">
        <div className="scroll-chat">
          <Profile />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
        </div>
      </div>

      <div className="bottom__msg">
        <div className="inp__bar">
          <input className="inpt" placeholder="Write a message" />
        </div>
        <div className="send__btn">
          <button className="send">Send</button>
        </div>
      </div>
    </>
  );
};

export default ChatComp;
