import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BottomCards from './components/bottomCards';
import TillyTherapy from './components/TillyTherapy';
import Services from './components/Services';
import AboutUs from './components/aboutUs'

function App() {
  return (
    <>
      <Navbar />
      <TillyTherapy />
      <Services />
      <AboutUs/>
      <BottomCards />
      <Footer />
    </>
  );
}

export default App;