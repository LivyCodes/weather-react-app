import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactAnimatedWeather from "react-animated-weather";

import "./forecast.css";

function Forecast() {
  return (
    <div>
      <h6 className="title">Next 3-day Forecast</h6>
      <div class="weather-forecast" id="forecast">
        <div className="row forecast">
          <div className="col">
            <h6 className="forecast-date">Mon</h6>
            <ReactAnimatedWeather
              icon="PARTLY_CLOUDY_NIGHT"
              color="#000"
              size={42}
              animate={true}
            />
            <p className="temp">
              <span className="forecast-temp-max">16°C</span>/
              <span className="forecast-temp-min">12°C</span>
            </p>
          </div>
          <div className="col">
            <h6 className="forecast-date">Tue</h6>
            <ReactAnimatedWeather
              icon="WIND"
              color="#000"
              size={42}
              animate={true}
            />
            <p className="temp">
              <span className="forecast-temp-max">16°C</span>/
              <span className="forecast-temp-min">12°C</span>
            </p>
          </div>
          <div className="col">
            <h6 className="forecast-date">Wed</h6>
            <ReactAnimatedWeather
              icon="RAIN"
              color="#000"
              size={42}
              animate={true}
            />
            <p className="temp">
              <span className="forecast-temp-max">16°C</span>/
              <span className="forecast-temp-min">12°C</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Forecast;
