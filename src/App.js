import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BottomCards from './components/bottomCards';
import TillyTherapy from './components/TillyTherapy';
import Services from './components/Services';

function App() {
  return (
    <>
      <Navbar />
      <TillyTherapy />
      <Services />
      <BottomCards />
      <Footer />
    </>
  );
}

export default App;