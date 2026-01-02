import React, { useEffect, useState } from 'react';
import { PortableText } from '@portabletext/react';
import { client } from '../sanityClient';
import ImageCarousel from './carousel';

export default function HeroSection() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    console.log("✅ HeroSections mounted");
  
    client
      .fetch(`*[_type == "heroSection"][0]`)
      .then((data) => {
        console.log("✅ HeroSections data:", data);
        setData(data);
      })
      .catch((err) => {
        console.error("❌ HeroSections fetch error:", err);
      });
  }, []);
  

  // 2. Define custom styles for the text
  // This tells React: "If the text is BOLD, make it Purple and Bold"
  const ptComponents = {
    marks: {
      strong: ({ children }) => (
        <span className="text-[#8d54fc] font-bold">{children}</span>
      ),
    },
    block: {
      normal: ({ children }) => (
        <h1 className="text-4xl md:text-6xl font-semibold leading-snug">
          {children}
        </h1>
      ),
    },
  };

  if (!heroData) return <div>Loading...</div>;

  return (
    <div id="home" className="flex flex-col md:flex-row items-center px-6 pt-20 pb-10 bg-white gap-10 md:gap-0">
      {/* Text Container */}
      <div className="w-full md:w-1/2 text-left">
        {/* Render the "Rich Text" from Sanity */}
        <PortableText value={heroData.heading} components={ptComponents} />
        
        <a 
          href={heroData.buttonUrl} 
          className="inline-block mt-8 px-6 py-3 bg-[#8d54fc] text-white font-medium rounded-md hover:bg-purple-600 transition"
        >
          {heroData.buttonText}
        </a>
      </div>

      {/* Carousel - We pass the images from Sanity down to it */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="w-full max-w-xl rounded-lg shadow-none">
          {/* We are passing the images prop, but we need to update carousel.js next to use it! */}
          <ImageCarousel images={heroData.carouselImages} />
        </div>
      </div>
    </div>
  );
}