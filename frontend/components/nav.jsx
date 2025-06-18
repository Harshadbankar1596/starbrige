import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';  // ✅ सही import

const Nav = () => {
  return (
    <div className="nav">
      <div className="logosectio">
        <p id="logoname">StarBridge India</p>
      </div>

      <div className="homes">
        <Link to="/" id="homes">Home</Link>
        <Link to="/about" id="homes">About</Link>
        <Link to="/contact" id="homes">Contact</Link>
      </div>

      <div className="login">
        <button className="btn">Login</button>
      </div>

      <div className="menu">|||</div>
    </div>
  );
};

export default Nav;
