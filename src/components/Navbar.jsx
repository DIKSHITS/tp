import React, { useState } from "react";
import "../styles/Navbar.css";
import { FaGopuram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="temple-navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo-section">
          <FaGopuram className="temple-icon" />
          <h2>सानिचर बाबा मंदिर</h2>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>

        {/* Navigation Menu */}
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              ABOUT
            </Link>
          </li>

          <li>
            <Link to="/gallery-page" onClick={() => setMenuOpen(false)}>
              GALLERY
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              CONTACT
            </Link>
          </li>

          {/* Mobile Contact Button */}
          <li className="mobile-btn">
           
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="donate-btn desktop-btn">
          CONTACT US
        </button>

      </div>
    </nav>
  );
}

export default Navbar;