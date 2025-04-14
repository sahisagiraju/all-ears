import React from "react";
import "./aboutUs.css";
import Kim from "../assets/kim.png";

export default function AboutUs() {
  return (
    <div className="column">
      <h1 className="about-title">About Us</h1>

      <h2 className="about-section-title">Our Mission</h2>
      <p className="about-text">
        Through compassionate care, innovative strategies, and collaboration
        with families and community partners, All Ears Autism Services strives
        to foster independence, enhance quality of life, and promote inclusion
        for every individual we serve.
      </p>
      <div className="kim-section">
        <div className="kim-profile">
          <img src={Kim} alt="Kimberly Gorham" />
          <div className="kim-name">Kimberly Gorham</div>
          <div className="kim-title">Owner, Executive Clinical Director</div>
        </div>
        <div className="kim-description">
          <h4>Meet our founder, Kim!</h4>
          <p className="about-text">
            With over 12 years of experience as a Board Certified Behavior
            Analyst (BCBA) in home, clinic, and school environments, Kimberly
            brings a wealth of expertise and dedication to the field of Applied
            Behavior Analysis (ABA). Her background as a special education
            teacher, educational diagnostician, and special education
            coordinator in North Dallas school districts has shaped her holistic
            approach to autism support.
          </p>
          <p className="about-text">
            Kimberly is deeply committed to working with children of all ages
            and diverse needs. She emphasizes early intervention, compassionate
            care, and developmentally appropriate practices to foster meaningful
            progress for every child and family.
          </p>
          <p className="about-text">
            Kimberly’s journey in special education and ABA is guided by
            empathy, innovation, and collaboration. As the cornerstone of All
            Ears Autism Services, she is dedicated to empowering individuals
            with autism and developmental disabilities, ensuring they receive
            the support they need to thrive.
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="empowering-section">
  <h2 className="empowering-title">Empowering Families, One Step at a Time</h2>
  <p className="about-text">
    At All Ears Autism Services, we are committed to providing compassionate, in-home Applied Behavior Analysis (ABA) therapy
    to children across Texas. Our mission is to foster independence, enhance quality of life, and promote inclusion for every
    individual we serve. By specializing in personalized care, especially for underserved and rural communities, we ensure
    that every family has access to the support they need.
  </p>
  <p className="about-text">
    Through partnerships with leading insurance providers, we make high-quality autism care accessible and affordable.
    Together, we can create a brighter future for children and their families.
  </p>
  <p className="about-text">
    Let’s grow, learn, and thrive — with All Ears Autism Services by your side.
  </p>
</div>

    </div>
  );
}
