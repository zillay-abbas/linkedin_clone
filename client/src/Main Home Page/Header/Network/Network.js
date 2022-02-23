import "./Network.css";
import React from "react";

const Network = () => {
  return (
    <div className="network__container">
      <div className="network__left__side">

        <div className="normal__heading">
          <i class="fa-solid fa-user-group"></i>
          <h2>Manage my network</h2>
        </div>

        <div className="item">
          <div className="">Connections</div>
          <div className="">813</div>
        </div>

        <div className="item">
          <div className="">Contacts</div>
          <div className="">128</div>
        </div>

        <div className="item">
          <div className="">People I Follow</div>
          <div className="">13</div>
        </div>

        <div className="item">
          <div className="">Groups</div>
          <div className="">48</div>
        </div>
      </div>

      <div className="network__right__side"></div>
    </div>
  );
};

export default Network;
