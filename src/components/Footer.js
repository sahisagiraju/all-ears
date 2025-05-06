import React from 'react';
import Logo from '../assets/hank.jsx';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#263238] text-white p-4 px-10 font-inter flex flex-col md:flex-row justify-between flex-wrap">
      {/* Left Section: Logo & Socials */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0 text-center md:text-left">
        <Logo className="h-10 mx-auto md:mx-0 mb-3" />
        <h2 className="text-xl font-semibold my-2">All Ears Autism Services</h2>
        <p>Copyright © 2025 All Ears Autism Services, LLC</p>
        <p>All rights reserved</p>
        {/* Social Icons: center on small, left on md+ */}
        <div className="mt-2 flex justify-center gap-2 md:justify-start md:items-center">
          <a href="https://github.com/sahisagiraju/all-ears" className="text-white mr-4 text-xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/company/all-ears-autism-services-llc/" className="text-white mr-4 text-xl">
            <FaLinkedin />
          </a>
          <a href="/" className="text-white mr-4 text-xl">
            <FaGlobe />
          </a>
        </div>
      </div>

      {/* Right Section: Company Links */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-base font-semibold mb-2.5">Company</h3>
        <ul className="list-none p-0 m-0">
          <li className="mb-2"><a href="#about" className="text-gray-200 no-underline font-normal">About us</a></li>
          <li className="mb-2"><a href="https://tillytherapy.com/browse/kimberly-gorham" className="text-gray-200 no-underline font-normal">Contact us</a></li>
          <li className="mb-2"><a href="https://tillytherapy.com/browse/kimberly-gorham" className="text-gray-200 no-underline font-normal">Tilly Therapy</a></li>
          <li className="mb-2"><a href="#resources" className="text-gray-200 no-underline font-normal">Resources</a></li>
        </ul>
      </div>
    </footer>
  );
}
