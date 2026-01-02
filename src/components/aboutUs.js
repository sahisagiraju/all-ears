import React, { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { client, urlFor } from "../sanityClient";

// AboutUs Component
export default function AboutUs() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    // 1. Fetch the data
    const fetchAbout = async () => {
      try {
        const data = await client.fetch(`*[_type == "aboutUs"][0]`);
        setAboutData(data);
      } catch (error) {
        console.error("Failed to fetch About Us data:", error);
      }
    };
    fetchAbout();
  }, []);

  // Custom styles for the Bio text (adds spacing between paragraphs)
  const ptComponents = {
    block: {
      normal: ({ children }) => <p className="mb-4 last:mb-0">{children}</p>,
    },
  };

  if (!aboutData) return null;

  return (
    <section id="about" className="bg-white py-12 px-6 font-inter">
      <div className="max-w-screen-lg mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
          About Us
        </h2>

        {/* Mission */}
        <h3 className="pt-8 text-xl md:text-2xl font-semibold text-gray-900 text-center mb-4">
          Our Mission
        </h3>
        <p className="pb-8 md:text-base text-gray-700 leading-relaxed mb-10 text-center">
          {aboutData.missionStatement}
        </p>

        {/* Founder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Profile */}
          <div className="flex flex-col items-center">
            {/* Founder Image from Sanity */}
            {aboutData.founder?.image && (
              <div className="relative overflow-hidden rounded-lg border-4 border-[#8D54FC] w-auto h-64 md:h-72">
                <img
                  src={urlFor(aboutData.founder.image).url()}
                  alt={aboutData.founder.name}
                  className="h-full w-auto object-cover"
                />
              </div>
            )}
            
            <h4 className="mt-4 text-lg md:text-xl font-semibold text-[#8D54FC]">
              {aboutData.founder?.name}
            </h4>
            <p className="text-sm md:text-base text-gray-600">
              {aboutData.founder?.role}
            </p>
          </div>

          {/* Bio + Learn More */}
          <div className="flex flex-col text-gray-700 text-sm md:text-base space-y-4">
            <h5 className="text-lg md:text-2xl font-semibold text-center lg:text-left">
              Meet our founder, Kim!
            </h5>

            <div className="space-y-3">
              {/* Render the Bio Rich Text */}
              <PortableText 
                value={aboutData.founder?.bio} 
                components={ptComponents} 
              />
            </div>

            <div className="text-center">
              <a
                href={aboutData.founder?.buttonLink}
                className="inline-block bg-[#8D54FC] text-white py-2 px-6 rounded-lg font-semibold hover:bg-purple-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Closing Tagline */}
        {aboutData.closingTagline && (
          <div className="mt-8 px-4 text-center max-w-2xl mx-auto">
            <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-4">
              <strong>{aboutData.closingTagline.title}</strong>
            </h3>
            <p className="text-left text-sm md:text-base text-gray-700 leading-relaxed">
              {aboutData.closingTagline.text}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}