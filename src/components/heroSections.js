import React from 'react';
import Logo from '../assets/all-ears-logo.js';

const HeroSection = () => {
  return (
    <div id="home" className="flex items-center md:justify-between px-6 pt-20 bg-white">
      {/* Text Container */}
      <div className="w-auto text-left">
      <h1 className="text-4xl md:text-6xl font-semibold leading-snug ">
          Empowering <span className="text-[#8d54fc] font-bold">Growth</span>,<br />
          Fostering <span className="text-[#8d54fc] font-bold">Independence</span>,<br />
          Promoting <span className="text-[#8d54fc] font-bold">Inclusion</span>.
        </h1>
        <button className="mt-8 px-6 py-3 bg-[#8d54fc] text-white font-medium rounded-md hover:bg-purple-600 transition">
          Learn More
        </button>
      </div>

      {/* Logo - match text block height */}
      <div className="hidden md:flex md:w-auto justify-end my-8 md:my-0">
        <Logo className="h-[148px] md:h-[full] md:w-auto" />
      </div>
    </div>
  );
};

export default HeroSection;
