import React, { useEffect, useState } from "react";
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
  }, [currentImage]);

  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroImages[currentImage]})`,
        }}
      >
        <div className="hero-overlay"></div>

        <div className="curve-divider"></div>
      </section>

      <section className="renovation-section">
        <div className="renovation-container">
          <span className="section-tag">
            श्री शनि महाराज मंदिर
          </span>

          <h2>मंदिर जीर्णोद्धार</h2>

          <p>
            विपुल कुमार चैनपुरा निवासी अपने माता-पिता की पावन स्मृति में
            मंदिर, जो जर्जर स्थिति में थी, उसके जीर्णोद्धार का विचार किया।
            01/12/2023 को जीर्णोद्धार कार्य प्रारंभ किया गया जो
            27/05/2025 तक सफलतापूर्वक पूर्ण हुआ।
            वर्तमान में भी मंदिर के विकास, संरक्षण एवं भक्तों की सुविधाओं
            के लिए निरंतर तत्पर हैं।
          </p>

          <br />

          <p>
            शनि मंदिर का इतिहास पूरी तरह प्रमाणित नहीं होता। मंदिर में
            स्थित शिला में जो मूर्ति की नक्काशी है वह हजारों वर्ष पुरानी
            बताई जाती है।
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;