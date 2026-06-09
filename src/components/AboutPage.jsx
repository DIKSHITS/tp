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
          <h1>सनिचर बाबा मंदिर </h1>

          <p>होम / हमारे मंदिर के बारे में</p>

          <p className="banner-desc">
            चैनपुरा निवासी श्री विपुल कुमार द्वारा अपने माता-पिता की
            पावन स्मृति में मंदिर के जीर्णोद्धार का संकल्प लिया गया।
            01 दिसंबर 2023 को कार्य प्रारंभ हुआ और 27 मई 2025 को
            सफलतापूर्वक पूर्ण हुआ। भविष्य में भी मंदिर के विकास एवं
            सेवा कार्य निरंतर जारी रहेंगे।
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-details">

        {/* Left Image */}
        <div className="about-image">
          <img src={templeImg} alt="श्री शनिचर बाबा मंदिर" />
        </div>

        {/* Right Content */}
        <div className="about-info">

          <span className="about-tag">
            ✨ आध्यात्मिक विरासत
          </span>

          <h2>सनिचर बाबा मंदिर </h2>

          <div className="gold-divider"></div>

          <p className="main-desc">
            श्री शनिचर बाबा मंदिर श्रद्धा, भक्ति एवं आध्यात्मिक ऊर्जा
            का पवित्र केंद्र है। यह मंदिर क्षेत्र के श्रद्धालुओं की
            आस्था का प्रमुख स्थान है। यहाँ प्रतिदिन भक्तगण दर्शन,
            पूजा-अर्चना एवं आरती में सम्मिलित होकर आध्यात्मिक शांति
            एवं सकारात्मक ऊर्जा प्राप्त करते हैं।
          </p>

          <p className="main-desc">
            चैनपुरा निवासी श्री विपुल कुमार ने अपने माता-पिता की स्मृति
            में इस प्राचीन मंदिर के जीर्णोद्धार का कार्य प्रारंभ किया।
            मंदिर की जर्जर स्थिति को देखते हुए 01/12/2023 को निर्माण
            कार्य शुरू किया गया और 27/05/2025 को पूर्ण किया गया।
          </p>

          {/* Stats */}

          <div className="stats-grid">

            <div className="stat-card">
              <h3>2023</h3>
              <span>जीर्णोद्धार प्रारंभ</span>
            </div>

            <div className="stat-card">
              <h3>2025</h3>
              <span>निर्माण पूर्ण</span>
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
                <h3>जीर्णोद्धार का इतिहास</h3>

                <p>
                  मंदिर की जर्जर स्थिति को देखते हुए पुनर्निर्माण कार्य
                  01 दिसंबर 2023 को प्रारंभ किया गया और 27 मई 2025 को
                  पूर्ण हुआ।
                </p>
              </div>
            </div>

            <div className="feature-item">
              <HeartHandshake size={35} />

              <div>
                <h3>सेवा एवं उद्देश्य</h3>

                <p>
                  धार्मिक, सामाजिक एवं आध्यात्मिक गतिविधियों के माध्यम
                  से समाज की सेवा करना तथा मंदिर के विकास को आगे बढ़ाना।
                </p>
              </div>
            </div>

            <div className="feature-item">
              <Eye size={35} />

              <div>
                <h3>आध्यात्मिक दृष्टिकोण</h3>

                <p>
                  सनातन संस्कृति, धार्मिक मूल्यों एवं आध्यात्मिक
                  परंपराओं को आने वाली पीढ़ियों तक पहुँचाना।
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default AboutPage;