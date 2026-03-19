import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-name">Sahil Mann</h3>

        <p className="footer-role">
          Full-Stack Developer • MERN • Real-Time Systems
        </p>

        <div className="footer-social">
          <a
            href="mailto:mannsahil857@gmail.com"
            aria-label="Email"
            title="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/47-Mann"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sahil-mann-799922252"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Sahil Mann. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
