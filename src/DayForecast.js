import React from "react";
import WeatherIcon from "./WeatherIcon";

function DayForecast(props) {
  function MaxTemp() {
    let temp = Math.round(props.forecast.temp.max);
    return `${temp}°`;
  }
  function MinTemp() {
    let temp = Math.round(props.forecast.temp.min);
    return `${temp}°`;
  }
  function day() {
    let date = new Date(props.forecast.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <h6 className="forecast-date">{day()}</h6>
      <WeatherIcon icondata={props.forecast.weather[0].icon} size={36} />
      <p className="temp">
        <span className="forecast-temp-max">{MaxTemp()}</span>
        <span className="forecast-temp-min">{MinTemp()}</span>
      </p>
    </div>
  );
}
export default DayForecast;
