import React from "react";

import "./forecast.css";

function Forecast() {
  return (
    <div>
      <h6>Next 3-day Forecast</h6>
      <div class="weather-forecast" id="forecast">
        <div className="row forecast">
          <div className="col">
            <h6 className="forecast-date">Mon</h6>
            <img
              src="https://cdn-icons-png.flaticon.com/128/1164/1164941.png"
              alt="weather icon"
              width="100"
            />
            <p className="temp">
              <span className="forecast-temp-max">16°C</span>/
              <span className="forecast-temp-min">12°C</span>
            </p>
          </div>
          <div className="col">
            <h6 className="forecast-date">Tue</h6>
            <img
              src="https://cdn-icons-png.flaticon.com/128/1164/1164941.png"
              alt="weather icon"
              width="100"
            />
            <p className="temp">
              <span className="forecast-temp-max">16°C</span>/
              <span className="forecast-temp-min">12°C</span>
            </p>
          </div>
          <div className="col">
            <h6 className="forecast-date">Wed</h6>
            <img
              src="https://cdn-icons-png.flaticon.com/128/1164/1164941.png"
              alt="weather icon"
              width="100"
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
