import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-logo"></div>
        <div className="header-nav">
          <p>Our Service</p>
          <p>Why Us</p>
          <p>Testimonial</p>
          <p>FAQ</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
