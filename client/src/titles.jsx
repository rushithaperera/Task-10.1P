import React from "react";
import "./titles.css";

function Title(props) {
  return (
    <div className="titles">
      <p>{props.text}</p>
    </div>
  );
}

export default Title;
