import React from 'react';

// TillyTherapy Component
export default function TillyTherapy() {
  return (
    <div id="tilly" className="w-full px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 font-inter">Tilly Therapy</h1>
      <div className="max-w-2xl mx-auto bg-purple-200 rounded-lg shadow p-6 font-inter">
        <p className="text-center mb-6">
          Continue to Tilly Therapy to book your appointment and learn more about All Ears!
        </p>
        <div className="flex justify-center">
          <a
            href="https://tillytherapy.com/browse/kimberly-gorham"
            className="bg-[#8D54FC] text-white py-3 px-6 rounded-md font-semibold hover:bg-[#6D41C6] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started with ABA
          </a>
        </div>
      </div>
    </div>
  );
}
