import React from 'react';
import ImageCarousel from './carousel';

const HeroSection = () => {
  return (
    <div id="home" className="flex flex-col md:flex-row items-center px-6 pt-20 pb-10 bg-white gap-10 md:gap-0">
      {/* Text Container */}
      <div className="w-full md:w-1/2 text-left">
        <h1 className="text-4xl md:text-6xl font-semibold leading-snug">
          Empowering <span className="text-[#8d54fc] font-bold">Growth</span>,<br />
          Fostering <span className="text-[#8d54fc] font-bold">Independence</span>,<br />
          Promoting <span className="text-[#8d54fc] font-bold">Inclusion</span>.
        </h1>
        <button className="mt-8 px-6 py-3 bg-[#8d54fc] text-white font-medium rounded-md hover:bg-purple-600 transition">
          Learn More
        </button>
      </div>

      {/* Carousel replacing logo */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="w-full max-w-xl rounded-lg shadow-none"> {/* Seamless look */}
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
