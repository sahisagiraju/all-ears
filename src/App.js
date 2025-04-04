import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BottomCards from './components/bottomCards';

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
      <BottomCards />
      <Footer />
    </>
  );
}

export default App;