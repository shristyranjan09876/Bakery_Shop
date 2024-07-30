import React from 'react';
import Card from './Card';
import './Menu.css';

const Menu = () => {
  return (
    <div className='menu-container'>
      <h1 className='services-heading'>Our services</h1>
      <div className='cards'>
        <Card title='cakes' text='Some quick example text to build on the card title and make up the bulk of the cards ' image='./src/foodcourt/imag/cake.webp' />
        <Card title='Cupcakes' text='Some quick example text to build on the card title and make up the bulk of the cards ' image='./src/foodcourt/imag/cupcake.jpg' />
        <Card title='Donuts' text='Some quick example text to build on the card title and make up the bulk of the cards ' image='./src/foodcourt/imag/donuts.jpg' />
        <Card title='Burgur and French Fries' text='Some quick example text to build on the card title and make up the bulk of the cards ' image='./src/foodcourt/imag/junk.jpg' />
        <Card title='Cold Bevarage' text='Some quick example text to build on the card title and make up the bulk of the cards ' image='./src/foodcourt/imag/drinks2.jpg' />
        <Card title='Pizza' text='Some quick example text to build on the card title and make up the bulk of the cards ' image='./src/foodcourt/imag/pizza.jpg' />
      </div>
    </div>
  );
}

export default Menu;

 {/* <Card title='Card 7' text='Some quick example text to build on the card title and make up the bulk of the cards content' image='https://via.placeholder.com/300' />
        <Card title='Card 8' text='Some quick example text to build on the card title and make up the bulk of the cards content' image='https://via.placeholder.com/300' /> */}