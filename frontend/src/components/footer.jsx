import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-left">
          <h2 className="footer-heading">Get Started Today</h2>
          <p>Don’t wait for a chance encounter — create the perfect celebrity moment today!</p>
          <p>Contact us to discuss your idea, budget, and goals – we’ll help you book the perfect star for it.</p>
        </div>

        <div className="footer-right">
          <h3>Contact Us</h3>
          <p>Call / WhatsApp: <a href="tel:+91XXXXXXXXXX">+91XXXXXXXXXX</a></p>
          <p>Email: <a href="mailto:youremail@example.com">youremail@example.com</a></p>
          <p>Website: <a href="https://yourdomain.com" target="_blank" rel="noreferrer">yourdomain.com</a></p>
        </div>
      </div>

      <div className="footer-tagline">
        <em>“Bringing Celebrities Closer to You.”</em> <br />
        <em>“Where Stars and Brands Meet.”</em>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} StarBridge India | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
