import React from 'react';
import './About.css';

const About = (props) => {
  return (
    <>
 
      <div className='aboutsec'>
        <div className='aboutsec2'>
          <div className='cards'>
            <div className='card'>
              <img alt='img' className='card_img' src={props.imgsrc} />
              <div className='card_content'>
                <h2 className='card_title'> {props.title} </h2>
                <p className='card_text'> {props.about} </p>
                <a href={props.link} className='buttton'>View More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
