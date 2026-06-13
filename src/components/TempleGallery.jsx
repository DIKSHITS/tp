
import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/TempleGallery.css";

import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";

function TempleGallery() {
  const galleryImages = [
    {
      image: gallery1,
      alt: "Shri Shani Maharaj Mandir Patna City Temple View",
    },
    {
      image: gallery2,
      alt: "Shanichar Baba Mandir Darshan Patna City",
    },
    {
      image: gallery3,
      alt: "Shani Dev Temple Religious Event Patna Bihar",
    },
    {
      image: gallery4,
      alt: "Shri Shani Maharaj Mandir Renovation View",
    },
    {
      image: gallery5,
      alt: "Devotees at Shanichar Baba Mandir Patna City",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Temple Gallery | Shri Shani Maharaj Mandir Patna City
        </title>

        <meta
          name="description"
          content="Explore the photo gallery of Shri Shani Maharaj Mandir (Shanichar Baba Mandir), Patna City Bihar. View temple images, darshan photos, festivals and renovation work."
        />

        <meta
          name="keywords"
          content="Shani Mandir Gallery, Shri Shani Maharaj Mandir Photos, Shanichar Baba Mandir Images, Shani Temple Patna City, Temple Gallery Bihar"
        />

        <link
          rel="canonical"
          href="https://shreeshanimaharaj.com/gallery"
        />
      </Helmet>

      <section className="gallery-section">

        <div className="gallery-title">

          <span className="gallery-line"></span>

          <h2>
            श्री शनि महाराज मंदिर गैलरी
          </h2>

          <span className="gallery-line"></span>

        </div>

        <p className="gallery-description">
          श्री शनि महाराज मंदिर (शनिचर बाबा मंदिर), पटना सिटी की
          दिव्य झलकियाँ। यहाँ मंदिर के दर्शन, धार्मिक कार्यक्रम,
          जीर्णोद्धार कार्य एवं आध्यात्मिक आयोजनों की तस्वीरें
          देख सकते हैं।
        </p>

        <div className="gallery-grid">

          {galleryImages.map((item, index) => (
            <div
              className="gallery-card"
              key={index}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
              />
            </div>
          ))}

        </div>

        <div className="gallery-btn-wrapper">

          <button className="gallery-btn">
            पूरी गैलरी देखें
          </button>

        </div>

      </section>
    </>
  );
}

export default TempleGallery;

