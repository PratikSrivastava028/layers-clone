import React, { useEffect, useRef } from "react";
import "./Footer.scss";
import gsap from "gsap";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
    );
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      {/* WAVE START */}
      <div className="footer-wave">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0f1113"
            d="M0,64L60,90.7C120,117,240,171,360,170.7C480,171,600,117,720,106.7C840,96,960,128,1080,144C1200,160,1320,160,1380,160L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>
      {/* WAVE END */}

      <div className="footer-content">
        <h2 className="footer-logo">Layers</h2>
        <p>Redefining sophistication with every tick ⌚</p>
        <p>© 2025 Layers. All rights reserved.</p>
        <p className="credits">Crafted  ❤️ by SHERYIANS SHER "PROXY"</p>
      </div>
    </footer>
  );
};

export default Footer;
