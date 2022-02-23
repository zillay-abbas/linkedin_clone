import React from "react";
import "./Button.css";

const Button = ({ title, classtype }) => {
  return (
    <>
      <div className="btntypes">
        <p>{title}</p>
      </div>
    </>
  );
};

export default Button;
