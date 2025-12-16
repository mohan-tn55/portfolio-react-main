import React from "react";
import "./Hero.css";
import { TypeAnimation } from "react-type-animation";

// Import local image
import profile_img from "../../assets/profile.jpg"; // Assuming 'profile.jpg' is the main hero image

// Simple AnchorLink component for smooth scrolling
const AnchorLink = ({ href, offset, className, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const topOffset =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        (offset || 0);
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };
  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

const Hero = () => {
  return (
    <div id="home" className="hero">
      {/* Use imported image variable */}
      <div className="profile-picture">
        <div className="profile-picture-background">
          <img src={profile_img} alt="Profile" />
        </div>
      </div>

      <div className="cloz-icon">
        <a href="https://www.facebook.com/profile.php?id=100047952801578">
          <i className="fa fa-facebook-square"></i>
        </a>
        <a href="https://www.linkedin.com/in/mohan-v-17229a223/">
          <i className="fa fa-linkedin-square"></i>
        </a>
        <a href="https://www.instagram.com/mr_mohan_khan22/">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://x.com/MohanV2512">
          <i className="fa fa-twitter-square"></i>
        </a>
        <a href="https://github.com/mohan-tn55">
          <i className="fa fa-github-square"></i>
        </a>
      </div>

      <div className="profile-details-name">
        Hello, I'm <span className="highlighted-text">MOHAN</span>
      </div>
      <div className="profile-details-role">
        {" "}
        <h1>
          {" "}
          <TypeAnimation
            sequence={[
              "MERN stack Dev",
              1000,
              "Frontend Dev",
              1000,
              "React Dev",
              1000,
              "Full stack Dev",
            ]}
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em", display: "inline-block" }}
          />
        </h1>
        <span className="profile-role-tagline">
          Knack of building applications with front and back end operations.
        </span>
      </div>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect me
          </AnchorLink>
        </div>

        <a href="Mohan_web_resume.pdf" download="Mohan_Devcv.pdf">
          {" "}
          <button className="hero-resume">Get Resume</button>{" "}
        </a>
      </div>
    </div>
  );
};

export default Hero;
