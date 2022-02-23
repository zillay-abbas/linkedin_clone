import React from "react";
import "./InputOpt.css";

function InputOpt({ Icon, title, color }) {
  return (
    <>
      <div className="inputOption">
        <i className={Icon} style={{ color: color }}></i>
        {/* Now in this case we are dynamically styling i.e assigning colors */}
        <h4>{title}</h4>
      </div>
    </>
  );
}

export default InputOpt;
