import "./UserStyles.css";
import LoginServe from "../server";
import { User } from "../model";
import { useState } from "react";
import LoginApi from "../Services/LoginService.service";

function Login() {
  function setName(name: string) {
    localStorage.setItem("username", name);
  }
  function setPass(pass: string) {
    localStorage.setItem("password", pass);
  }
  function setToken(token: string) {
    localStorage.setItem("token", token);
  }

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      const response = await LoginApi();

      if (response === undefined) {
        throw new Error();
      }
      console.log(response.token);
      setToken(response.token);
    } catch (error) {
      console.error(error);
    }
  };

  // const onClick = () => {
  //   try {
  //     const response = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(
  //         `username: ${localStorage.getItem(
  //           "username"
  //         )}, password: ${localStorage.getItem("pass")}`
  //       ),
  //     });
  //   } catch (error) {
  //     console.error("Error: ", error);
  //   }
  // };

  return (
    <div>
      <form className="needs-validation row g-3" id="loginForm" noValidate>
        <div id="inputDiv">
          <div className="col-6 log-input">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              onBlur={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div className="col-6 log-input">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onBlur={(e) => {
                setPass(e.target.value);
              }}
              required
            />
          </div>
          <div className="col-4">
            <button
              className="btn btn-primary btn-success"
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
