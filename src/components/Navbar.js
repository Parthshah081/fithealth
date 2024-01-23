// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Fix Health</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <button className="book-now-btn">Book Now</button>
    </nav>
  );
};

export default Navbar;
