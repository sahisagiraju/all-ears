// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-semibold leading-snug">
        Empowering <span className="text-purple-500 font-bold">Growth</span>,<br />
        Fostering <span className="text-purple-500 font-bold">Independence</span>,<br />
        Promoting <span className="text-purple-500 font-bold">Inclusion</span>.
      </h1>
      <button className="mt-8 px-6 py-3 bg-purple-500 text-white font-medium rounded-md hover:bg-purple-600 transition">
        Learn More
      </button>
    </section>
  );
};

export default HeroSection;
