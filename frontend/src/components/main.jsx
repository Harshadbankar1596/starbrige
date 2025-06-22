import React from 'react';
import './main.css';
import Servis from "../components/servis";
import { Link } from 'react-router-dom';

const MainContent = () => {
  return (
    <div className="main-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to Your Celebrity Booking Platform</h1>
        <p>Connecting you with the right faces for events, collaborations, and promotions.</p>
      </header>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2 className="title">What We Offer</h2>
        <div className="offer-grid">
          <div className="offer-box">
            <h3>Celebrity Booking</h3>
            <p>Book stars for weddings, events, corporate shows, and inaugurations.</p>
          </div>
          <div className="offer-box">
            <h3>Paid Social Media Promotions</h3>
            <p>Boost your brand with influencer promotions that connect authentically.</p>
          </div>
          <div className="offer-box">
            <h3>Collaboration with Creators</h3>
            <p>Launch new campaigns and videos with top Instagram & YouTube personalities.</p>
          </div>
          <div className="offer-box">
            <h3>Anchor & Host Booking</h3>
            <p>Professional hosts to bring energy and charm to your event.</p>
          </div>
        </div>
      </section>

      <Servis />
   {/* join sectio */}
      <section className="join-section">
        <h2>Do you want to join us as an actor, influencer, anchor?</h2>
        <p>Register yourself and become a part of our professional talent network.</p>
        <Link to="/register" className="join-button">Register Now</Link>
      </section>

      {/* Why Choose Us Section */}
      <section className="choose-section">
        <h2 className="title">Why Choose Us?</h2>
        <div className="choose-box">
          <ul>
            <li>Verified celebrities & creators</li>
            <li>Transparent pricing & direct bookings</li>
            <li>Support with planning & execution</li>
            <li>Customizable packages for all budgets</li>
            <li>Pan-India network with real-time availability</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
