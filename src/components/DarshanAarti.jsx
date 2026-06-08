import React from "react";
import "../styles/DarshanAarti.css";
import { Lamp } from "lucide-react";

import aarti1 from "../assets/aarti1.jpg";
import darshan from "../assets/darshan.jpg";
import bhog from "../assets/bhog.jpg";
import aarti2 from "../assets/aarti2.jpg";

function DarshanAarti() {
  const darshanData = [
    {
      image: aarti1,
      title: "आरती",
      time: "प्रातः 4:30 बजे",
    },
    {
      image: darshan,
      title: "श्री शनि महाराज दर्शन",
      time: "प्रातः 7:00 बजे से 11:00 बजे तक",
    },
    {
      image: bhog,
      title: "भोग प्रसाद",
      time: "दोपहर 12:00 बजे",
    },
    {
      image: aarti2,
      title: "संध्या आरती",
      time: "सायं 7:00 बजे",
    },
  ];

  return (
    <section className="darshan-section">
      <div className="section-title">
        <span className="line"></span>

        <h2>दैनिक दर्शन एवं आरती</h2>

        <span className="line"></span>
      </div>

      <div className="darshan-grid">
        {darshanData.map((item, index) => (
          <div className="darshan-card" key={index}>
            <div className="card-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="card-content">
              <div className="icon-circle">
                <Lamp size={20} />
              </div>

              <h3>{item.title}</h3>

              <p>{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DarshanAarti;