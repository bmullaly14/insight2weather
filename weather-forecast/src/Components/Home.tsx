import React, { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import InputField from "./InputField";
import WeatherDisplay from "./WeatherDisplay";
import { ForecastResponse, n } from "../model";
import "../App.css";

function Home() {
  const [search, setSearch] = useState<string>("");
  const [response, setResponse] = useState<ForecastResponse>(n);
  function handleState(newValue: ForecastResponse) {
    setResponse(newValue);
  }
  const [updated, setUpdated] = useState<boolean>(false);

  return (
    <div className="App">
      <span className="">
        <ErrorBoundary>
          <InputField
            search={search}
            setSearch={setSearch}
            handleState={handleState}
            setUpdated={setUpdated}
          />
        </ErrorBoundary>
      </span>
      <span className="container">
        <ErrorBoundary>
          <WeatherDisplay
            weather={response}
            updated={updated}
            v-show={updated}
          ></WeatherDisplay>
        </ErrorBoundary>
      </span>
      <div className="container">
        <div id="about">
          <span>
            <h3>About Insight2Weather</h3>
            <p>
              Created by{" "}
              <a href="https://www.linkedin.com/in/benmullaly14/">
                Ben Mullaly
              </a>{" "}
              , utilizing React, TypeScript, and Express. The styling
              incorporates the Bootstrap toolkit and jquery.{" "}
            </p>
            <p>
              This project is powered by the{" "}
              <a href="https://geocoding.geo.census.gov/geocoder/">
                Census Geocoder API
              </a>{" "}
              and the{" "}
              <a href="https://www.weather.gov/">
                National Weather Service API
              </a>{" "}
              and is hosted by{" "}
              <a href="https://pages.github.com/">GitHub Pages</a>.
            </p>
          </span>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}

export default Home;
