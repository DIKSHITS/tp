import React from "react";
import "../styles/TempleGallery.css";

import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";

function TempleGallery() {
  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
  ];

  return (
    <section className="gallery-section">
      <div className="gallery-title">
        <span className="gallery-line"></span>

        <h2>मंदिर गैलरी</h2>

        <span className="gallery-line"></span>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div className="gallery-card" key={index}>
            <img src={image} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>

      <div className="gallery-btn-wrapper">
        <button className="gallery-btn">
          पूरी गैलरी देखें
        </button>
      </div>
    </section>
  );
}

export default TempleGallery;