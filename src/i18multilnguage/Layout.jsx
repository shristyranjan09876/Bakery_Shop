import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

const Layout = () => {
  return (
    <div>
      
      <ul className="nav-links">
        <li>
          <NavLink className="navbar" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="navbar" to="/about">About</NavLink>
        </li>
        <li>
          <NavLink className="navbar" to="/contact">Contact</NavLink>
        </li>
        <li>
        <LanguageSwitcher />
        </li>
    
      </ul>
      <Outlet />
    </div>
  );
};

export default Layout;










































// import {Outlet, NavLink} from "react-router-dom";
// import LanguageSwitcher from "./LanguageSwitcher";

// import React from 'react'

// const Layout = () => {
//   return (
//     <>
//        <div>
//        <LanguageSwitcher />
       
//         <ul className="nav-links">
//        <li>
//             <NavLink className='navbar' to="/">Home</NavLink>
//           </li>
//           <li>
//             <NavLink  className='navbar' to="/About">About</NavLink>
//           </li>
//           <li>
//             <NavLink  className='navbar' to="/contact">Contact</NavLink>
//           </li>
       
//         </ul>

//       <Outlet />
//       </div>
//     </>
//   )
// }

// export default Layout
