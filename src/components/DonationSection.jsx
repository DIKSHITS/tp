import React from "react";
import "../styles/DonationSection.css";

import {
  HandCoins,
  UtensilsCrossed,
  Landmark,
} from "lucide-react";

function DonationSection() {
  return (
    <section className="donation-section">
      <div className="donation-container">

        <h2>मंदिर सेवा में योगदान करें</h2>

        <p>
          आपका छोटा सा सहयोग मंदिर सेवा और धार्मिक कार्यों में
          महत्वपूर्ण योगदान दे सकता है।
        </p>

        <div className="donation-cards">

          <div className="donation-card">
            <HandCoins size={40} />
            <h3>ऑनलाइन दान</h3>
            <span>सुरक्षित एवं सरल</span>
          </div>

          <div className="donation-card">
            <UtensilsCrossed size={40} />
            <h3>अन्नदान</h3>
            <span>जरूरतमंदों को भोजन</span>
          </div>

          <div className="donation-card">
            <Landmark size={40} />
            <h3>मंदिर विकास</h3>
            <span>निर्माण एवं रखरखाव</span>
          </div>

        </div>

        

      </div>
    </section>
  );
}

export default DonationSection;