import React, { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { client } from "../sanityClient";
import ImageCarousel from "./carousel";

export default function HeroSection() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        console.log("✅ HeroSection mounted");

        // fetch the most recently updated heroSection doc (prevents “wrong doc” issues)
        const data = await client.fetch(
          `*[_type == "heroSection"] | order(_updatedAt desc)[0]`
        );

        console.log("✅ HeroSection data:", data);
        setHeroData(data);
      } catch (error) {
        console.error("❌ HeroSection fetch error:", error);
      }
    };

    fetchHero();
  }, []);

  // portable text styling (bold -> purple, normal blocks -> big headline)
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
    <div
      id="home"
      className="flex flex-col md:flex-row items-center px-6 pt-20 pb-10 bg-white gap-10 md:gap-0"
    >
      {/* Text Container */}
      <div className="w-full md:w-1/2 text-left">
        {/* Rich Text Heading from Sanity */}
        {heroData?.heading ? (
          <PortableText value={heroData.heading} components={ptComponents} />
        ) : (
          <h1 className="text-4xl md:text-6xl font-semibold leading-snug">
            {/* fallback if heading is missing */}
            Welcome
          </h1>
        )}

        {/* Button */}
        {heroData?.buttonText && heroData?.buttonUrl && (
          <a
            href={heroData.buttonUrl}
            className="inline-block mt-8 px-6 py-3 bg-[#8d54fc] text-white font-medium rounded-md hover:bg-purple-600 transition"
            target="_blank"
            rel="noreferrer"
          >
            {heroData.buttonText}
          </a>
        )}
      </div>

      {/* Carousel */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="w-full max-w-xl rounded-lg shadow-none">
          <ImageCarousel images={heroData?.carouselImages || []} />
        </div>
      </div>
    </div>
  );
}