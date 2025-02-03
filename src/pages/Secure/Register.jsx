import React from "react";
import "./Register.css";

export const Register = () => {
  return (
    <div className="signup mt-5">
      <form className="up-form" action="">
        <h1 className="up-tittle">Register</h1>
        <div className="up-input">
          <input type="email" placeholder="Email adddress" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Repeat password" />
          <button>create an account</button>
        </div>

        <div className="already">
          <p className="mb-0">Already have an account</p>
          <Link to="/login"></Link>
        </div>
      </form>
    </div>
  );
};
