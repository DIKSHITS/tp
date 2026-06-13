import React, { useState } from "react";
import "../styles/Footer.css";

import { Landmark } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import qrCode from "../assets/qr.jpg";

function Footer() {
  const [showQR, setShowQR] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          {/* Column 1 */}
          <div className="footer-col footer-main">
            <div className="footer-logo">
              <Landmark size={35} />
              <h2>श्री शनि महाराज मंदिर</h2>
            </div>

            <p className="footer-description">
              श्रद्धा, भक्ति एवं आध्यात्मिक जागरण का पवित्र स्थान।
              मंदिर में प्रतिदिन दर्शन, आरती एवं धार्मिक अनुष्ठान
              आयोजित किए जाते हैं।
            </p>

            <div className="social-icons">
              <button type="button">
                <FaFacebookF />
              </button>

              <button type="button">
                <FaInstagram />
              </button>

              <button type="button">
                <FaYoutube />
              </button>

              <button type="button">
                <FaWhatsapp />
              </button>
            </div>

            <button
              className="donate-btn"
              onClick={() => setShowQR(true)}
            >
              🙏 मंदिर ट्रस्ट हेतु दान करें
            </button>
          </div>

          {/* Column 2 */}
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

          {/* Column 3 */}
          <div className="footer-col">
            <h3>संपर्क करें</h3>

            <p>
              📍 श्री शनि महाराज मंदिर,
              पटना सिटी, बिहार
            </p>

            <p>
              📞 +91 7250011111
            </p>

            <p>
              ✉️ info@shanimandir.com
            </p>

            <p>
              प्रत्येक शनिवार एवं अमावस्या को
              विशेष पूजा, आरती एवं भंडारा
              आयोजित किया जाता है।
            </p>

            <p>
              🚩 जय श्री शनि देव महाराज 🚩
            </p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © 2025 श्री शनि महाराज मंदिर |
            सर्वाधिकार सुरक्षित
          </p>

          <span>॥ जय श्री शनि देव ॥</span>
        </div>
      </footer>

      {/* QR Modal */}
      {showQR && (
        <div
          className="qr-modal"
          onClick={() => setShowQR(false)}
        >
          <div
            className="qr-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setShowQR(false)}
            >
              ✕
            </button>

            <h3>🙏 मंदिर ट्रस्ट हेतु दान करें</h3>

            <img
              src={qrCode}
              alt="Temple Donation QR Code"
            />

            <p>
              QR Code Scan करके
              मंदिर ट्रस्ट को दान करें।
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;