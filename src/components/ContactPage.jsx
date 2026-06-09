import React from "react";
import "../styles/ContactPage.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function ContactPage() {
  return (
    <div className="contact-page">

      {/* Banner */}
      <section className="contact-banner">
        <h1>Contact Us</h1>
        <p>Shanichar Baba Mandir - Get in Touch With Us</p>
      </section>

      {/* Contact Info + Map */}
      <div className="contact-container">

        <div className="contact-info">

          <div className="info-item">
            <div className="icon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4>Temple Address</h4>
              <p>
               Dhaulpura, Begampur, Patna, Bihar 800009
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon">
              <FaPhoneAlt />
            </div>
            <div>
              <h4>Phone Number</h4>
              <p>+91 7250011111</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon">
              <FaEnvelope />
            </div>
            <div>
              <h4>Email Address</h4>
              <p>info@shanicharbabamandir.com</p>
            </div>
          </div>

        </div>

        {/* Google Map */}
        <div className="map-section">
          <iframe
            title="Temple Location"
            src="https://maps.google.com/maps?q=Chainpura,Bihar&t=&z=15&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

      </div>

      {/* Contact Form */}
      <section className="message-section">
        <h3>Send Message</h3>

        <form>
          <div className="form-row">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Subject" />
          </div>

          <textarea
            rows="8"
            placeholder="Write Your Message..."
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </section>

    </div>
  );
}

export default ContactPage;