import React, { useEffect, useRef } from "react";
import "./Hero.scss";
import gsap from "gsap";
import watchImage from "../assets/about-watch.png";

const Hero = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animate heading + paragraph
    gsap.fromTo(
      textRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      }
    );

    // Animate watch image
    gsap.fromTo(
      imageRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content" ref={textRef}>
        <h1>NEW LAUNCH WATCHES</h1>
        <p>YOUR DREAM WATCH AWAITS
            <br />
            Discover the perfect blend of style and precision.
            
        </p>
      </div>
      <div className="hero-image">
        <img src={watchImage} alt="watch" ref={imageRef} />
      </div>
    </section>
  );
};

export default Hero;
