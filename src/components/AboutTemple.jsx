
import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/AboutTemple.css";
import templeImg from "../assets/about.png";

import {
  Landmark,
  Flower2,
  Orbit,
} from "lucide-react";

function AboutTemple() {
  return (
    <>
      <Helmet>
        <title>
          Shri Shani Maharaj Mandir Patna City | Shanichar Baba Mandir
        </title>

        <meta
          name="description"
          content="Shri Shani Maharaj Mandir (Shanichar Baba Mandir) Patna City Bihar. Learn about temple history, renovation, Shani Dev worship, darshan and spiritual heritage."
        />

        <meta
          name="keywords"
          content="Shri Shani Maharaj Mandir, Shanichar Baba Mandir, Shani Mandir Patna City, Shani Temple Bihar, Shani Dev Temple Patna, शनिचर बाबा मंदिर, श्री शनि महाराज मंदिर"
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
          content="Official website of Shri Shani Maharaj Mandir, Patna City Bihar."
        />

        <meta
          property="og:image"
          content="https://shreeshanimaharaj.com/about.png"
        />

        <meta
          property="og:url"
          content="https://shreeshanimaharaj.com/"
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <section className="temple-about-section">
        <div className="temple-about-wrapper">

          {/* Left Image */}
          <div className="temple-about-image">
            <img
              src={templeImg}
              alt="Shri Shani Maharaj Mandir Patna City Bihar"
              loading="lazy"
            />
          </div>

          {/* Right Content */}
          <div className="temple-about-content">

            <span className="temple-subtitle">
              श्री शनि महाराज मंदिर, पटना सिटी
            </span>

            <h2>
              मंदिर का इतिहास, निर्माण एवं जीर्णोद्धार
            </h2>

            <div className="temple-divider">
              ✦ ✦ ✦
            </div>

            <p className="temple-about-text">
              श्री शनि महाराज मंदिर (शनिचर बाबा मंदिर) पटना सिटी के
              चैनपुरा क्षेत्र में स्थित एक प्राचीन एवं पवित्र धार्मिक
              स्थल है। यह मंदिर भगवान श्री शनि देव को समर्पित है और
              वर्षों से हजारों श्रद्धालुओं की आस्था एवं श्रद्धा का
              प्रमुख केंद्र रहा है।

              <br /><br />

              मंदिर में स्थापित प्राचीन शिला एवं उस पर निर्मित दिव्य
              प्रतिमा की नक्काशी अत्यंत प्राचीन मानी जाती है।
              उपलब्ध अभिलेखों के अनुसार इस मंदिर का निर्माण
              संवत 1876, मार्गशीर्ष शुक्ल पक्ष दशमी तिथि,
              26 नवम्बर 1819 (शुक्रवार) को कराया गया था।

              <br /><br />

              समय के साथ मंदिर जर्जर अवस्था में पहुँच गया था।
              चैनपुरा निवासी श्री विपुल कुमार ने अपने माता-पिता की
              पावन स्मृति में मंदिर के जीर्णोद्धार का संकल्प लिया।
              01 दिसंबर 2023 को पुनर्निर्माण एवं जीर्णोद्धार कार्य
              प्रारंभ किया गया तथा 27 मई 2025 को सफलतापूर्वक पूर्ण हुआ।

              <br /><br />

              वर्तमान में यह मंदिर पटना सिटी एवं आसपास के क्षेत्रों
              के श्रद्धालुओं के लिए पूजा, दर्शन, आरती, धार्मिक अनुष्ठान,
              शनि पूजा एवं आध्यात्मिक साधना का प्रमुख केंद्र है।
            </p>

            <div className="temple-feature-grid">

              <div className="temple-feature-card">
                <div className="temple-feature-icon">
                  <Landmark size={40} />
                </div>

                <h3>प्राचीन इतिहास</h3>

                <p>
                  मंदिर में स्थापित प्राचीन शिला एवं प्रतिमा की
                  नक्काशी सदियों पुरानी धार्मिक एवं सांस्कृतिक
                  विरासत का प्रतीक है।
                </p>
              </div>

              <div className="temple-feature-card">
                <div className="temple-feature-icon">
                  <Flower2 size={40} />
                </div>

                <h3>मंदिर निर्माण</h3>

                <p>
                  उपलब्ध अभिलेखों के अनुसार मंदिर का निर्माण
                  26 नवम्बर 1819 ईस्वी को कराया गया,
                  जो इसकी ऐतिहासिक महत्ता को दर्शाता है।
                </p>
              </div>

              <div className="temple-feature-card">
                <div className="temple-feature-icon">
                  <Orbit size={40} />
                </div>

                <h3>जीर्णोद्धार 2023 - 2025</h3>

                <p>
                  श्री विपुल कुमार द्वारा अपने माता-पिता की स्मृति में
                  01 दिसंबर 2023 को जीर्णोद्धार कार्य प्रारंभ किया गया
                  जो 27 मई 2025 को सफलतापूर्वक पूर्ण हुआ।
                </p>
              </div>

            </div>

            <button className="temple-readmore-btn">
              मंदिर दर्शन करें
            </button>

          </div>

        </div>
      </section>
    </>
  );
}

export default AboutTemple;
