import "./UserStyles.css";
import LoginServe from "../server";
import { User } from "../model";
import { useState } from "react";
import LoginApi from "../Services/LoginService.service";
import { redirect } from "react-router-dom";
import Greeting from "./Greeting";

function Login() {
  function setName(name: string) {
    sessionStorage.setItem("username", name);
    setUser(name);
  }
  function setPass(pass: string) {
    sessionStorage.setItem("password", pass);
  }
  function setToken(token: string) {
    sessionStorage.setItem("token", token);
  }

  const [isLogged, setLog] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add("was-validated");

    event.preventDefault();
    try {
      const response = await LoginApi();

      if (response === undefined) {
        throw new Error();
      }
      console.log(response.token);
      setToken(response.token);
      setLog(true);

      redirect("http://localhost:3000/");
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
      <form
        className="needs-validation row g-3"
        id="loginForm"
        onSubmit={handleSubmit}
        noValidate
      >
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
            <div className="invalid-feedback">Please enter a username</div>
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
            <div className="invalid-feedback">Please enter a password</div>
          </div>
          <div className="col-4">
            <button
              className="btn btn-primary btn-success"
              type="submit"
              // onSubmit={(e) => {
              //   handleSubmit(e);
              // }}
            >
              Login
            </button>
          </div>
        </div>
      </form>
      <Greeting isRegistered={isLogged} outUser={user}></Greeting>
    </div>
  );
}

export default Login;
