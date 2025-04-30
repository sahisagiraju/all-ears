import React from 'react';
import Medicaid from '../assets/providers/medicaid';
import Aetna from '../assets/providers/aetna';
import Bcbs from '../assets/providers/bcbs';
import Superior from '../assets/providers/superior';
import Uhc from '../assets/providers/uhc';

export default function Providers() {
  const providers = [
    { key: 'medicaid', Component: Medicaid },
    { key: 'aetna', Component: Aetna },
    { key: 'bcbs', Component: Bcbs },
    { key: 'superior', Component: Superior },
    { key: 'uhc', Component: Uhc },
  ];

  return (
    <section id="insurance" className="bg-purple-200 py-8 px-6 font-inter">
      {/* Section Label */}
      <div className="max-w-screen-lg mx-auto text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Insurances We Accept
        </h3>
      </div>

      {/* Providers Row */}
      <div className="flex flex-wrap items-center justify-center gap-6">
        {providers.map(({ key, Component }) => (
          <div
            key={key}
            className="w-24 h-10 flex items-center justify-center"
          >
            <Component />
          </div>
        ))}

        {/* All Providers Button */}
        <button
          type="button"
          onClick={() => window.open('https://tillytherapy.com/browse/kimberly-gorham', '_blank')}
          className="inline-flex items-center bg-purple-200 text-[#8c52fd] font-semibold py-2 px-4 rounded-md hover:bg-purple-300 transition"
        >
          All Providers
          <span className="ml-2">→</span>
        </button>
      </div>
    </section>
  );
}
