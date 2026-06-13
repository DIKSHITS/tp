import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/AboutPage.css";

import templeImg from "../assets/hero.png";

import {
  Landmark,
  HeartHandshake,
  Eye,
} from "lucide-react";

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>
          Shri Shani Maharaj Mandir Patna City | About Shanichar Baba Mandir
        </title>

        <meta
          name="description"
          content="Official About Page of Shri Shani Maharaj Mandir (Shanichar Baba Mandir), Patna City, Bihar. Learn about temple history, renovation, spiritual heritage, Shani Dev worship and temple development."
        />

        <meta
          name="keywords"
          content="Shri Shani Maharaj Mandir, Shanichar Baba Mandir, Shani Mandir Patna City, Shani Temple Bihar, Shani Dev Temple Patna, Shanidev Mandir, Patna City Temple, Shri Shani Maharaj Temple"
        />

        <link
          rel="canonical"
          href="https://shreeshanimaharaj.com/about"
        />

        <meta
          property="og:title"
          content="Shri Shani Maharaj Mandir Patna City"
        />

        <meta
          property="og:description"
          content="Discover the history and spiritual heritage of Shri Shani Maharaj Mandir, Patna City."
        />

        <meta
          property="og:image"
          content="https://shreeshanimaharaj.com/temple.jpg"
        />

        <meta
          property="og:url"
          content="https://shreeshanimaharaj.com/about"
        />

        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {`
          {
            "@context":"https://schema.org",
            "@type":"PlaceOfWorship",
            "name":"Shri Shani Maharaj Mandir",
            "alternateName":"Shanichar Baba Mandir",
            "url":"https://shreeshanimaharaj.com/about",
            "description":"Famous Shani Dev Temple located in Patna City, Bihar.",
            "address":{
              "@type":"PostalAddress",
              "addressLocality":"Patna City",
              "addressRegion":"Bihar",
              "addressCountry":"India"
            }
          }
          `}
        </script>
      </Helmet>

      <div className="about-page">

        {/* Banner */}
        <section className="page-banner">
          <div className="banner-overlay"></div>

          <div className="banner-content">

            <h1>
              श्री शनिचर बाबा मंदिर, पटना सिटी
            </h1>

            <p>
              होम / हमारे मंदिर के बारे में
            </p>

            <p className="banner-desc">
              चैनपुरा निवासी श्री विपुल कुमार द्वारा अपने माता-पिता
              की पावन स्मृति में मंदिर के जीर्णोद्धार का संकल्प लिया गया।
              01 दिसंबर 2023 को निर्माण कार्य प्रारंभ हुआ और
              27 मई 2025 को सफलतापूर्वक पूर्ण हुआ।
              भविष्य में भी मंदिर के विकास, संरक्षण एवं सेवा कार्य
              निरंतर जारी रहेंगे।
            </p>

          </div>
        </section>

        {/* About Section */}
        <section className="about-details">

          {/* Image */}
          <div className="about-image">

            <img
              src={templeImg}
              alt="Shri Shanichar Baba Mandir Patna City Bihar"
              loading="lazy"
            />

          </div>

          {/* Content */}
          <div className="about-info">

            <span className="about-tag">
              ✨ आध्यात्मिक विरासत
            </span>

            <h2>
              श्री शनि महाराज मंदिर
            </h2>

            <div className="gold-divider"></div>

            <p className="main-desc">
              श्री शनिचर बाबा मंदिर (श्री शनि महाराज मंदिर),
              पटना सिटी, बिहार का एक प्रमुख धार्मिक एवं आध्यात्मिक
              केंद्र है। यह मंदिर भगवान शनि देव को समर्पित है और
              हजारों श्रद्धालुओं की आस्था का केंद्र माना जाता है।
              यहाँ प्रतिदिन दर्शन, पूजा-अर्चना एवं आरती का आयोजन
              किया जाता है।
            </p>

            <p className="main-desc">
              चैनपुरा निवासी श्री विपुल कुमार द्वारा अपने माता-पिता
              की स्मृति में मंदिर के जीर्णोद्धार का कार्य प्रारंभ किया गया।
              मंदिर की जर्जर स्थिति को देखते हुए 01 दिसंबर 2023 को
              पुनर्निर्माण कार्य शुरू किया गया और 27 मई 2025 को
              सफलतापूर्वक पूर्ण हुआ।
            </p>

            <p className="main-desc">
              आज यह मंदिर पटना सिटी, बिहार तथा आसपास के क्षेत्रों के
              श्रद्धालुओं के लिए एक महत्वपूर्ण धार्मिक स्थल बन चुका है।
              प्रत्येक शनिवार को विशेष पूजा, आरती एवं धार्मिक कार्यक्रम
              आयोजित किए जाते हैं।
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
                    01 दिसंबर 2023 को प्रारंभ किया गया और
                    27 मई 2025 को पूर्ण हुआ।
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <HeartHandshake size={35} />

                <div>
                  <h3>सेवा एवं उद्देश्य</h3>

                  <p>
                    धार्मिक, सामाजिक एवं आध्यात्मिक गतिविधियों के माध्यम
                    से समाज की सेवा करना तथा मंदिर के विकास को आगे
                    बढ़ाना हमारा मुख्य उद्देश्य है।
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <Eye size={35} />

                <div>
                  <h3>आध्यात्मिक दृष्टिकोण</h3>

                  <p>
                    सनातन संस्कृति, धार्मिक मूल्यों एवं आध्यात्मिक
                    परंपराओं को आने वाली पीढ़ियों तक पहुँचाना तथा
                    समाज में सकारात्मक ऊर्जा का प्रसार करना।
                  </p>
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* SEO Section */}
        <section className="seo-content">

          <h2>
            श्री शनि महाराज मंदिर के बारे में
          </h2>

          <p>
            श्री शनिचर बाबा मंदिर पटना सिटी का एक प्रसिद्ध शनि देव मंदिर है।
            यह मंदिर श्रद्धा, भक्ति और आध्यात्मिक ऊर्जा का केंद्र है।
            यहाँ प्रतिदिन पूजा-अर्चना एवं विशेष धार्मिक कार्यक्रम आयोजित
            किए जाते हैं।
          </p>

          <p>
            यदि आप Shani Mandir Patna City, Shanichar Baba Mandir Patna,
            Shree Shani Maharaj Mandir Bihar, Shani Dev Temple Patna
            या Shani Temple Bihar खोज रहे हैं, तो यह मंदिर एक प्रमुख
            धार्मिक एवं आध्यात्मिक केंद्र है।
          </p>

        </section>

      </div>
    </>
  );
}

export default AboutPage;