import React from "react";

import "./titles.css";
const hrStyle = {
  border: 2,
  borderStyle: "dashed",
  color: "#433f42",
};
function Titles() {
  return (
    <div className="Titles">
      <h5 id="city-name">Canberra</h5>
      <h5 id="day-date">Sun, 19 Feb 2023</h5>
      <h5 id="icon-1">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3313/3313998.png"
          alt="Weather icon"
          width="120"
          id="icon-element"
        />
      </h5>
      <h4 id="temperature-input" className="weather-temp">
        <span id="temperature">16°</span>
        <span>
          <a href="button" id="celsius" className="active">
            C
          </a>
          |
          <a href="button" id="farenheit">
            F
          </a>
        </span>
      </h4>
      <h6 id="status">Mist</h6>
      <ul>
        <li id="var-high-temp">High:18°</li>
        <li id="var-low-temp">Low:14°</li>
      </ul>
      <hr style={hrStyle} />
    </div>
  );
}
export default Titles;
