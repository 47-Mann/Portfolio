import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Header.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImg from "../../assets/Me.png";

const Header = () => {
  return (
    <section className="header-container" id="home">
      <div className="header-content">
        <p className="header-intro">Hi, I'm</p>
        <h1 className="fullName">Sahil Mann</h1>

        <h2 className="header-role">
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              1400,
              "MERN Stack Builder",
              1400,
              "Real-Time App Developer",
              1400,
              "Full-Stack Engineer",
              1400,
            ]}
            speed={18}
            repeat={Infinity}
            cursor={true}
            deletionSpeed={35}
            wrapper="span"
          />
        </h2>

        <p className="header-description">
          Full-stack software engineer focused on building scalable MERN
          applications and real-time systems. Built a live malware detection web
          app and conducted large-scale EMBER2024 research on 3M+ samples.
        </p>

        <div className="header-actions">
          <a
            href="https://github.com/47-Mann"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sahil-mann-799922252"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:mannsahil857@gmail.com"
            className="icon-link"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="profile-img-container">
        <img src={profileImg} alt="Sahil Mann" />
      </div>
    </section>
  );
};

export default Header;
