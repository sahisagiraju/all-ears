import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BottomCards from './components/bottomCards';
import TillyTherapy from './components/TillyTherapy';
import Services from './components/Services';
import AboutUs from './components/aboutUs'
import Main from "./components/heroSections"

function App() {
  return (
    <>
      <Navbar />
      <Main/>
      <Services />
      <AboutUs/>
      <BottomCards />
      <TillyTherapy />
      <Footer />
    </>
  );
}

export default App;