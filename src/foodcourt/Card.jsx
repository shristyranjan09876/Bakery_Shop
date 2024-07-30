import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.image} alt={props.title} className='card-image' />
      <div className='card-body'>
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <button className='butn'>Order Now</button>
      </div>
    </div>
  );
}

export default Card;
