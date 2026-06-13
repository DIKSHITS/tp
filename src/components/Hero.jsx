import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "../styles/Hero.css";

import hero from "../assets/hero.png";
import hero1 from "../assets/hero1.png";

const heroImages = [hero, hero1];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Shri Shani Maharaj Mandir Patna City | Shanichar Baba Mandir Official Website
        </title>

        <meta
          name="description"
          content="Official website of Shri Shani Maharaj Mandir (Shanichar Baba Mandir), Patna City, Bihar."
        />
      </Helmet>

      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroImages[currentImage]})`,
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          
        </div>
      </section>

      <section className="renovation-section">
        <div className="renovation-container">
          <span className="section-tag">
            श्री शनि महाराज मंदिर
          </span>

          <h2>
            मंदिर जीर्णोद्धार एवं आध्यात्मिक विरासत
          </h2>

          <p>
            श्री शनि महाराज मंदिर (शनिचर बाबा मंदिर), पटना सिटी के
            प्रमुख धार्मिक स्थलों में से एक है।
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;