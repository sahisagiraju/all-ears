import React from 'react';
import Logo from '../assets/all-ears-logo.js';

const HeroSection = () => {
  return (
    <div id="home" className="flex items-center px-6 pt-20 pb-10 bg-white">
      {/* Text Container */}
      <div className="w-auto text-left">
        <h1 className="text-4xl md:text-6xl font-semibold leading-snug">
          Empowering <span className="text-[#8d54fc] font-bold">Growth</span>,<br />
          Fostering <span className="text-[#8d54fc] font-bold">Independence</span>,<br />
          Promoting <span className="text-[#8d54fc] font-bold">Inclusion</span>.
        </h1>
        <button className="mt-8 px-6 py-3 bg-[#8d54fc] text-white font-medium rounded-md hover:bg-purple-600 transition">
          Learn More
        </button>
      </div>

      {/* Logo - take remaining width on md+ */}
      <div className="hidden lg:flex md:flex-1 justify-end">
        <Logo className="w-full h-auto max-w-xl" />
      </div>
    </div>
  );
};

export default HeroSection;
