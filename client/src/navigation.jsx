import React from "react";
import "./navigation.css";

function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <a class="active" href="#home">
            NEW REQUESTER TASK
          </a>
        </li>
        <li>
          <a href="#task">WORKER TASK</a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
