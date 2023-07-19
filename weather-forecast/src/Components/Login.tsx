import React from "react";
import "./UserStyles.css";

function Login() {
  return (
    <div>
      <form className="needs-validation row g-3" noValidate>
        <div>
          <div className="col-12">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="hidden"
              className="form-control"
              id="password"
              required
            />
          </div>
          <div className="col-4">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
