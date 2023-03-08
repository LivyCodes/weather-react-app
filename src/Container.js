import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Titles from "./Titles";

import "./container.css";

function Container(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "8ca7dd4e61360b90fb66918853670e48";
    let units = "metric";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiURL).then(showTemperature);
  }

  if (weatherData.ready) {
    return (
      <div className="Container">
        <form id="city-search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                className="form-control"
                id="exampleInputCity"
                autoFocus="on"
                autoComplete="off"
                placeholder="Enter a city"
                onChange={handleChange}
              />
            </div>
            <div className="col-sm-2">
              <button type="submit" className="btn btn-primary">
                <span role="img" aria-label="search">
                  Search
                </span>
              </button>
            </div>
            <div className="col-sm-2"></div>
          </div>
        </form>
        <Titles info={weatherData} />
      </div>
    );
  } else {
    search();
    return `Loading...`;
  }
}
export default Container;
