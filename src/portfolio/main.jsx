import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import './Navbar.css'
import Portfoliomain from './Portfoliomain';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
          <Navbar />
          <Portfoliomain />
        </BrowserRouter>
    </React.StrictMode>
  );
