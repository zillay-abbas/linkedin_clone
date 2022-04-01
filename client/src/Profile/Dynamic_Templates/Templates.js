import React, { useState } from "react";
import "./Templates.css";
import ProfileA from "../../ProfileTemp/ProfileA/Profile";
import ProfileB from "../../ProfileTemp/ProfileB/Profile";
import ProfileC from "../../ProfileTemp/ProfileC/ProfileC";
import { AiFillEdit } from "react-icons/ai";
import { SketchPicker } from "react-color";

function Templates() {
  const [active, setActive] = useState("thirdCard");
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("");
  const [bgcolor, setBgcolor] = useState("white");
  const [txtcolor, setTxtcolor] = useState("black");

  const ColorPicker = (color) => {
    switch (color) {
      case "backgroundColor":
        return (
          <SketchPicker
            color={bgcolor}
            onChangeComplete={(bgcolor) => {
              setBgcolor(bgcolor.hex);
            }}
          />
        );
      case "textColor":
        return (
          <SketchPicker
            color={txtcolor}
            onChangeComplete={(txtcolor) => {
              setTxtcolor(txtcolor.hex);
            }}
          />
        );
      default:
    }
  };

  function renderSwitch(param) {
    switch (param) {
      case "firstCard":
        return <ProfileA bgcolor={bgcolor} />;
      case "secondCard":
        return <ProfileB bgcolor={bgcolor} />;
      case "thirdCard":
        return <ProfileC bgcolor={bgcolor} txtcolor={txtcolor} />;
      default:
        return <ProfileC />;
    }
  }

  return (
    <>
      <div className="contain">
        <AiFillEdit className="edit" onClick={() => setShow(true)} />
        {renderSwitch(active)}

        {show ? (
          <div className="theme_sidebar">
            {/* onClick={() => setShow(false)} */}
            <a onClick={() => setShow(false)} href="#!">Back</a>
            <div className="text">
              <h3>Choose The Template You Want</h3>
            </div>
            <div className="templates">
              <img
                src="img/template icons/Untitled-3.png"
                alt="temp_icon"
                onClick={() => setActive("firstCard")}
              ></img>
              <img
                src="img/template icons/Untitled-2.png"
                alt="temp_icon"
                onClick={() => setActive("secondCard")}
              ></img>
              <img
                src="img/template icons/Untitled-1.png"
                alt="temp_icon"
                onClick={() => setActive("thirdCard")}
              ></img>
            </div>

            <div className="color_picker">
              <button onClick={() => setColor("backgroundColor")}>
                Choose Background Color
              </button>
              <button onClick={() => setColor("textColor")}>
                Choose Text Color
              </button>
              <div className="color_wrap">{ColorPicker(color)}</div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Templates;
