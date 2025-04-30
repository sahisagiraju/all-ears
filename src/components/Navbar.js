import React, { useState } from 'react';
import Logo from '../assets/hank.js';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center h-[90px] px-6 bg-white shadow-md font-inter">
      {/* Logo and Title - clicking scrolls to top */}
      <a href="#root" className="flex items-center h-full">
        <Logo className="h-[80%] w-auto" />
        <span className="font-bold text-lg ml-2 whitespace-nowrap">All Ears Autism Services</span>
      </a>

      {/* Hamburger / Close Icon */}
      <button
        className="lg:hidden focus:outline-none"
        onClick={() => setNavOpen(!navOpen)}
        aria-label="Toggle navigation"
      >
        {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Navigation Links and Contact Button */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md transition-transform transform origin-top duration-300 lg:static lg:shadow-none lg:bg-transparent lg:transform-none lg:flex lg:justify-end lg:items-center ${
          navOpen ? 'scale-y-100' : 'scale-y-0'
        } lg:scale-y-100`}
      >
        <ul className="list-none flex flex-col gap-4 p-6 m-0 lg:flex-row lg:gap-6 lg:p-0">
          <li>
            <a href="#about" className="no-underline text-gray-800 font-medium">
              About Us
            </a>
          </li>
          <li>
            <a href="#insurance" className="no-underline text-gray-800 font-medium">
              Insurance Providers
            </a>
          </li>
          <li>
            <a href="#resources" className="no-underline text-gray-800 font-medium">
              Resources
            </a>
          </li>
          <li>
            <a href="#tilly" className="no-underline text-gray-800 font-medium">
              Tilly
            </a>
          </li>
        </ul>
        <div className="flex justify-center lg:justify-start p-6 lg:p-0 lg:ml-6">
          <button className="bg-purple-500 text-white border-none py-2 px-4 rounded-md font-semibold cursor-pointer font-inter">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
