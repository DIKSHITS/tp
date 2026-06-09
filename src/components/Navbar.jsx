import React, { useState } from "react";
import "../styles/Navbar.css";
import { FaGopuram, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <>
      <nav className="temple-navbar">
        <div className="navbar-container">

          <div className="logo-section">
            <FaGopuram className="temple-icon" />
            <h2>सनिचर बाबा मंदिर</h2>
          </div>

          <div
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </div>

          <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/gallery-page">GALLERY</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>

          {/* Calendar Button */}
          <div
            className="calendar-icon"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <FaCalendarAlt />
          </div>

        </div>
      </nav>

      {showCalendar && (
        <div className="calendar-popup">
          <div className="calendar-box">
            <button
              className="close-btn"
              onClick={() => setShowCalendar(false)}
            >
              ✕
            </button>

            <Calendar
              onChange={setDate}
              value={date}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;