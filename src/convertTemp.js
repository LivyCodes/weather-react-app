import React, { useState } from "react";

function ConvertTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function Fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <span id="temperature">{Math.round(props.celsius)}°</span>
        <span>
          C |{" "}
          <a href="button" id="celsius" onClick={showFahrenheit}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span id="temperature">{Math.round(Fahrenheit())}°</span>
        <span>
          <a href="button" id="celsius" onClick={showCelsius}>
            C
          </a>
          | F
        </span>
      </div>
    );
  }
}

export default ConvertTemp;
