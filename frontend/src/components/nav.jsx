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
        <Link to="/actors" onClick={() => setOpenMenu(false)}>Actors</Link>
        <Link to="/anchors" onClick={() => setOpenMenu(false)}>Anchors</Link>
        <Link to="/influencers" onClick={() => setOpenMenu(false)}>Influencers</Link>
        <Link to="/writers" onClick={() => setOpenMenu(false)}>writers</Link>
        <Link to="/reelshoots" onClick={() => setOpenMenu(false)}>reelshoots</Link>
        <Link to="/mehandiartists" onClick={() => setOpenMenu(false)}>mehandiartists</Link>
        <Link to="/makeupartists" onClick={() => setOpenMenu(false)}>makeupartists</Link>
      </div>
    </>
  );
};

export default Nav;
