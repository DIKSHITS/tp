
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "../styles/GalleryPage.css";

import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";
import gallery7 from "../assets/gallery7.jpg";
import gallery8 from "../assets/gallery8.jpg";
import gallery9 from "../assets/gallery9.jpg";
import gallery10 from "../assets/gallery10.jpg";
import gallery11 from "../assets/gallery11.jpg";
import gallery12 from "../assets/gallery12.jpg";
import gallery13 from "../assets/gallery13.jpg";
import gallery14 from "../assets/gallery14.jpg";

function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all");

  const images = [
    {
      image: gallery1,
      category: "temple",
      alt: "Shri Shani Maharaj Mandir Patna City Temple View",
    },
    {
      image: gallery2,
      category: "festival",
      alt: "Shani Maharaj Mandir Festival Celebration",
    },
    {
      image: gallery3,
      category: "aarti",
      alt: "Shani Dev Aarti at Shanichar Baba Mandir",
    },
    {
      image: gallery4,
      category: "temple",
      alt: "Temple Renovation View Patna City",
    },
    {
      image: gallery5,
      category: "event",
      alt: "Religious Event at Shri Shani Maharaj Mandir",
    },
    {
      image: gallery6,
      category: "festival",
      alt: "Festival Devotees at Shani Temple Bihar",
    },
    {
      image: gallery7,
      category: "temple",
      alt: "Shanichar Baba Mandir Main Temple",
    },
    {
      image: gallery8,
      category: "aarti",
      alt: "Evening Aarti at Shani Maharaj Mandir",
    },
    {
      image: gallery9,
      category: "event",
      alt: "Temple Religious Program Patna City",
    },
    {
      image: gallery10,
      category: "temple",
      alt: "Shani Temple Architecture Bihar",
    },
    {
      image: gallery11,
      category: "festival",
      alt: "Shani Dev Festival Celebration",
    },
    {
      image: gallery12,
      category: "aarti",
      alt: "Special Shani Aarti Ceremony",
    },
    {
      image: gallery13,
      category: "event",
      alt: "Community Event at Shanichar Baba Mandir",
    },
    {
      image: gallery14,
      category: "temple",
      alt: "Shri Shani Maharaj Mandir Patna City",
    },
  ];

  const filteredImages =
    activeTab === "all"
      ? images
      : images.filter((item) => item.category === activeTab);

  return (
    <>
      <Helmet>
        <title>
          Temple Gallery | Shri Shani Maharaj Mandir Patna City
        </title>

        <meta
          name="description"
          content="Explore the photo gallery of Shri Shani Maharaj Mandir (Shanichar Baba Mandir), Patna City Bihar. View temple images, darshan, festivals, aarti, religious programs and renovation work."
        />

        <meta
          name="keywords"
          content="Shani Mandir Gallery, Shri Shani Maharaj Mandir Photos, Shanichar Baba Mandir Images, Shani Temple Patna City, Temple Gallery Bihar, Shani Dev Temple Photos"
        />

        <link
          rel="canonical"
          href="https://shreeshanimaharaj.com/gallery"
        />

        <meta
          property="og:title"
          content="Temple Gallery | Shri Shani Maharaj Mandir"
        />

        <meta
          property="og:description"
          content="View temple photos, darshan images, festivals, aarti and spiritual events."
        />

        <meta
          property="og:url"
          content="https://shreeshanimaharaj.com/gallery"
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <div className="gallery-page">

        {/* Banner */}
        <section className="gallery-banner">
          <div className="gallery-banner-content">
            <h1>
              श्री शनि महाराज मंदिर गैलरी
            </h1>

            <p>
              होम &gt; गैलरी
            </p>
          </div>
        </section>

        {/* SEO Content */}
        <section className="gallery-intro">
          <p>
            श्री शनि महाराज मंदिर (शनिचर बाबा मंदिर), पटना सिटी की
            दिव्य झलकियाँ देखें। इस गैलरी में मंदिर दर्शन, आरती,
            धार्मिक कार्यक्रम, उत्सव, जीर्णोद्धार कार्य एवं भक्तों
            की सहभागिता से जुड़ी तस्वीरें उपलब्ध हैं।
          </p>
        </section>

        {/* Tabs */}
        <section className="gallery-section">

          <div className="gallery-tabs">

            <button
              className={activeTab === "all" ? "active" : ""}
              onClick={() => setActiveTab("all")}
            >
              सभी
            </button>

            <button
              className={activeTab === "temple" ? "active" : ""}
              onClick={() => setActiveTab("temple")}
            >
              मंदिर
            </button>

            <button
              className={activeTab === "festival" ? "active" : ""}
              onClick={() => setActiveTab("festival")}
            >
              उत्सव
            </button>

            <button
              className={activeTab === "aarti" ? "active" : ""}
              onClick={() => setActiveTab("aarti")}
            >
              आरती
            </button>

            <button
              className={activeTab === "event" ? "active" : ""}
              onClick={() => setActiveTab("event")}
            >
              कार्यक्रम
            </button>

          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">

            {filteredImages.map((item, index) => (
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

        </section>

      </div>
    </>
  );
}

export default GalleryPage;

