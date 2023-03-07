import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

import "./titles.css";

function Titles() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function showTemperature(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      tempmax: response.data.main.temp_max,
      tempmin: response.data.main.temp_min,
      feelslike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      cityName: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Titles">
        <h5 id="city-name">{weatherData.cityName}</h5>
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
              <span id="temperature">
                {Math.round(weatherData.temperature)}°
              </span>
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
            <h6 id="status">{weatherData.description}</h6>

            <div className="var-temps">
              <li id="var-high-temp" className="temps">
                High:{Math.round(weatherData.tempmax)}°
              </li>
              <li id="var-low-temp" className="temps">
                Low:{Math.round(weatherData.tempmin)}°
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
                    {Math.round(weatherData.feelslike)}°C
                  </div>
                </li>
                <li>
                  Wind:
                  <div className="condition" id="wind-speed">
                    {Math.round(weatherData.wind)}km/h
                  </div>
                </li>
                <li>
                  Humidity:
                  <div className="condition" id="precip">
                    {Math.round(weatherData.humidity)}%
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "8ca7dd4e61360b90fb66918853670e48";
    let city = "Seoul";
    let units = "metric";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiURL).then(showTemperature);

    return `Loading...`;
  }
}
export default Titles;
