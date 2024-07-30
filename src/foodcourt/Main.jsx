import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rout from './Route.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <BrowserRouter>
        <Navbar />
        <Rout/>
    </BrowserRouter>
    </React.StrictMode>
  );