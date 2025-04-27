import React from "react";
import Kim from "../assets/kim.png";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center p-8 font-sans text-gray-800 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 text-purple-800">About Us</h1>

      <h2 className="text-3xl font-semibold mt-8 mb-4">Our Mission</h2>
      <p className="max-w-4xl text-justify leading-relaxed mb-6">
        Through compassionate care, innovative strategies, and collaboration
        with families and community partners, All Ears Autism Services strives
        to foster independence, enhance quality of life, and promote inclusion
        for every individual we serve.
      </p>
      <div className="flex gap-8 justify-center items-start mt-8 flex-wrap">
        <div className="flex flex-col items-center justify-center max-w-xs">
          <img src={Kim} alt="Kimberly Gorham" className="w-[300px] h-auto rounded-lg object-cover mb-4" />
          <div className="font-bold text-lg">Kimberly Gorham</div>
          <div className="text-base text-gray-600 text-center mt-1">Owner, Executive Clinical Director</div>
        </div>
        <div className="flex-1 min-w-[300px] max-w-[700px]">
          <h4 className="text-2xl mb-4 text-purple-800">Meet our founder, Kim!</h4>
          <p className="max-w-4xl text-justify leading-relaxed mb-6">
            With over 12 years of experience as a Board Certified Behavior
            Analyst (BCBA) in home, clinic, and school environments, Kimberly
            brings a wealth of expertise and dedication to the field of Applied
            Behavior Analysis (ABA). Her background as a special education
            teacher, educational diagnostician, and special education
            coordinator in North Dallas school districts has shaped her holistic
            approach to autism support.
          </p>
          <p className="max-w-4xl text-justify leading-relaxed mb-6">
            Kimberly is deeply committed to working with children of all ages
            and diverse needs. She emphasizes early intervention, compassionate
            care, and developmentally appropriate practices to foster meaningful
            progress for every child and family.
          </p>
          <p className="max-w-4xl text-justify leading-relaxed mb-6">
            Kimberly’s journey in special education and ABA is guided by
            empathy, innovation, and collaboration. As the cornerstone of All
            Ears Autism Services, she is dedicated to empowering individuals
            with autism and developmental disabilities, ensuring they receive
            the support they need to thrive.
          </p>
          <button className="mt-4 py-2.5 px-5 bg-purple-800 text-white border-none rounded-lg cursor-pointer hover:bg-purple-900 transition-colors">Learn More</button>
        </div>
      </div>
      <div className="w-full mt-8">
  <h2 className="text-3xl font-semibold mb-4 text-center">Empowering Families, One Step at a Time</h2>
  <p className="max-w-4xl text-justify leading-relaxed mb-6">
    At All Ears Autism Services, we are committed to providing compassionate, in-home Applied Behavior Analysis (ABA) therapy
    to children across Texas. Our mission is to foster independence, enhance quality of life, and promote inclusion for every
    individual we serve. By specializing in personalized care, especially for underserved and rural communities, we ensure
    that every family has access to the support they need.
  </p>
  <p className="max-w-4xl text-justify leading-relaxed mb-6">
    Through partnerships with leading insurance providers, we make high-quality autism care accessible and affordable.
    Together, we can create a brighter future for children and their families.
  </p>
  <p className="max-w-4xl text-justify leading-relaxed mb-6">
    Let’s grow, learn, and thrive — with All Ears Autism Services by your side.
  </p>
</div>

    </div>
  );
}
