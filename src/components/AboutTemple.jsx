import React from "react";
import "../styles/AboutTemple.css";
import templeImg from "../assets/about.png";

import {
  Landmark,
  Flower2,
  Orbit,
} from "lucide-react";

function AboutTemple() {
  return (
    <section className="temple-about-section">
      <div className="temple-about-wrapper">

        {/* Left Image */}
        <div className="temple-about-image">
          <img
            src={templeImg}
            alt="श्री शनि महाराज मंदिर"
          />
        </div>

        {/* Right Content */}
        <div className="temple-about-content">

          <span className="temple-subtitle">
            श्री शनि महाराज मंदिर
          </span>

          <h2>मंदिर का इतिहास एवं जीर्णोद्धार</h2>

          <div className="temple-divider">
            ✦ ✦ ✦
          </div>

          <p className="temple-about-text">
            शनि मंदिर का इतिहास पूरी तरह प्रमाणित नहीं है।
            मंदिर में स्थित शिला पर बनी मूर्ति की नक्काशी
            हजारों वर्ष पुरानी बताई जाती है। यह मंदिर
            श्रद्धालुओं की आस्था का प्रमुख केंद्र रहा है।

            <br /><br />

            विपुल कुमार चैनपुरा निवासी ने अपने माता-पिता की
            पावन स्मृति में जर्जर अवस्था में स्थित मंदिर के
            जीर्णोद्धार का संकल्प लिया। 01/12/2023 को
            जीर्णोद्धार कार्य प्रारंभ किया गया जो
            27/05/2025 को सफलतापूर्वक पूर्ण हुआ।
            भविष्य में भी मंदिर के विकास हेतु वे
            निरंतर तत्पर हैं।
          </p>

          <div className="temple-feature-grid">

            <div className="temple-feature-card">
              <div className="temple-feature-icon">
                <Landmark size={40} />
              </div>

              <h3>मंदिर का इतिहास</h3>

              <p>
                शनि मंदिर का इतिहास पूरी तरह प्रमाणित नहीं है।
                मंदिर में स्थित शिला पर बनी मूर्ति की नक्काशी
                हजारों वर्ष पुरानी मानी जाती है।
              </p>

              
            </div>

            <div className="temple-feature-card">
              <div className="temple-feature-icon">
                <Flower2 size={40} />
              </div>

              <h3>निर्माण ईस्वी</h3>

              <p>
                सम्बत 1876 मार्गशीर्ष शुक्ल पक्ष दशमी तिथि,
                ईस्वी सन दिनांक 26/11/1819 दिन शुक्रवार
                को इस मंदिर का निर्माण कराया गया।
              </p>
            </div>

            <div className="temple-feature-card">
              <div className="temple-feature-icon">
                <Orbit size={40} />
              </div>

              <h3>जीर्णोद्धार कार्य</h3>

              <p>
                विपुल कुमार चैनपुरा निवासी द्वारा अपने
                माता-पिता की स्मृति में 01/12/2023 को
                जीर्णोद्धार कार्य प्रारंभ किया गया जो
                27/05/2025 को पूर्ण हुआ।
              </p>
            </div>

          </div>

          <button className="temple-readmore-btn">
            मंदिर दर्शन करें
          </button>

        </div>

      </div>
    </section>
  );
}

export default AboutTemple;