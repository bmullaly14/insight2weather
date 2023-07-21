import React from "react";
import { Route, RouteProps } from "react-router-dom";
import Login from "../Components/Login";
import { JSX } from "react/jsx-runtime";

const PrivateRoute = (props: JSX.IntrinsicAttributes & RouteProps) => {
  //   const token = localStorage.getItem("auth");
  //   return (
  //     <>
  //       {token ? (
  //         <Route {...props} />
  //       ) : (
  //         <Route path="/user/login" Component={Login} />
  //       )}
  //     </>
  //   );
};

export default PrivateRoute;
