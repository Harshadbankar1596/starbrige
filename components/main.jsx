import React from 'react';
import './main.css';

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

      {/* Why Choose Us Section */}
      <section className="choose-section">
        <h2 className="title">Why Choose Us?</h2>
        <div className="choose-box">
          <ul>
            <li>✅ Verified celebrities & creators</li>
            <li>✅ Transparent pricing & direct bookings</li>
            <li>✅ Support with planning & execution</li>
            <li>✅ Customizable packages for all budgets</li>
            <li>✅ Pan-India network with real-time availability</li>
          </ul>
        </div>
      </section>

      {/* Sections We Provide */}
      <section className="service-section">
        <h2 className="title">Sections We Provide</h2>
        <div className="service-grid">
          <div className="service-box">
            <h3>Anchors</h3>
            <p>Professional emcees to elevate the energy of any event.</p>
          </div>
          <div className="service-box">
            <h3>Actors</h3>
            <p>Hire popular faces for appearances, ads, and entertainment projects.</p>
          </div>
          <div className="service-box">
            <h3>Menndi Artist</h3>
            <p>Traditional and modern mehndi designs for all occasions.</p>
          </div>
          <div className="service-box">
            <h3>Dance Artist</h3>
            <p>Dynamic performances tailored to your event theme and vibe.</p>
          </div>
          <div className="service-box">
            <h3>Event Management</h3>
            <p>End-to-end event planning and execution made easy.</p>
          </div>
          <div className="service-box">
            <h3>Choreographer</h3>
            <p>Custom choreography for weddings, shows, and video productions.</p>
          </div>
          <div className="service-box">
            <h3>Camera Man</h3>
            <p>Experienced camera crew for professional coverage.</p>
          </div>
          <div className="service-box">
            <h3>Reel Shoot</h3>
            <p>Short-form content creation for social media platforms.</p>
          </div>
          <div className="service-box">
            <h3>Makeup Artists</h3>
            <p>Top-notch makeup services for brides, celebrities, and shoots.</p>
          </div>
          <div className="service-box">
            <h3>Studio for Shoot</h3>
            <p>Fully-equipped studios available for photo and video projects.</p>
          </div>
          <div className="service-box">
            <h3>Caterers</h3>
            <p>Delicious and customizable catering for any size event.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
