import React, { useEffect, useState } from 'react';
import { FaUsers, FaClipboardList, FaFileInvoiceDollar } from 'react-icons/fa';
import { client } from '../sanityClient';

// 1. Create a map to convert the "String" from Sanity back into an Icon Component
const iconMap = {
  'Users': FaUsers,
  'Clipboard': FaClipboardList,
  'Invoice': FaFileInvoiceDollar,
};

const ServicesSection = () => {
  const [servicesData, setServicesData] = useState(null);

  useEffect(() => {
    // 2. Fetch the data
    const fetchServices = async () => {
      try {
        const data = await client.fetch(`*[_type == "servicesSection"][0]`);
        setServicesData(data);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };
    fetchServices();
  }, []);

  if (!servicesData) return null; // or a loading spinner

  return (
    <section className="py-10 bg-gray-50 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        {servicesData.sectionTitle}
      </h2>
      
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
        {/* 3. Loop through the services from Sanity */}
        {servicesData.services?.map((service, i) => {
          // Find the matching icon, or default to FaUsers if missing
          const IconComponent = iconMap[service.iconName] || FaUsers;

          return (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
              <IconComponent size={32} className="text-[#8C52FD]" />
              <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;