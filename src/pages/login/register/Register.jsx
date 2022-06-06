import "./Register.css";
import React from "react";
import{Link}from "react-router-dom";

export default function Register() {
  return (
    <div className="Register">
      <span className="RegisterTitle">Register</span>
      <form className="RegisterForm">
        <label>Username</label>
        <input
          type="text"
          className="RegisterInput"
          placeholder="Enter Your username...!"
        />
         <label>Email</label>
        <input
          type="text"
          className="RegisterInput"
          placeholder="Enter Your email...!"
        />
        <label>password</label>
        <input
          type="password"
          className="RegisterInput"
          placeholder="Enter Your password...!"
        />
        <button className="RegisterButton">Register</button>
      </form>
      <button className="RegisterloginButton">
      <Link className="link" to="/login">Login</Link> 
      </button>
    </div>
  );
}
