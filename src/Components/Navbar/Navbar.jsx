import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FaMoon, FaSun } from "react-icons/fa";
import resume from "../../assets/Sahil-Mann.pdf";
import Contact from "../Contact/Contact.jsx";
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setIsDarkMode(savedTheme === "dark");
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <nav>
      <div className="nav-logo">{`SM`}</div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="../Header/Header.jsx">Home</a>
          </li>
          <li>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>
      <button
        className="theme-toggle"
        onClick={toggleDarkMode}
        title="Toggle Dark Mode"
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default Navbar;
