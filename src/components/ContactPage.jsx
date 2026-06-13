
import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/ContactPage.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>
          Contact Shri Shani Maharaj Mandir Patna City | Shanichar Baba Mandir
        </title>

        <meta
          name="description"
          content="Contact Shri Shani Maharaj Mandir (Shanichar Baba Mandir) Patna City Bihar. Get temple address, phone number, email, darshan information and location details."
        />

        <meta
          name="keywords"
          content="Contact Shani Mandir Patna City, Shanichar Baba Mandir Contact, Shri Shani Maharaj Mandir Address, Shani Temple Bihar, Shani Dev Temple Patna, Temple Contact Number"
        />

        <link
          rel="canonical"
          href="https://shreeshanimaharaj.com/contact"
        />

        <meta
          property="og:title"
          content="Contact Shri Shani Maharaj Mandir Patna City"
        />

        <meta
          property="og:description"
          content="Get address, phone number, email and location details of Shri Shani Maharaj Mandir."
        />

        <meta
          property="og:url"
          content="https://shreeshanimaharaj.com/contact"
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <div className="contact-page">

        {/* Banner */}
        <section className="contact-banner">
          <h1>संपर्क करें</h1>

          <p>
            श्री शनि महाराज मंदिर (शनिचर बाबा मंदिर), पटना सिटी
          </p>
        </section>

        {/* Contact Info + Map */}
        <div className="contact-container">

          <div className="contact-info">

            <div className="info-item">
              <div className="icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h4>मंदिर का पता</h4>

                <p>
                  Dhaulpura, Begampur,
                  Patna, Bihar - 800009
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">
                <FaPhoneAlt />
              </div>

              <div>
                <h4>संपर्क नंबर</h4>

                <p>+91 7250011111</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">
                <FaEnvelope />
              </div>

              <div>
                <h4>ईमेल</h4>

                <p>info@shanicharbabamandir.com</p>
              </div>
            </div>

          </div>

          {/* Google Map */}
          <div className="map-section">
            <iframe
              title="Shri Shani Maharaj Mandir Location"
              src="https://maps.google.com/maps?q=Dhaulpura,Begampur,Patna,Bihar&t=&z=15&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

        </div>

        {/* Contact Form */}
        <section className="message-section">

          <h2>संदेश भेजें</h2>

          <p>
            मंदिर से संबंधित किसी भी जानकारी, पूजा, दर्शन,
            धार्मिक कार्यक्रम अथवा सुझाव के लिए हमसे संपर्क करें।
          </p>

          <form>

            <div className="form-row">
              <input
                type="text"
                placeholder="आपका नाम"
              />

              <input
                type="email"
                placeholder="ईमेल पता"
              />

              <input
                type="text"
                placeholder="विषय"
              />
            </div>

            <textarea
              rows="8"
              placeholder="अपना संदेश लिखें..."
            ></textarea>

            <button type="submit">
              संदेश भेजें
            </button>

          </form>

        </section>

      </div>
    </>
  );
}

export default ContactPage;

