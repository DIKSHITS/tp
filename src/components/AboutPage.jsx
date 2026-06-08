import React from "react";
import "../styles/AboutPage.css";

import templeImg from "../assets/hero.png";

import {
  Landmark,
  HeartHandshake,
  Eye,
} from "lucide-react";

function AboutPage() {
  return (
    <div className="about-page">

      {/* Banner */}
      <section className="page-banner">
        <div className="banner-overlay"></div>

        <div className="banner-content">
          <h1>हमारे मंदिर के बारे में</h1>
          <p>होम / हमारे मंदिर के बारे में</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-details">

        {/* Left Image */}
        <div className="about-image">
          <img src={templeImg} alt="Temple" />
        </div>

        {/* Right Content */}
        <div className="about-info">

          <span className="about-tag">
            ✨ आध्यात्मिक विरासत
          </span>

          <h2>श्री साँवर बाबा मंदिर</h2>

          <div className="gold-divider"></div>

          <p className="main-desc">
            श्री साँवर बाबा मंदिर श्रद्धा, भक्ति एवं आध्यात्मिक
            ऊर्जा का पवित्र केंद्र है। यह मंदिर वर्षों से भक्तों
            की आस्था का प्रतीक रहा है। प्रतिदिन हजारों श्रद्धालु
            यहाँ दर्शन, पूजा-अर्चना एवं आरती में सम्मिलित होकर
            आध्यात्मिक शांति एवं सकारात्मक ऊर्जा प्राप्त करते हैं।
          </p>

          {/* Stats */}
          <div className="stats-grid">

            <div className="stat-card">
              <h3>50+</h3>
              <span>वर्षों का इतिहास</span>
            </div>

            <div className="stat-card">
              <h3>5000+</h3>
              <span>दैनिक श्रद्धालु</span>
            </div>

            <div className="stat-card">
              <h3>365</h3>
              <span>दिन सेवा</span>
            </div>

          </div>

          {/* Features */}

          <div className="about-feature">

            <div className="feature-item">
              <Landmark size={35} />

              <div>
                <h3>मंदिर का इतिहास</h3>

                <p>
                  मंदिर की स्थापना श्रद्धा एवं सेवा की भावना
                  से की गई थी। आज यह लाखों भक्तों की आस्था
                  का प्रमुख केंद्र है।
                </p>
              </div>
            </div>

            <div className="feature-item">
              <HeartHandshake size={35} />

              <div>
                <h3>सेवा एवं उद्देश्य</h3>

                <p>
                  धार्मिक, सामाजिक एवं आध्यात्मिक गतिविधियों
                  के माध्यम से समाज की सेवा करना हमारा उद्देश्य है।
                </p>
              </div>
            </div>

            <div className="feature-item">
              <Eye size={35} />

              <div>
                <h3>आध्यात्मिक दृष्टिकोण</h3>

                <p>
                  सनातन संस्कृति एवं धार्मिक मूल्यों को नई
                  पीढ़ी तक पहुँचाना एवं उनका संरक्षण करना।
                </p>
              </div>
            </div>

          </div>

          <button className="about-btn">
            और जानें
          </button>

        </div>

      </section>

    </div>
  );
}

export default AboutPage;