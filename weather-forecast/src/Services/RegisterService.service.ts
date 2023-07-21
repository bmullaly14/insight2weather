import React from "react";
import { User } from "../model";

const url = "http://localhost:5050/login/register";

export async function RegisterService(user: string, pass: string) {
  try {
    let current = {
      username: user,
      password: pass,
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

export default RegisterService;
