import React from "react";

import "./container.css";

function Container() {
  return (
    <div className="Container">
      <form id="city-search-form">
        <div className="row">
          <div className="col-5">
            <input
              type="search"
              class="form-control"
              id="exampleInputCity"
              autofocus="on"
              autocomplete="off"
              placeholder="Enter a city"
            />
          </div>
          <div className="col-sm-2">
            <button type="submit" className="btn btn-primary">
              <span role="img" aria-label="search">
                🔎
              </span>
            </button>
          </div>
          <div className="col-sm-2">
            <button type="submit" class="btn btn-primary" id="current-button">
              Current
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Container;
