import React, { useState } from 'react'
import Contactdata from './Contactdata';
import './Contact.css';
import img from './imag/contac.jpg'

const Contact = () => {
  const [form, setform] = useState({
    name: '',
    email: '',
    message: ''
  }) 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  }
  const onSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted");
    console.log(form);
  };
  return (
    <>
        <h1 className='headsec'>Fell Free to contact </h1>
    <div className='sectio' >
      <Contactdata form={form} onInputChange={handleInputChange} onSubmit={onSubmit}/>
      <img className='img-head' src={img} alt="picture" />
      </div>
      </>
  )
}

export default Contact
