import React, { useState } from 'react';
import Logo from '../assets/hank.jsx';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const handleClose = () => setNavOpen(false);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center h-[90px] px-6 bg-white shadow-md font-inter">
      {/* Logo and Title */}
      <a
        href="#root"
        onClick={handleClose}
        className="flex items-center h-full"
      >
        <Logo className="h-[80%] w-auto" />
        <span className="font-bold text-lg ml-2 whitespace-nowrap">
          All Ears Autism Services
        </span>
      </a>

      {/* Hamburger / Close Icon */}
      <button
        className="lg:hidden focus:outline-none"
        onClick={() => setNavOpen(!navOpen)}
        aria-label="Toggle navigation"
      >
        {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Navigation Links */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md transition-transform transform origin-top duration-300 lg:static lg:shadow-none lg:bg-transparent lg:transform-none lg:flex lg:justify-end lg:items-center ${
          navOpen ? 'scale-y-100' : 'scale-y-0'
        } lg:scale-y-100`}
      >
        <ul className="list-none flex flex-col gap-4 p-6 m-0 lg:flex-row lg:gap-6 lg:p-0">
          {[
            { href: '#about', label: 'About Us' },
            { href: '#insurance', label: 'Insurance Providers' },
            { href: '#resources', label: 'Resources' },
            { href: '#tilly', label: 'Tilly' },
          ].map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={handleClose}
                className="no-underline text-gray-800 font-medium"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center lg:justify-start p-6 lg:p-0 lg:ml-6">
          <a
            href="https://tillytherapy.com/browse/kimberly-gorham"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="bg-[#8D54FC] text-white py-2 px-4 rounded-md font-semibold cursor-pointer font-inter inline-block"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
