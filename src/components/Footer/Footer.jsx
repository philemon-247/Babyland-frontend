import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import ig from "../../assets/Instagram.png";
import x from "../../assets/twit.png";
import fb from "../../assets/faceb.png";
import pin from "../../assets/pin.png";
import footlogo from "../../assets/footLogo.png";
import bars from "../../assets/image 2.png";

const Footer = () => {
  return (
    <footer className="position-relative">
      <img className="foot-img position-relative" src={bars} alt="" />
      <div className="inn-footer text-start d-flex align-items-start position-absolute">
        <div className="foot-one d-flex flex column">
          <div className="d-flex flex-column align-items-start gap-3">
            <Link to="/">
              <img src={footlogo} alt="" />
            </Link>
            <p className="m-0">
              Numc consequat interdum varius sit amet mattis
            </p>
          </div>

          <div className="d-flex align-items-start gap-3">
            <a href="#">
              <img src={ig} alt="" />
            </a>
            <a href="#">
              <img src={x} alt="" />
            </a>
            <a href="#">
              <img src={fb} alt="" />
            </a>
            <a href="#">
              <img src={pin} alt="" />
            </a>
          </div>
        </div>

        <div className="foot-two d-flex flex-column align-items-start ">
          <h5 className="mb-0">My account</h5>
          <div className="d-flex flex-column align-items-start gap-3">
            <p> Track my order</p>
            <p> Terms of use</p>
            <p> Wishlist</p>
            <p> Submit Your feedback</p>
          </div>
        </div>

        <div className="foot-three d-flex flex-column align-items-start">
          <h5 className="mb-0">Customer service</h5>

          <div className="d-flex flex-column align-items-start gap-3">
            <p>Monday to Friday</p>
            <p>10am to 6pm(NewYork time)</p>
            <p>
              call us: <span>081-2437-4721</span>
            </p>
            <p>
              Email us: <span>afedayo@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
