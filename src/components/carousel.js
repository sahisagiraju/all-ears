import React, { useEffect, useState } from 'react';
import Image1 from '../assets/carousel/carousel_img1';
import Image2 from '../assets/carousel/carousel_img2';
import Image3 from '../assets/carousel/carousel_img3';

const images = [Image1, Image2, Image3];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg">
      <div
        className="flex transition-transform duration-1100 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((SVGComponent, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex justify-center items-center h-[400px] bg-white"
          >
            <SVGComponent className="w-full h-full object-contain" />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current ? 'bg-purple-600' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
