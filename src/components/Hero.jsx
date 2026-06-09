import React from "react";
import "../styles/Hero.css";
import heroBg from "../assets/hero.png";

function Hero() {
  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroBg})` }}
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
          <br></br>
          <p>शनि मंदिर का इतिहास पूरी तरह प्रमाणित नहीं होता मंदिर मे इस्तिथ शिला मे जो मूर्ति की नक्काशी वो हज़ारो वर्ष पुरानी बताई जाती है 
      ये शनि मंदिर के निचे लिखा रहेगा</p>

        </div>
      </section>
    </>
  );
}

export default Hero;