import React, { useState } from "react";
import "../styles/DonationSection.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import {
  HandCoins,
  UtensilsCrossed,
  Landmark,
} from "lucide-react";

function DonationSection() {
  const [date, setDate] = useState(new Date());

  return (
    <section className="donation-section">
      <div className="donation-container">

        <h2>मंदिर सेवा में योगदान करें</h2>

        <p>
          आपका छोटा सा सहयोग मंदिर सेवा, धार्मिक कार्यों एवं
          समाज सेवा में महत्वपूर्ण योगदान दे सकता है।
        </p>

        <div className="donation-cards">

          <div className="donation-card">
            <HandCoins size={40} />
            <h3>ऑनलाइन दान</h3>
            <span>सुरक्षित एवं सरल दान प्रक्रिया</span>
          </div>

          <div className="donation-card">
            <UtensilsCrossed size={40} />
            <h3>अन्नदान</h3>
            <span>जरूरतमंदों को भोजन सेवा</span>
          </div>

          <div className="donation-card">
            <Landmark size={40} />
            <h3>मंदिर विकास</h3>
            <span>निर्माण एवं रखरखाव में सहयोग</span>
          </div>

        </div>

        {/* Calendar Section */}

        <div className="calendar-section">

          <h3>मंदिर कार्यक्रम कैलेंडर</h3>

          <p>
            पूजा, आरती एवं विशेष धार्मिक कार्यक्रमों की
            तिथि देखें।
          </p>

          <div className="calendar-wrapper">
            <Calendar
              onChange={setDate}
              value={date}
            />
          </div>

          <div className="selected-date">
            चयनित तिथि :
            <strong>
              {" "}
              {date.toLocaleDateString("hi-IN")}
            </strong>
          </div>

        </div>

      </div>
    </section>
  );
}

export default DonationSection;