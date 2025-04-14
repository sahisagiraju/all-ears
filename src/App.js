import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BottomCards from './components/bottomCards';
import HeroSection from './components/heroSections';
import ServicesSection from './components/servicesSection';


function App() {
  return (
    <>
      <Navbar />
      {/* */}
      <div style={{ padding: '2rem' }}>
        {[...Array(100)].map((_, i) => (
          <p key={i}>Test </p>
        ))}
      </div>
      <HeroSection />
      <ServicesSection />
      <BottomCards />
      <Footer />
      
    </>
  );
}

export default App;