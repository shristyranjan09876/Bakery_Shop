import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Rout;






































































// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import {useTranslation} from 'react-i18next'
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import Layout from './Layout'



// const Rout = () => {
//  const {t} = useTranslation()
//   return (
//     <>
//          <div>
         
//           <BrowserRouter>
//           <Layout />
//             <Routes>
//             <Route path='/' element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/contact" element={<Contact />} />
//             </Routes>
//           </BrowserRouter>
//          </div>
//     </>
//   )
// }

// export default Rout
