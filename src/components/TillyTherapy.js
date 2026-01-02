import React, { useEffect, useState } from 'react';
import { client } from '../sanityClient';

export default function TillyTherapy() {
  const [tillyData, setTillyData] = useState(null);

  useEffect(() => {
    const fetchTilly = async () => {
      try {
        const data = await client.fetch(`*[_type == "tillySection"][0]`);
        setTillyData(data);
      } catch (error) {
        console.error("Failed to fetch Tilly data:", error);
      }
    };
    fetchTilly();
  }, []);

  if (!tillyData) return null;

  return (
    <div id="tilly" className="w-full px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 font-inter">
        {tillyData.heading}
      </h1>
      <div className="max-w-2xl mx-auto bg-purple-200 rounded-lg shadow p-6 font-inter">
        <p className="text-center mb-6 text-gray-800">
          {tillyData.text}
        </p>
        <div className="flex justify-center">
          <a
            href={tillyData.buttonUrl}
            className="bg-[#8D54FC] text-white py-3 px-6 rounded-md font-semibold hover:bg-[#6D41C6] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            {tillyData.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}