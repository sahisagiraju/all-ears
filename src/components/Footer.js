import React from 'react';
import './Footer.css';
import logo from '../assets/allearslogo.png';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="logo" className="footer-logo" />
        <h2 className="footer-title">All Ears Autism Services</h2>
        <p>Copyright © 2025 All Ears Autism Services, LLC</p>
        <p>All rights reserved</p>
        <div className="footer-icons">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaGlobe /></a>
        </div>
      </div>
      <div className="footer-right">
        <h3>Company</h3>
        <ul>
          <li><a href="#about">About us</a></li>
          <li><a href="#contact">Contact us</a></li>
          <li><a href="#tilly">Tilly Therapy</a></li>
          <li><a href="#resources">Resources</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
