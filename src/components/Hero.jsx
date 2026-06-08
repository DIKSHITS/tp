import React from "react";
import "../styles/Hero.css";
import heroBg from "../assets/hero.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">

         

         

         
          <div className="hero-buttons">
            <button className="donate-btn">
              🪔 DONATE NOW
            </button>

            <button className="visit-btn">
              🛕 VISIT TEMPLE
            </button>
          </div>

        </div>
      </div>

      <div className="curve-divider"></div>
    </section>
  );
}

export default Hero;