import React from 'react';
import './servis.css';
import { Link } from 'react-router-dom';

const Servis = () => {
  return (
    <section className="service-section">
      <h2 className="title">Sections We Provide</h2>
      <div className="service-grid">
        <Link to="/actors" className="service-box">
          <div className="box-title">Actors</div>
          <p className="box-desc">Click to view all available actors</p>
        </Link>
        <Link to="/anchors" className="service-box">
          <div className="box-title">Anchors</div>
          <p className="box-desc">Click to explore top anchors</p>
        </Link>
        <Link to="/influencers" className="service-box">
          <div className="box-title">Influencers</div>
          <p className="box-desc">Click to connect with influencers</p>
        </Link>
        <Link to="/mehandi-artists" className="service-box">
          <div className="box-title">Mehandi Artists</div>
          <p className="box-desc">Mehandi artists for your events</p>
        </Link>
        <Link to="/makeup-artists" className="service-box">
          <div className="box-title">Makeup Artists</div>
          <p className="box-desc">professional makeup artists</p>
        </Link>
      </div>
    </section>
  );
};

export default Servis;
