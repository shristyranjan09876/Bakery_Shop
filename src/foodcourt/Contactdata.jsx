import React from 'react'


const Contactdata = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Form Submitted")
        props.onSubmit(); 
        };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" id='name' placeholder="Enter your name" value={props.form.name} onChange={props.onInputChange}/>
        <label>Email</label>
        <input type="email" name="email" id='email' placeholder="Enter your email" value={props.form.email} onChange={props.onInputChange} />
        <label>Message</label>
        <textarea type='textarea' name="message" id='mesage' placeholder="Enter your message" value={props.form.message} onChange={props.onInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contactdata
