
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
          content="Official website of Shri Shani Maharaj Mandir (Shanichar Baba Mandir), Patna City, Bihar. Temple history, darshan, aarti timings, festivals, renovation details and spiritual heritage."
        />

        <meta
          name="keywords"
          content="Shri Shani Maharaj Mandir, Shanichar Baba Mandir, Shani Mandir Patna City, Shani Temple Bihar, Shani Dev Temple Patna, Shanidev Mandir, Patna City Temple, शनिचर बाबा मंदिर, श्री शनि महाराज मंदिर"
        />

        <link
          rel="canonical"
          href="https://shreeshanimaharaj.com/"
        />

        <meta
          property="og:title"
          content="Shri Shani Maharaj Mandir Patna City"
        />

        <meta
          property="og:description"
          content="Official website of Shri Shani Maharaj Mandir. Temple history, darshan, festivals, renovation and spiritual heritage."
        />

        <meta
          property="og:image"
          content="https://shreeshanimaharaj.com/hero.png"
        />

        <meta
          property="og:url"
          content="https://shreeshanimaharaj.com/"
        />

        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroImages[currentImage]})`,
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>
            श्री शनि महाराज मंदिर, पटना सिटी
          </h1>

          <p>
            श्रद्धा, भक्ति एवं आध्यात्मिक ऊर्जा का पवित्र केंद्र
          </p>
        </div>

        <div className="curve-divider"></div>
      </section>

      {/* Renovation Section */}
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
            प्रमुख धार्मिक स्थलों में से एक है। यह मंदिर वर्षों से
            श्रद्धालुओं की आस्था का केंद्र रहा है तथा भगवान शनि देव
            की आराधना का पवित्र स्थान माना जाता है।
          </p>

          <br />

          <p>
            चैनपुरा निवासी श्री विपुल कुमार ने अपने माता-पिता की
            पावन स्मृति में मंदिर के जीर्णोद्धार का संकल्प लिया।
            01 दिसंबर 2023 को पुनर्निर्माण एवं जीर्णोद्धार कार्य
            प्रारंभ किया गया और 27 मई 2025 को सफलतापूर्वक पूर्ण हुआ।
            वर्तमान में मंदिर के विकास, संरक्षण एवं भक्तों की
            सुविधाओं के लिए निरंतर कार्य किए जा रहे हैं।
          </p>

          <br />

          <p>
            मंदिर का इतिहास अत्यंत प्राचीन माना जाता है। मंदिर में
            स्थित शिला पर निर्मित दिव्य प्रतिमा की नक्काशी हजारों
            वर्ष पुरानी धार्मिक परंपराओं एवं सांस्कृतिक विरासत का
            प्रतीक मानी जाती है।
          </p>

          <br />

          <p>
            प्रत्येक शनिवार को बड़ी संख्या में श्रद्धालु यहाँ
            भगवान शनि देव के दर्शन, पूजा-अर्चना एवं आशीर्वाद प्राप्त
            करने के लिए आते हैं। यह मंदिर पटना सिटी एवं बिहार के
            प्रमुख शनि मंदिरों में अपना विशेष स्थान रखता है।
          </p>

        </div>
      </section>
    </>
  );
}

export default Hero;

