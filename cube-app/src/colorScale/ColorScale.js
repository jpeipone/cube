import React from "react";
import "./ColorScale.css";

const ColorScale = () => {
  return (
    <div className="color-scale-container">
      <ul className="list__colors">
        <li className="color__green__7">+5</li>
        <li className="color__green__1">+1</li>
        <li className="color__green__0">{">"}</li>
        <li className="color__0">0</li>
        <li className="color__red__0">{"<"}</li>
        <li className="color__red__1">{"-1"}</li>
        <li className="color__red__7">{"-5"}</li>
      </ul>
    </div>
  );
};

export default ColorScale;
