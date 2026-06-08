import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutTemple from "./components/AboutTemple";
import DarshanAarti from "./components/DarshanAarti";
import TempleGallery from "./components/TempleGallery";
import DonationSection from "./components/DonationSection";
import Footer from "./components/Footer";

import AboutPage from "./components/AboutPage";
import GalleryPage from "./components/GalleryPage"; // Fixed spelling
import ContactPage from "./components/ContactPage"; // Added import

/* Home Page */
function Home() {
  return (
    <>
      <Hero />
      <AboutTemple />
      <DarshanAarti />
      <TempleGallery />
      <DonationSection />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery-page" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;