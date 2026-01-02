import React, { useEffect, useState } from 'react';
import { client } from '../sanityClient';

// BottomCards Component
export default function BottomCards() {
  const [resourcesData, setResourcesData] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const data = await client.fetch(`*[_type == "resourcesSection"][0]`);
        setResourcesData(data);
      } catch (error) {
        console.error("Failed to fetch resources data:", error);
      }
    };
    fetchResources();
  }, []);

  if (!resourcesData) return null;

  return (
    <div id="resources" className="w-full px-6 py-12 font-inter">
      <h1 className="text-4xl font-bold text-center mb-8">Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card 1: What is ABA? */}
        <div className="bg-purple-200 rounded-lg shadow p-6 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-semibold text-left mb-4">
              {resourcesData.abaCard?.heading}
            </h3>
            <p className="text-left mb-6 text-gray-800">
              {resourcesData.abaCard?.content}
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href={resourcesData.abaCard?.link}
              className="bg-[#8D54FC] text-white py-3 px-6 rounded-md font-semibold hover:bg-purple-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Card 2: Parents and Clients */}
        <div className="bg-purple-200 rounded-lg shadow p-6 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-semibold text-left mb-4">
              {resourcesData.parentsCard?.heading}
            </h3>
            <p className="text-left mb-6 text-gray-800">
              {resourcesData.parentsCard?.intro}
            </p>
            
            {/* Dynamic Link List */}
            <ul className="list-disc list-inside mb-6 space-y-2 text-left">
              {resourcesData.parentsCard?.links?.map((linkItem, index) => (
                <li key={index}>
                  <a
                    href={linkItem.url}
                    className="text-gray-800 hover:font-bold hover:text-[#6D41C6]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {linkItem.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}