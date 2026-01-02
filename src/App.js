import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BottomCards from "./components/bottomCards";
import TillyTherapy from "./components/TillyTherapy";
import Services from "./components/servicesSection";
import AboutUs from "./components/aboutUs";
import Main from "./components/heroSections";
import Providers from "./components/providers";

function App() {
  // quick proof the frontend bundle is updated
  console.warn("🔥 App.js loaded");

  return (
    <>
      <Navbar />
      <Main />
      <Services />
      <AboutUs />
      <Providers />
      <BottomCards />
      <TillyTherapy />
      <Footer />
    </>
  );
}

export default App;