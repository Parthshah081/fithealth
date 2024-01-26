// HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Fix Health</h1>
        <p>Your Path to Better Health Starts Here</p>
        <button className="explore-btn">Explore Services</button>
      </div>
      <img
  src="https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg="
  alt="Hero"
  className="hero-image"
/>

    </section>
  );
};

export default HeroSection;
