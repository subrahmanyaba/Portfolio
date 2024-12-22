// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">SUBRAHMANYA B A</Link>
      </div>
      <div className="navbar-content">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/certifications">Certifications</Link></li>
        </ul>
      </div>
      <ul className="navbar-socials">
        <li><a href="https://www.linkedin.com/in/subrahmanya-b-a-b96090228/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://replit.com/@subrahmanyaba02" target="_blank" rel="noopener noreferrer">Replit</a></li>
        <li><a href="https://github.com/subrahmanyaba" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://x.com/pedroCoder02" target="_blank" rel="noopener noreferrer">Twitter</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
