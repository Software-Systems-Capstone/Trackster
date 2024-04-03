// Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css'; // Make sure to create a corresponding CSS file


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <img src="/Logo.png" alt="Trackster Logo" className="navbar-logo" />
      
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="/signin" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="/signin" className="nav-link">Sign In</a>
        </li>
        {/* Add other nav items here */}
      </ul>
      
      <div className="hamburger" onClick={toggleDropdown}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
