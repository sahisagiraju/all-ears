import React from 'react';
import logo from '../assets/allearslogo.png';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="flex justify-between bg-[#263238] text-white p-10 flex-wrap font-inter">
      <div className="max-w-1/2">
        <img src={logo} alt="logo" className="h-10 mb-3" />
        <h2 className="text-xl font-semibold my-2">All Ears Autism Services</h2>
        <p>Copyright © 2025 All Ears Autism Services, LLC</p>
        <p>All rights reserved</p>
        <div className="mt-2">
          <a href="/" className="text-white mr-4 text-xl"><FaGithub /></a>
          <a href="/" className="text-white mr-4 text-xl"><FaLinkedin /></a>
          <a href="/" className="text-white mr-4 text-xl"><FaGlobe /></a>
        </div>
      </div>
      <div className="text-left">
        <h3 className="text-base font-semibold mb-2.5">Company</h3>
        <ul className="list-none p-0 m-0">
          <li className="mb-2"><a href="#about" className="text-gray-200 no-underline font-normal">About us</a></li>
          <li className="mb-2"><a href="#contact" className="text-gray-200 no-underline font-normal">Contact us</a></li>
          <li className="mb-2"><a href="#tilly" className="text-gray-200 no-underline font-normal">Tilly Therapy</a></li>
          <li className="mb-2"><a href="#resources" className="text-gray-200 no-underline font-normal">Resources</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
