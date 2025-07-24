import React from "react";
import "./About.scss";
import aboutWatch from "../assets/about-watch1.png";


const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>Love Our Creation</h2>
        <p>
            Our watches are crafted with passion and precision, blending timeless design with modern technology. Experience the luxury of a watch that tells more than just time.
        </p>
      </div>
      <div className="about-image">
        <img src={aboutWatch} alt="About Watch" />
      </div>
    </section>
  );
};

export default About;
