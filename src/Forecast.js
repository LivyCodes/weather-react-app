import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import DayForecast from "./DayForecast";

import "./forecast.css";

function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleDataResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div>
        <h6 className="title">Next 5-day Forecast</h6>
        <div className="weather-forecast" id="forecast">
          <div className="row forecast">
            {forecast.map(function (forecast, index) {
              if (index > 0 && index < 6) {
                return (
                  <div className="col" key={index}>
                    <DayForecast forecast={forecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "8ca7dd4e61360b90fb66918853670e48";
    let units = "metric";
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

    axios.get(apiURL).then(handleDataResponse);

    return null;
  }
}
export default Forecast;
