import React from 'react';
import './Services.css'; 
import logo1 from "../assets/ABA-Therapy-Icon.png"
import logo2 from "../assets/How-It-Works-Icon.png"
import logo3 from "../assets/Insurance-and-Payment-Info-Icon.png"

function Services() {
    return (
      <div class="parent">
            <div class="sectionTitle"><h1>Services</h1></div>

            <div class="resources">
                <div class="card">
                    <img src={logo1} alt="logo"></img>
                    <h2>ABA Therapy</h2>
                    <p>In-home ABA therapy for children (ages 1-20).</p>
                    <p>Service areas: DFW, Houston, and expansion goals (Austin and San Antonio).</p>
                </div>
                <div class="card">
                    <img src={logo2} alt="logo"></img>
                    <h2>How it Works</h2>
                    <p>Step-by-step guide on starting therapy (Inquiry → Assessment → Treatment plan → Therapy sessions).</p>
                </div>
                <div class="card">
                    <img src={logo3} alt="logo"></img>
                    <h2>Insurance and Payment Info</h2>
                    <p>List of accepted insurance providers (including Medicaid, Aetna, United HealthCare, Texas Children's, CookChildren's, and Amerigroup).</p>
                </div>
            </div>
      </div>
    );
  }
  
  export default Services;
  