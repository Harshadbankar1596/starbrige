import React from 'react';
import './servis.css';
import { Link } from 'react-router-dom';

const Servis = () => {
  return (
    <section className="service-section">
      <h2 className="title">Sections We Provide</h2>
      <div className="service-grid">
        <Link to="/actors" className="service-box s1">
          <div className="box-title">Actors</div>
          <p className="box-desc">Click to view all available actors</p>
        </Link>
        <Link to="/anchors" className="service-box s2">
          <div className="box-title">Anchors</div>
          <p className="box-desc">Click to explore top anchors</p>
        </Link>
        <Link to="/influencers" className="service-box s3">
          <div className="box-title">Influencers</div>
          <p className="box-desc">Click to connect with influencers</p>
        </Link>
        <Link to="/writers" className="service-box s4">
          <div className="box-title">writers</div>
          <p className="box-desc">Click to connect with writers</p>
        </Link>
        <Link to="/reelshoots" className="service-box s7">
          <div className="box-title">Reel-Shoot and Camera-Man</div>
          <p className="box-desc">Click to connect with Cameraman</p>
        </Link>
        <Link to="/mehandiartists" className="service-box s5">
          <div className="box-title">Mehandi Artists</div>
          <p className="box-desc">Mehandi artists for your events</p>
        </Link>
        <Link to="/makeupartists" className="service-box s6">
          <div className="box-title">Makeup Artists</div>
          <p className="box-desc">professional makeup artists</p>
        </Link>
      </div>
    </section>
  );
};

export default Servis;
