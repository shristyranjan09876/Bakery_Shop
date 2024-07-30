import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='nav_section'>
    <div >
        <NavLink className='Portfolio' to="/">Portfolio</NavLink>
    </div>
      <ul className='ul-nav'>  
        <li><NavLink className='Nav' to="/">Home</NavLink></li>
        <li><NavLink className='Nav' to="/#About">About</NavLink></li>
        <li><NavLink className='Nav' to="/#Contact">Skills</NavLink></li>
      </ul>
    </div>
      <Outlet />
    </>
  )
}

export default Navbar
