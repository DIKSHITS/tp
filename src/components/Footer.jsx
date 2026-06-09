import React from "react";
import "../styles/Footer.css";

import { Landmark } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Temple Info */}
        <div className="footer-col">
          <div className="footer-logo">
            <Landmark size={35} />
            <h2>श्री शनि महाराज मंदिर</h2>
          </div>

          <p className="footer-description">
            श्रद्धा, भक्ति एवं आध्यात्मिक जागरण का
            पवित्र स्थान। मंदिर में प्रतिदिन दर्शन,
            आरती एवं धार्मिक अनुष्ठान आयोजित किए जाते हैं।
          </p>

          <div className="social-icons">
            <a href="/" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="/" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="/" aria-label="YouTube">
              <FaYoutube />
            </a>

            <a href="/" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Temple Timing */}
        <div className="footer-col">
          <h3>मंदिर समय</h3>

          <p>
            <strong>प्रातः:</strong> 4:30 बजे - दोपहर 1:00 बजे
          </p>

          <p>
            <strong>सायं:</strong> 4:00 बजे - रात्रि 9:00 बजे
          </p>

          <h4>आरती समय</h4>

          <p>
            <strong>मंगल आरती:</strong> प्रातः 4:30 बजे
          </p>

          <p>
            <strong>संध्या आरती:</strong> सायं 7:00 बजे
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2025 श्री शनि महाराज मंदिर | सर्वाधिकार सुरक्षित
        </p>

        <span>
          ॥ जय श्री शनि देव ॥
        </span>
      </div>
    </footer>
  );
}

export default Footer;