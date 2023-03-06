import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactAnimatedWeather from "react-animated-weather";

import "./titles.css";

function Titles() {
  return (
    <div className="Titles">
      <h5 id="city-name">Canberra</h5>
      <h5 id="day-date">Sun, 19 Feb 2023</h5>
      <div className="row">
        <div className="col-5">
          <h5 className="icon-1">
            <ReactAnimatedWeather
              icon="FOG"
              color="#000"
              size={64}
              animate={true}
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

          <div className="var-temps">
            <li id="var-high-temp" className="temps">
              High:18°
            </li>
            <li id="var-low-temp" className="temps">
              Low:14°
            </li>
          </div>
        </div>
        <div className="col-2">
          <div className="vl"></div>
        </div>
        <div className="col-5">
          <div className="currentConditions">
            <ul>
              <li>
                Feels like:
                <div className="condition" id="precip">
                  16°C
                </div>
              </li>
              <li>
                Wind:
                <div className="condition" id="wind-speed">
                  2km/h
                </div>
              </li>
              <li>
                Humidity:
                <div className="condition" id="precip">
                  93%
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Titles;
