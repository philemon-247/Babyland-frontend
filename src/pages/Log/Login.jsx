import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export const w = () => {
  return (
    <div className="signin mt-5">
      <form className="in-form" action="">
        <h1 className="in-tittle">Login</h1>
        <div className="in-input">
          <input type="email" placeholder="Email adddress" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Repeat password" />
          <button>Login to your account</button>
        </div>

        <div className="dont">
          <p className="mb-0">Don't have an account?</p>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};
