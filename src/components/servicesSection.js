// src/components/ServicesSection.js
import React from 'react';
import { FaUsers, FaClipboardList, FaFileInvoiceDollar } from 'react-icons/fa';

const services = [
  {
    icon: <FaUsers size={32} className="text-purple-500" />,
    title: 'ABA Therapy',
    desc: 'In-home ABA therapy for children (ages 1–20). Serving DFW, Houston, and expanding to Austin & San Antonio.'
  },
  {
    icon: <FaClipboardList size={32} className="text-purple-500" />,
    title: 'How It Works',
    desc: 'Step-by-step: Inquiry → Assessment → Plan → Sessions.'
  },
  {
    icon: <FaFileInvoiceDollar size={32} className="text-purple-500" />,
    title: 'Insurance & Payment Info',
    desc: 'Accepted: Medicaid, Aetna, UnitedHealthcare, Texas Children’s, more.'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Services</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
            {service.icon}
            <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
