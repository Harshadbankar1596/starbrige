import React from 'react';
import './about.css'; // Optional: CSS styling file

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          StarBridge India is a premium celebrity booking and event management platform.
          We connect you with India’s top celebrities, influencers, anchors, and artists 
          to add star power to your events, brand promotions, or social media campaigns.
        </p>

        <h2 className="about-subtitle">What We Do</h2>
        <ul className="about-list">
          <li>Celebrity Event Booking</li>
          <li>Brand Endorsements</li>
          <li>Corporate Events & Weddings</li>
          <li>Influencer Marketing</li>
        </ul>

        <h2 className="about-subtitle">Our Mission</h2>
        <p className="about-mission">
          Our goal is to make celebrity experiences easy and affordable.
          We work with transparency, trust, and trends.
        </p>
      </div>
    </section>
  );
};

export default About;
