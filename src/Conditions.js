import React from "react";

import "./conditions.css";
const myHrStyle = {
  border: 2,
  borderStyle: "solid",
  color: "#433f42",
};
function Conditions() {
  return (
    <div>
      <div className="container text-center">
        <div class="row">
          <div class="col-3">
            Feels like
            <div class="row" id="precip">
              16°C
            </div>
          </div>
          <div class="col-3">
            Wind
            <div class="row" id="wind-speed">
              2km/h
            </div>
          </div>
          <div class="col-3">
            Humidity
            <div class="row" id="precip">
              93%
            </div>
          </div>
        </div>
      </div>
      <hr style={myHrStyle} />
    </div>
  );
}
export default Conditions;
