import React from "react";
import "../styles/ContactPage.css";

const ContactPage = () => {
  return (
    <section className="contact-page">
      {/* Header */}
      <div className="contact-banner">
        <h1>CONTACT US</h1>
        <p>Home &gt; Contact</p>
      </div>

      {/* Contact Section */}
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <div className="info-item">
            <div className="icon">📍</div>
            <div>
              <h4>ADDRESS</h4>
              <p>
                123, Temple Road,
                <br />
                Your City, State - 000001
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon">📞</div>
            <div>
              <h4>PHONE</h4>
              <p>+91 12345 67890</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon">✉️</div>
            <div>
              <h4>EMAIL</h4>
              <p>info@shrirammandir.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon">🕒</div>
            <div>
              <h4>TIMINGS</h4>
              <p>
                4:00 AM – 1:00 PM
                <br />
                4:00 PM – 9:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="map-section">
          <iframe
            title="Temple Location"
            src="https://maps.google.com/maps?q=Ayodhya&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Contact Form */}
      <div className="message-section">
        <h3>SEND US A MESSAGE</h3>

        <div className="form-row">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number" />
        </div>

        <textarea rows="6" placeholder="Your Message"></textarea>

        <button>SEND MESSAGE</button>
      </div>
    </section>
  );
};

export default ContactPage;