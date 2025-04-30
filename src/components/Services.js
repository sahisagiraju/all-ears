import React from 'react';
import logo1 from "../assets/ABA-Therapy-Icon.png";
import logo2 from "../assets/How-It-Works-Icon.png";
import logo3 from "../assets/Insurance-and-Payment-Info-Icon.png";

function Services() {
  return (
    <div className="w-full px-6 py-12">
      {/* Services Title */}
      <h1 className="text-4xl font-bold text-center mb-8 font-inter">Services</h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* ABA Therapy Card */}
        <div className="bg-white rounded-lg p-6 shadow border-2 border-gray-500 font-inter">
          <img src={logo1} alt="ABA Therapy" className="w-auto mx-auto mb-4" />
          <h2 className="text-center text-3xl font-normal mb-2">ABA Therapy</h2>
          <p className="text-center mb-2">In-home ABA therapy for children (ages 1-20).</p>
          <p className="text-center">Service areas: DFW, Houston, with plans for Austin and San Antonio.</p>
        </div>

        {/* How It Works Card */}
        <div className="bg-white rounded-lg p-6 shadow border-2 border-gray-500 font-inter">
          <img src={logo2} alt="How It Works" className="w-auto mx-auto mb-4" />
          <h2 className="text-center text-3xl font-normal mb-2">How It Works</h2>
          <p className="text-center">Step-by-step guide: Inquiry → Assessment → Treatment plan → Therapy sessions.</p>
        </div>

        {/* Insurance Info Card */}
        <div className="bg-white rounded-lg p-6 shadow border-2 border-gray-500 font-inter">
          <img src={logo3} alt="Insurance Info" className="w-auto mx-auto mb-4" />
          <h2 className="text-center text-3xl font-normal mb-2">Insurance & Payment Info</h2>
          <p className="text-center">We accept Medicaid, Aetna, United HealthCare, Texas Children's, Cook Children's, Amerigroup, and more.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;