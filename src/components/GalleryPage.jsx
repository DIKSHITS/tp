import React, { useState } from "react";
import "../styles/GalleryPage.css";

import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";

function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all");

  const images = [
    { image: gallery1, category: "temple" },
    { image: gallery2, category: "festival" },
    { image: gallery3, category: "aarti" },
    { image: gallery4, category: "temple" },
    { image: gallery5, category: "event" },
    
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
              <img src={item.image} alt="Temple Gallery" />
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default GalleryPage;