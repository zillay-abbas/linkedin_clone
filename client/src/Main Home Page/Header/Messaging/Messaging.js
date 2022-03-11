import React, { useState } from "react";
import Messages__review from "./Messages__review";
import Message__details from "./Message__details";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Chat } from "./Profile/Chat/Chat";
import { Profile } from "./Profile/Profile";

import "./Messaging.css";
import ChatComp from "./ChatComp/ChatComp";

const Messaging = () => {
  const [openChat, setOpenChat] = useState(false);

  const performClick = () => {
    setOpenChat(!openChat);
  };

  return (
    <div className="msg-cont">
      <div className="messaging">
        <div className="leftside">
          <div className="left__top">
            <h3 className="flex-grow-1">Messaging</h3>

            <div className="rig__icons">
              <div className="ico__">
                <i className="fa fa-bars" />
              </div>
              <div className="ico__">
                <i className="fas fa-edit" />
              </div>
            </div>
          </div>

          <div className="left__bottom">
            <div className="search__bar">
              <input className="search__inp" placeholder="  Search Messages" />
            </div>

            <div className="chat__list">
              <Messages__review onclick={performClick} />
              <Messages__review onclick={performClick} />
            </div>
            <div className="foot_stick"></div>
          </div>
        </div>

        <div className="rightside">
          <ChatComp onclick={performClick} />
        </div>
      </div>
    </div>
  );
};

export default Messaging;
