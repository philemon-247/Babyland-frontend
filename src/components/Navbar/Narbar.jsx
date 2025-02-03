import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import bluetop from "../../assets/Union.png";
import motor from "../../assets/Free Shipping.png";
import Search from "../../assets/Frame 72.png";
import navLogo from "../../assets/footLogo.png";

const narbar = () => {
  return (
    <nav>
      <div className="position-relative">
        <img className="w-100" src={bluetop} alt="" />

        <div className="loerg position-absolute d-flex w-100 justify-content-between container align-items-center start-0 end-0 top-0 mt-2 px-5">
          <div className="d-flex align-items-center gap-2">
            <img src={motor} alt="" />
            <p className="mb-0 text-light">Free free shipping with over $150</p>
          </div>

          <div className="d-flex align-items-center gap-2">
            <Link to="/login" className="text-decoration-none text-light">
              Login
            </Link>
            <Link to="/register" className="text-decoration-none text-light">
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* ================================================= */}

      <div className="main-nav container d-flex align-items-center justify-content-center my-3">
        <Link>
          <img src={navLogo} alt="" />
        </Link>

        <div className="d-flex gap-5 align-items-center">
          <Link to="/" className="p-2 fw-bold tex-dark text-decoration-none">
            Home
          </Link>
          <Link
            to="/shop"
            className="p-2 fw-bold tex-dark text-decoration-none"
          >
            Shop
          </Link>
          <Link
            to="/likes"
            className="p-2 fw-bold tex-dark text-decoration-none"
          >
            Likes
          </Link>
          <Link
            to="/blog"
            className="p-2 fw-bold tex-dark text-decoration-none"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="p-2 fw-bold tex-dark text-decoration-none"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default narbar;
