import React from 'react'

import "./Chat.css";

export const Chat = () => {
  return (
    <div className='chat-cont'>
        <div className="img-cont">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
          className='avatar-2'
        />
        </div>
        <div className="msg-det">
            <div className="chat-name">
                Your Name &nbsp;
                <span className='name-date'>
                 &#8226; 9 : 00 AM
                </span>
            </div>

            <div className="chat-msg">
                Hello world!
            </div>
        </div>
    </div>
  )
}
