import React from "react";
import { User } from "../model";

const url = "http://localhost:5050/login";

export async function LoginService() {
  try {
    let current = {
      username: localStorage.getItem("username"),
      password: localStorage.getItem("password"),
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(current),
    });

    const data: User = await response.json();

    if (data.token.length < 1) {
      alert("Error logging in!");
    }
    return data;
  } catch (error) {
    console.error("Error: ", error);
  }
}

export default LoginService;
