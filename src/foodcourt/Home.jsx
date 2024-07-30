import React from 'react'
import './Home.css'
import Crousal from './Crousal'
import About from './About'
import Menu from './Menu'
import Whyus from './Whyus'
import Gallery from './Gallery'
import Contactus from './Contactus'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='homecomp'>
<Crousal />
<About />
<Menu />
<h1 >WHY US?</h1> <hr />
<div className='whyusec'>
<Whyus img='./src/foodcourt/imag/download.jpeg'  title='Delicious food' />
<Whyus  img='./src/foodcourt/imag/images.png' title='Best Services'/>
<Whyus img='./src/foodcourt/imag/img.png' title='Hospitality' />
</div>
<Gallery />
<Contactus />
<Footer />
</div>
  
  )
}

export default Home
