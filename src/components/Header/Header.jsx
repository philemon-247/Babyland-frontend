import React from "react";
import { Link } from "react-router-dom";
import headerImg from "../../assets/Rectangle 40.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="hero position-relative">
      <img className="position-relative" src={headerImg} alt="" />
      <div className="h-text position-absoulte d-flex flex-column align-items-start">
        <div className="t-head d-flex flex-column gap-3">
          <h1 className="m-o">Play, learn, & grow!</h1>
          <p className="m-0 pe-5">
            Crafting smiles with every toy, made for learning, fun, and growth
          </p>
        </div>
        <Link to="/shop" className="text-decoration-none">
          show now{" "}
        </Link>
      </div>
    </header>
  );
};

export default Header;
