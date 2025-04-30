import React from "react";
import Kim from "../assets/kim.png";

// AboutUs Component
export default function AboutUs() {
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
          Through compassionate care, innovative strategies, and collaboration
          with families and community partners, All Ears Autism Services
          strives to foster independence, enhance quality of life, and promote
          inclusion for every individual we serve.
        </p>

        {/* Founder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Profile */}
          <div className="flex flex-col items-center">
            {/* Portrait now smaller on md+ screens */}
            <div className="relative overflow-hidden rounded-lg border-4 border-[#8D54FC] w-auto h-64 md:h-72">
              <img
                src={Kim}
                alt="Kimberly Gorham"
                className="h-full w-auto object-cover"
              />
            </div>
            <h4 className="mt-4 text-lg md:text-xl font-semibold text-[#8D54FC]">
              Kimberly Gorham
            </h4>
            <p className="text-sm md:text-base text-gray-600">
              Owner, Executive Clinical Director
            </p>
          </div>

          {/* Bio + Learn More */}
          <div className="flex flex-col text-gray-700 text-sm md:text-base space-y-4">
            <h5 className="text-lg md:text-2xl font-semibold text-center lg:text-left">
              Meet our founder, Kim!
            </h5>

            <div className="space-y-3">
              <p>
                With over 12 years of experience as a Board Certified Behavior
                Analyst (BCBA) in home, clinic, and school environments,
                Kimberly brings a wealth of expertise and dedication to the
                field of Applied Behavior Analysis (ABA).
              </p>
              <p>
                Her background as a special education teacher, educational
                diagnostician, and special education coordinator in North Dallas
                school districts has shaped her holistic approach to autism support.
              </p>
              <p>
                Kimberly is deeply committed to early intervention,
                compassionate care, and developmentally appropriate practices to
                foster meaningful progress for every child and family.
              </p>
            </div>

            <div className="text-center ">
              <a
                href="https://tillytherapy.com/browse/kimberly-gorham"
                className="inline-block bg-[#8D54FC] text-white py-2 px-6 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Tagline - Reduced top margin */}
        <div className="mt-8 px-4 text-center max-w-2xl mx-auto">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-4">
            <strong>Empowering Families, One Step at a Time</strong>
          </h3>
          <p className="text-left text-sm md:text-base text-gray-700 leading-relaxed">
            At All Ears Autism Services, we are committed to providing
            compassionate, in-home ABA therapy across Texas. By specializing
            in personalized care—especially for underserved and rural
            communities—we ensure every family has access to the support they
            need. Through partnerships with leading insurance providers, we make
            high-quality autism care accessible and affordable. Together, we
            can create a brighter future for children and their families.<br/><br/>
            Let's grow, learn, and thrive — with All Ears Autism Services by
            your side.
          </p>
        </div>
      </div>
    </section>
  );
}