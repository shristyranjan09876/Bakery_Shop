import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section about'>
          <h2>About Us</h2>
          <p>Welcome to our bakery! We offer freshly baked goods made from the finest ingredients. Our mission is to provide delicious treats and a warm atmosphere for all our customers.</p>
        </div>
        <div className='footer-section links'>
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className='footer-section contact'>
          <h2>Contact Us</h2>
          <p>Email: <a href="mailto:info@bakeryshop.com">info@bakeryshop.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 234-567-890</a></p>
          <p>Address: 123 Bakery Lane, Sweet City, SC 12345</p>
        </div>
        <div className='footer-section social'>
          <h2>Follow Us</h2>
          <div className='social-icons'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">Twitter</a>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2024 Bakery Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
