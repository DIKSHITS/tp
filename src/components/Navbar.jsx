import React from "react";
import "../styles/Navbar.css";
import { FaGopuram } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="temple-navbar">
      <div className="navbar-container">

        <div className="logo-section">
          <FaGopuram className="temple-icon" />
          <h2>सानिचर बाबा मंदिर </h2>
        </div>

    <ul className="nav-menu">
  <li><Link to="/">HOME</Link></li>
  <li><Link to="/about">ABOUT</Link></li>
  
  <li><Link to="/gallery-page">GALLERY</Link></li>
  
  <li><Link to="/contact">CONTACT</Link></li>
</ul>

        <button className="donate-btn">
          CONTACT US
        </button>

      </div>
    </nav>
  );
}

export default Navbar;