import React, { useState } from "react";
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
    { image: gallery1, category: "temple" },
    { image: gallery2, category: "festival" },
    { image: gallery3, category: "aarti" },
    { image: gallery4, category: "temple" },
    { image: gallery5, category: "event" },
    { image: gallery6, category: "festival" },
    { image: gallery7, category: "temple" },
    { image: gallery8, category: "aarti" },
    { image: gallery9, category: "event" },
    { image: gallery10, category: "temple" },
    { image: gallery11, category: "festival" },
    { image: gallery12, category: "aarti" },
    { image: gallery13, category: "event" },
    { image: gallery14, category: "temple" },
  ];

  const filteredImages =
    activeTab === "all"
      ? images
      : images.filter((item) => item.category === activeTab);

  return (
    <div className="gallery-page">

      {/* Banner */}
      <section className="gallery-banner">
        <div className="gallery-banner-content">
          <h1>गैलरी</h1>
          <p>होम &gt; गैलरी</p>
        </div>
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
            <div className="gallery-card" key={index}>
              <img src={item.image} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}

export default GalleryPage;