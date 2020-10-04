import React from "react";
import { Checkbox } from "semantic-ui-react";
import "./taskType.css";

function Choice() {
  return (
    <div className="choices">
      <h4>Worker Options</h4>
      <Checkbox label="Option 1" style={{ marginLeft: 15 }} />
      <br></br>
      <br></br>
      <Checkbox label="Option 2" style={{ marginLeft: 15 }} />
      <br></br>
      <br></br>
      <Checkbox label="Option 3" style={{ marginLeft: 15 }} />
      <br></br>
      <br></br>
      <Checkbox label="Option 4" style={{ marginLeft: 15 }} />
    </div>
  );
}

export default Choice;
