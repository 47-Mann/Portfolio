import React from "react";
import "./Footer.css";
import logo from "../../assets/react.svg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer-copyright">
        <p>&copy; 2026 Sahil Mann. All rights reserved.</p>
      </div>
      <div className="header-social">
        <a href="mailto:mannsahil857@gmail.com" title="Email">
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/47-Mann"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sahil-mann-799920252"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
