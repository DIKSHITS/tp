import React from "react";
import "../styles/AboutTemple.css";
import ramImg from "../assets/about.png";

import {
  Landmark,
  Flower2,
  Orbit,
} from "lucide-react";

function AboutTemple() {
  return (
    <section className="about-temple">

      <div className="about-container">

        {/* Left Image */}
        <div className="about-image">
          <img src={ramImg} alt="मंदिर" />
        </div>

        {/* Right Content */}
        <div className="about-content">

          <h2>हमारे मंदिर के बारे में</h2>

          <div className="title-divider">
            ✦
          </div>

          <p className="about-text">
            हमारा मंदिर श्रद्धा, भक्ति और आध्यात्मिक परंपराओं का
            एक पवित्र केंद्र है। यह मंदिर वर्षों से भक्तों की
            आस्था का प्रतीक रहा है और लाखों श्रद्धालुओं को
            आध्यात्मिक शांति एवं प्रेरणा प्रदान करता है।
          </p>

          <div className="feature-grid">

            <div className="feature-card">
              <div className="feature-icon">
                <Landmark size={40} />
              </div>

              <h3>मंदिर का इतिहास</h3>

              <p>
                यह मंदिर वर्षों पुराना है और
                श्रद्धा, विश्वास तथा भक्ति का
                एक महत्वपूर्ण प्रतीक माना जाता है।
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Flower2 size={40} />
              </div>

              <h3>मिशन एवं उद्देश्य</h3>

              <p>
                हमारा उद्देश्य आध्यात्मिकता,
                सेवा भावना और भारतीय संस्कृति
                की परंपराओं को बढ़ावा देना है।
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Orbit size={40} />
              </div>

              <h3>आध्यात्मिक महत्व</h3>

              <p>
                यह पवित्र स्थल भक्तों के जीवन में
                शांति, सुख, समृद्धि और सकारात्मक
                ऊर्जा का संचार करता है।
              </p>
            </div>

          </div>

          <button className="read-more-btn">
            और जानें
          </button>

        </div>

      </div>

    </section>
  );
}

export default AboutTemple;