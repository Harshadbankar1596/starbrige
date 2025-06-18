import React from 'react';
import { Link } from 'react-router-dom';
import './containt.css';

const Containt = () => {
  return (
    <div className='containtbox'>
      <div className="paragraf">
        <h1 className="heading">
          Welcome to <span>StarBridge India</span>
        </h1>
        <p className="middle">
          Your one-stop platform to book celebrities, influencers, reel stars, anchors,
          and social media personalities for events, collaborations, and paid promotions.
        </p>
        <p className="footer">
          Whether you're planning a grand event, launching a product, or simply want your
          brand to go viral – we connect you with the right faces that matter.
        </p>
        <p className="footer">
          From film actors to Instagram stars, we bring your vision to life with <strong>star power</strong>.
        </p>

        {/* Button with Link to Form */}
      </div>
      <Link to="/form" className="button">

        <p>Button</p>

      </Link>
    </div>
  );
};

export default Containt;
