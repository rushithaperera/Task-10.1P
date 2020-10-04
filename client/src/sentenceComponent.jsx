import React from "react";
import "./taskType.css";

function Sentence() {
  return (
    <div className="sentence">
      <form class="ui form">
        <h4>Enter Sentence to Translate</h4>
        <div class="ui focus input">
          <input type="text" placeholder="Sentence..." />
        </div>
      </form>
    </div>
  );
}

export default Sentence;
