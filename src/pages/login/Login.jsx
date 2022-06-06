import "./Login.css";
import React from "react";
import{Link}from "react-router-dom";
export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter Your email...!"
        />
        <label>password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter Your password...!"
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
     <Link  className="link" to="/register">Register</Link> 
      </button>
    </div>
  );
}
