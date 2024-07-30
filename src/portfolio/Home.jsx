import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import './Home.css';
import yourImage from './img/avatar-11.png';
import myImage from './img/Users.png'
import img from './img/clone.jpeg'
import About from './About';
import Skills from './Skills';
import Contact from './Contact';


const Home = () => {
  return (
    <>
      <div className='section'>
        <div className='homsection'>
          <h1>Welcome to my Portfolio</h1>
          <h1> I'm Shristy <span>Ranjan</span></h1>
          <p> a front-end developer specializing in React.js with a passion for creating intuitive and dynamic user experiences.</p>
          <div className='social'>
            <a className='icon' href="https://www.instagram.com/_a_blissful._.soul_/"><InstagramIcon/> </a>
            <a className='icon' href='https://github.com/shristyranjan09876'> <GitHubIcon /> </a>
            <a className='icon' href='https://www.linkedin.com/in/shristy-ranjan-35a884233/' > <LinkedInIcon /> </a>
            <a className='icon' href='https://drive.google.com/file/d/1mCSFe2AzJuPXVxn6zJ0gCpOpj6FcsPsB/view?usp=sharing' > <DescriptionIcon /> </a>

          </div>
  
        </div>
        <div className='homsection2'>
          <img src={yourImage} alt="Shristy Ranjan" className='profile-pic' />
        </div>
      </div>
    
    <h1 className='prhead'>Projects</h1>
    
      <div id="about" className='divsec'>
  <div className='aboutsec2'>
          <About imgsrc={img} title="This is an Amazon clone website" about="Tools: React.js, Node.js, MySQL"  link="https://github.com/shristyranjan09876/amazon-clone"/>
          <About imgsrc={myImage} title="This is a Flower shop website" about="Tools: HTML, CSS"  link="https://shristyranjan09876.github.io/Flower-shop/" />
          <About imgsrc={myImage} title="This is a Yummy-Tummy Restro website" about="Tools: HTML, CSS, Bootstrap" link="https://github.com/shristyranjan09876/yummy-tummy-restro" />
        </div>
      </div>
    
      <Skills />
      <Contact />
    </>
  );
}

export default Home;
