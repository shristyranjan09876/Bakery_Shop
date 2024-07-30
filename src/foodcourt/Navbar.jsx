import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand-custom">
        <img
            src="./src/foodcourt/imag/logo.jpg" 
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Food Court Logo"
            style={{ marginRight: '10px' }} 
          />
        Bakery
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-custom">
          <span className="navbar-toggler-icon navbar-toggler-icon-custom"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="/Menu" className="nav-link-custom">Menu</Nav.Link>
            <Nav.Link href="/About" className="nav-link-custom">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}

export default BasicExample;
