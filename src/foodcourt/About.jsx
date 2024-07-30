import React from 'react'
import './About.css';

const About = () => {
  return (
    <>
       <div className='aboutsection'>
      <div className='sec'>
        <h1>About Us</h1> <hr />
        <p>Welcome to our bakery! We offer freshly baked goods made from the finest ingredients.
         Our mission is to provide delicious treats and a warm atmosphere for all our customers.</p>
        <p>Our mission is to provide innovative solutions that make a positive impact on
        people's lives. We believe in the power of technology to drive change and improve
        the world. We're committed to delivering high-quality products and services that
        meet the needs of our customers.</p>
      </div>
      <div className="about-image">
        <img src="./src/foodcourt/imag/cake2.jpg" alt="About Us Image"/>
      </div>
      </div>
    </>
  )
}

export default About