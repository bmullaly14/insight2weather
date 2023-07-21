import React, { useState } from "react";
import "./UserStyles.css";
import RegisterApi from "../Services/RegisterService.service";
import Greeting from "./Greeting";
import PropTypes from "prop-types";

function Register() {
  const [name, setName] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [outUser, setOutUser] = useState<string>("");
  const [isRegistered, setReg] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (
      !form.checkValidity() ||
      (pass !== confirm && pass.length > 1 && confirm.length > 1)
    ) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add("was-validated");

    event.preventDefault();
    try {
      const response = await RegisterApi(name, pass);

      if (response === undefined) {
        throw new Error();
      } else {
        setOutUser(response.name as string);
        setReg(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form
        className="needs-validation row g-3"
        id="registerForm"
        onSubmit={handleSubmit}
        noValidate
      >
        <div id="inputDiv">
          <div className="col-6 reg-input">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              onBlur={(e) => setName(e.target.value)}
              required
            ></input>
            <div className="invalid-feedback">Please enter a username</div>
          </div>
          <div className="col-6 reg-input">
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
            ></input>
            <div className="invalid-feedback">Please enter a password</div>
          </div>
          <div className="col-6 reg-input">
            <label htmlFor="confirm" className="form-label">
              {" "}
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirm"
              onBlur={(e) => {
                setConfirm(e.target.value);
              }}
              required
            ></input>
            <div className="invalid-feedback">Passwords must match!</div>
          </div>
          <div className="col-4">
            <button className="btn btn-primary btn-success" type="submit">
              Register
            </button>
          </div>
        </div>
      </form>
      <Greeting isRegistered={isRegistered} outUser={outUser}></Greeting>
    </div>
  );
}

export default Register;
