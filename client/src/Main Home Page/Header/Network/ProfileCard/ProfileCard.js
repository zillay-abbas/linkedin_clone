import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ProfileCard.css";

export const ProfileCard = () => {
  return (
    <div className="card__container">
      <div className="close__top">
        <div className="close__mark">
          <FontAwesomeIcon className="close__ico" icon={faXmark} />
        </div>
      </div>
      <img src="img/bg.jpg" alt="background" className="profile__background" />
      <img src="img/linkedin_profile.png" alt="" className="profile__image" />
      <div className="below__img">
        <span className="profile__name">Qurashii</span>
        <span className="profile__designation">
          Full Stack Developer at Infini8y
        </span>
        <span className="mutual__conn">9 mutual connections</span>
        <div className="connect__btn">Connect</div>
      </div>
    </div>
  );
};
