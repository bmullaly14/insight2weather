import React, { useState, Component, useRef } from "react";
import "./App.css";
import InputField from "./Components/InputField";
import { ForecastResponse, LatLong, n, User } from "./model";
import WeatherDisplay from "./Components/WeatherDisplay";
import ErrorBoundary from "./Components/ErrorBoundary";
//import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
//import PrivateRoute from "./Auth/PrivateRoute";

const App: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [response, setResponse] = useState<ForecastResponse>(n);
  function handleState(newValue: ForecastResponse) {
    setResponse(newValue);
  }
  const [updated, setUpdated] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState<User>();

  function LogOut() {
    sessionStorage.clear();
  }

  return (
    <div className="App">
      <div id="header-bar">
        <span className="heading">
          Insight<span id="2">2</span>Weather
        </span>
        <div id="router-div">
          <ul id="router-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user/login">Login</Link>
            </li>
            <li>
              <Link to="/user/register">Register</Link>
            </li>
            <li>
              <Link to="/" onClick={LogOut}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <Routes>
            <Route path="/" Component={() => <Home />} />
            <Route path="/user/register" Component={() => <Register />} />
            <Route path="/user/login" Component={() => <Login />} />
          </Routes>
        </div>
      </div>

      {/* */}
      {/* <span className=""> 
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
      ></script> */}
      {/*  */}
    </div>
  );
};

export default App;
