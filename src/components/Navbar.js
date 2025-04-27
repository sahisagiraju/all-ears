import React from 'react';
import Logo2 from '../assets/all-ears-logo.js'; 

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-md font-inter">
      <div className="flex items-center">
        <Logo2 className="h-[90px] mr-0" />
        <span className="font-bold text-lg">All Ears Autism Services</span>
      </div>
      <ul className="list-none flex gap-6 m-0 p-0">
        <li><a href="#about" className="no-underline text-gray-800 font-medium">About Us</a></li>
        <li><a href="#insurance" className="no-underline text-gray-800 font-medium">Insurance Providers</a></li>
        <li><a href="#resources" className="no-underline text-gray-800 font-medium">Resources</a></li>
        <li><a href="#tilly" className="no-underline text-gray-800 font-medium">Tilly</a></li>
      </ul>
      <button className="bg-purple-500 text-white border-none py-2 px-4 rounded-md font-semibold cursor-pointer font-inter">Contact Us</button>
    </nav>
  );
}

export default Navbar;
