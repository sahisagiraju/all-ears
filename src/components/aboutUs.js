import React from "react";
import Kim from "../assets/kim.png";

// AboutUs Component
export default function AboutUs() {
  return (
    <section id="about" className="bg-white py-12 px-6 font-inter">
      <div className="max-w-screen-lg mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-purple-600 text-center mb-6">
          About Us
        </h2>

        {/* Mission */}
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-4">
          Our Mission
        </h3>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-10">
          Through compassionate care, innovative strategies, and collaboration with families and community partners, All Ears Autism Services strives to foster independence, enhance quality of life, and promote inclusion for every individual we serve.
        </p>

        {/* Founder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Profile */}
          <div className="flex flex-col items-center h-full">
            {/* Portrait now has auto width and responsive heights */}
            <div className="relative overflow-hidden rounded-lg border-4 border-purple-500 w-auto h-64 md:h-full md:flex-1">
              <img
                src={Kim}
                alt="Kimberly Gorham"
                className="h-full w-auto object-cover"
              />
            </div>
            <h4 className="mt-4 text-lg md:text-xl font-semibold text-purple-600">
              Kimberly Gorham
            </h4>
            <p className="text-sm md:text-base text-gray-600">
              Owner, Executive Clinical Director
            </p>
          </div>

          {/* Bio Text */}
          <div className="flex flex-col justify-between text-gray-700 text-sm md:text-base space-y-6">
            <div>
              <h5 className="text-lg md:text-2xl font-semibold text-center lg:text-left">
                Meet our founder, Kim!
              </h5>
              <p className="mt-4">
                With over 12 years of experience as a Board Certified Behavior Analyst (BCBA) in home, clinic, and school environments, Kimberly brings a wealth of expertise and dedication to the field of Applied Behavior Analysis (ABA). Her background as a special education teacher, educational diagnostician, and special education coordinator in North Dallas school districts has shaped her holistic approach to autism support.
              </p>
              <p className="mt-4">
                Kimberly is deeply committed to working with children of all ages and diverse needs. She emphasizes early intervention, compassionate care, and developmentally appropriate practices to foster meaningful progress for every child and family.
              </p>
              <p className="mt-4">
                Kimberly’s journey in special education and ABA is guided by empathy, innovation, and collaboration. As the cornerstone of All Ears Autism Services, she is dedicated to empowering individuals with autism and developmental disabilities, ensuring they receive the support they need to thrive.
              </p>
            </div>
            <div className="text-center">
              <a
                href="https://tillytherapy.com/browse/kimberly-gorham"
                className="inline-block bg-purple-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
