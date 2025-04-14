import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BottomCards from './components/bottomCards';
import AboutUs from './components/aboutUs'

function App() {
  return (
    <>
      <Navbar />
      <AboutUs/>
      <BottomCards />
      <Footer />
    </>
  );
}

export default App;