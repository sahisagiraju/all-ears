import React, { useEffect, useState } from 'react';
import { urlFor } from '../sanityClient'; // Import the helper we created

// We now accept 'images' as a prop from the HeroSection
export default function ImageCarousel({ images = [] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Only run the timer if we actually have images
    if (!images || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images]);

  // If Sanity hasn't sent images yet, show a placeholder
  if (!images || images.length === 0) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-gray-50 text-gray-400">
        Loading Images...
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg">
      <div
        className="flex transition-transform duration-1100 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {/* Map through the images from Sanity */}
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex justify-center items-center h-[400px] bg-white"
          >
            {/* Use urlFor() to get the real image link */}
            <img 
              src={urlFor(img).url()} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-contain"
            />
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