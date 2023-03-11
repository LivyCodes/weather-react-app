import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import ConvertTemp from "./convertTemp";

import "./titles.css";

function Titles(props) {
  if (!props.info) {
    return null;
  }
  return (
    <div className="Titles">
      <h5 id="city-name">{props.info.cityName}</h5>
      <h5 id="day-date">
        <FormatDate date={props.info.date} />
      </h5>
      <div className="row">
        <div className="col-5">
          <h5 className="icon-1">
            <WeatherIcon icondata={props.info.icon} size={64} />
          </h5>

          <h4 id="temperature-input" className="weather-temp">
            <ConvertTemp celsius={props.info.temperature} />
          </h4>
          <h6 id="status">{props.info.description}</h6>

          <div className="var-temps">
            <li id="var-high-temp" className="temps">
              High:{Math.round(props.info.tempmax)}°
            </li>
            <li id="var-low-temp" className="temps">
              Low:{Math.round(props.info.tempmin)}°
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
                  {Math.round(props.info.feelslike)}°C
                </div>
              </li>
              <li>
                Wind:
                <div className="condition" id="wind-speed">
                  {Math.round(props.info.wind)}km/h
                </div>
              </li>
              <li>
                Humidity:
                <div className="condition" id="precip">
                  {Math.round(props.info.humidity)}%
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
