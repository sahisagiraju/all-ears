import React from 'react';
import logo1 from "../assets/ABA-Therapy-Icon.png"
import logo2 from "../assets/How-It-Works-Icon.png"
import logo3 from "../assets/Insurance-and-Payment-Info-Icon.png"

function Services() {
    return (
      <div className="w-full">
            <div className="text-center font-inter"><h1>Services</h1></div>
            <div className="flex justify-between items-center flex-wrap">
                <div className="bg-white w-2/5 mb-5 rounded-lg mx-3 shadow border-2 border-gray-500 font-inter">
                    <img src={logo1} alt="logo" className="w-auto mx-auto"></img>
                    <h2 className="text-center text-3xl font-normal">ABA Therapy</h2>
                    <p className="text-center p-2">In-home ABA therapy for children (ages 1-20).</p>
                    <p className="text-center p-2">Service areas: DFW, Houston, and expansion goals (Austin and San Antonio).</p>
                </div>
                <div className="bg-white w-2/5 mb-5 rounded-lg mx-3 shadow border-2 border-gray-500 font-inter">
                    <img src={logo2} alt="logo" className="w-auto mx-auto"></img>
                    <h2 className="text-center text-3xl font-normal">How it Works</h2>
                    <p className="text-center p-2">Step-by-step guide on starting therapy (Inquiry → Assessment → Treatment plan → Therapy sessions).</p>
                </div>
                <div className="bg-white w-2/5 mb-5 rounded-lg mx-3 shadow border-2 border-gray-500 font-inter">
                    <img src={logo3} alt="logo" className="w-auto mx-auto"></img>
                    <h2 className="text-center text-3xl font-normal">Insurance and Payment Info</h2>
                    <p className="text-center p-2">List of accepted insurance providers (including Medicaid, Aetna, United HealthCare, Texas Children's, CookChildren's, and Amerigroup).</p>
                </div>
            </div>
      </div>
    );
  }
  
  export default Services;
