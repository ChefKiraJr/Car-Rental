import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-logo"></div>
        <div className="header-nav">
          <div className="header-nav__text">Our Service</div>
          <div className="header-nav__text">Why Us</div>
          <div className="header-nav__text">Testimonial</div>
          <div className="header-nav__text">FAQ</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
