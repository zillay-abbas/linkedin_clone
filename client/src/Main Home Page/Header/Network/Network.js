import React from "react";

import NetworkItem from "./NetworkItem/NetworkItem";
import {
  faUserGroup,
  faAddressBook,
  faPeopleArrowsLeftRight,
  faUsers,
  faCalendarCheck,
  faNewspaper,
  faHashtag,
  faPager,
} from "@fortawesome/free-solid-svg-icons";

import "./Network.css";
import { ProfileCard } from "./ProfileCard/ProfileCard";

const Network = () => {
  return (
    <div className="container">
      <div className="network__container">
        <div className="network__left__side">
          <div className="network_heading normal">
            <h2>Manage my network</h2>
          </div>

          <NetworkItem ico={faUserGroup} text="Connections" number={23} />
          <NetworkItem ico={faAddressBook} text="Contacts" number={1} />
          <NetworkItem
            ico={faPeopleArrowsLeftRight}
            text="People I Follow"
            number={123}
          />
          <NetworkItem ico={faUsers} text="Groups" number={901} />
          <NetworkItem ico={faCalendarCheck} text="Events" number={1232} />
          <NetworkItem ico={faPager} text="Pages" number={12} />
          <NetworkItem ico={faNewspaper} text="Newsletter" number={3} />
          <NetworkItem ico={faHashtag} text="Hashtags" number={6} />

          {/* <div className="item">
          <div className="icon">
            <FontAwesomeIcon icon={faUserGroup} />
          </div>
          <div className="item__text">Groups</div>
          <div className="item__count">48</div>
        </div> */}
        </div>

        <div className="network__right__side">
          <div className="upper_network_side">
            <div className="invitation__heading normal">
              <h2>No pending invitations</h2>
            </div>

            <a href="/" className="invitation_btn">
              <span>Manage</span>
            </a>
          </div>

          <div className="down__conn">
            <div className="down_network_side">
              <div className="invitation__heading normal">
                <h2>Industry leaders in Pakistan you may know</h2>
              </div>

              <a href="/" className="invitation_btn">
                <span>See all</span>
              </a>
            </div>
              <div className="card__cont">
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
