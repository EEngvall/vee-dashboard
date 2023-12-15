// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar({ isDarkMode, toggleDarkMode }) {
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <Link
          to="/"
          className={`navbar-brand ${isDarkMode ? "text-light" : "text-dark"}`}
        >
          VEE
        </Link>

        {/* Navbar Toggler Button for Small Screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${
                  isDarkMode ? "text-light" : "text-dark"
                }`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${
                  isDarkMode ? "text-light" : "text-dark"
                }`}
              >
                About
              </Link>
            </li>
            {/* Add more navigation items as needed */}
          </ul>
        </div>

        {/* Dark Mode Toggle Switch */}
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="darkModeToggle"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <label
            className={`form-check-label ${
              isDarkMode ? "text-light" : "text-dark"
            }`}
            htmlFor="darkModeToggle"
          >
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
