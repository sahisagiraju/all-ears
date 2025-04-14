import React from 'react';
import './Navbar.css'; 
import Logo2 from '../assets/all-ears-logo.js'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Logo2 className="navbar-logo" />
        <span className="navbar-title">All Ears Autism Services</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#about">About Us</a></li>
        <li><a href="#insurance">Insurance Providers</a></li>
        <li><a href="#resources">Resources</a></li>
        <li><a href="#tilly">Tilly</a></li>
      </ul>
      <button className="contact-button">Contact Us</button>
    </nav>
  );
}

export default Navbar;
