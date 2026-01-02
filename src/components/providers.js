import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../sanityClient';

export default function Providers() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const result = await client.fetch(`*[_type == "insuranceSection"][0]`);
        setData(result);
      } catch (error) {
        console.error("Failed to fetch provider data:", error);
      }
    };
    fetchProviders();
  }, []);

  if (!data) return null;

  return (
    <section id="insurance" className="bg-purple-200 py-8 px-6 font-inter">
      {/* Section Label */}
      <div className="max-w-screen-lg mx-auto text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
          {data.title}
        </h3>
      </div>

      {/* Providers Row */}
      <div className="flex flex-wrap items-center justify-center gap-8 mb-6">
        {data.providerLogos?.map((logo, index) => (
          <div
            key={index}
            className="w-24 h-12 flex items-center justify-center"
          >
            <img 
              src={urlFor(logo).url()} 
              alt="Insurance Provider" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* All Providers Button */}
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => window.open(data.allProvidersLink, '_blank')}
          className="inline-flex items-center bg-purple-200 text-[#8c52fd] font-semibold py-2 px-4 rounded-md hover:bg-purple-300 transition border border-[#8c52fd]"
        >
          All Providers
          <span className="ml-2">→</span>
        </button>
      </div>
    </section>
  );
}