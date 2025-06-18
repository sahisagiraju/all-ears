import React from 'react';
import Logo from '../assets/hank.jsx';
import TillyLogo from '../assets/tilly.png';
import AlignableLogo from '../assets/alignable.png';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <footer className="bg-[#263238] text-white px-10 py-6 font-inter">
        <div className="flex flex-col md:flex-row justify-between gap-y-8 gap-x-16">
          {/* Left Section: Logo & Socials */}
          <div className="md:w-1/2 text-center md:text-left">
            <Logo className="h-10 mx-auto md:mx-0 mb-3" />
            <h2 className="text-xl font-semibold my-2">All Ears Autism Services</h2>
            <p className="text-gray-300 text-sm self-center">972-896-5083</p>
            <p className="text-gray-300 text-sm mb-2">kimberly.gorham@allearsautismservices.org</p>
            <div className="mt-3 flex justify-center md:justify-start items-center gap-4 flex-wrap">
              <a
                href="https://www.linkedin.com/company/all-ears-autism-services-llc/"
                className="text-white text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://tillytherapy.com/browse/kimberly-gorham"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              > 
                <img
                  src={TillyLogo}
                  alt="Tilly"
                  className="h-9 object-contain"
                />
              </a>
              <a
                href="https://www.alignable.com/plano-tx/all-ears-autism-services-llc"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={AlignableLogo}
                  alt="Alignable"
                  className="h-7 object-contain"
                />
              </a>
            </div>
          </div>

          {/* Right Section: Company Links */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-base font-semibold mb-2.5">Company</h3>
            <ul className="list-none p-0 m-0 text-sm">
              <li className="mb-2">
                <a href="#about" className="text-gray-200 no-underline font-normal">About us</a>
              </li>
              <li className="mb-2">
                <a
                  href="https://tillytherapy.com/browse/kimberly-gorham"
                  className="text-gray-200 no-underline font-normal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://tillytherapy.com/browse/kimberly-gorham"
                  className="text-gray-200 no-underline font-normal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tilly Therapy
                </a>
              </li>
              <li className="mb-2">
                <a href="#resources" className="text-gray-200 no-underline font-normal">Resources</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* All Rights Reserved Banner */}
      <div className="bg-[#1c262b] text-center text-gray-400 text-xs py-2 font-inter">
      Copyright © 2025 All Ears Autism Services, LLC. All rights reserved.
      </div>
    </>
  );
}
