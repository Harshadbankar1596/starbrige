import React, { useState } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="nav">
        <div className="logosectio">
          <p id="logoname">StarBridge India</p>
        </div>
        
        <div className="right">
          <div className="login">
            <button className="btn">Login</button>
          </div>
          <div className="menu" onClick={() => setOpenMenu(true)}>☰</div>
        </div>

      </div>

      {/* Overlay when menu open */}
      {openMenu && <div className="overlay" onClick={() => setOpenMenu(false)}></div>}

      {/* Slide-in SideNav */}
      <div className={`side-nav ${openMenu ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setOpenMenu(false)}>×</button>
        <Link to="/" onClick={() => setOpenMenu(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpenMenu(false)}>About</Link>
        <Link to="/contact" onClick={() => setOpenMenu(false)}>Contact</Link>
        <Link to="/actors" onClick={() => setOpenMenu(false)}>Actors</Link>
        <Link to="/anchors" onClick={() => setOpenMenu(false)}>Anchors</Link>
        <Link to="/influencers" onClick={() => setOpenMenu(false)}>Influencers</Link>
      </div>
    </>
  );
};

export default Nav;
