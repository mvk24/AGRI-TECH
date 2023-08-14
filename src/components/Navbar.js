import { Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from './Auth'; 
import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [signupModalShow, setSignupModalShow] = useState(false);

  const handleLoginModalClose = () => setLoginModalShow(false);
  const handleSignupModalClose = () => setSignupModalShow(false);

  return (
    <BootstrapNavbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
      <BootstrapNavbar.Brand as={Link} to="/" className="brand-logo" onClick={(e) => {
            e.preventDefault();
            window.location.href='/#home';}}>Agri-Tech</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
      <BootstrapNavbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end text-center">
          {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
          <Nav.Link eventKey="1" as={Link} onClick={(e) => {
            e.preventDefault();
            window.location.href='/#home';
            }}>Home</Nav.Link>
          <Nav.Link eventKey="2" as={Link} onClick={(e) => {
            e.preventDefault();
            window.location.href='/#about';
            }}>About Us</Nav.Link>
            <Nav.Link eventKey="3" as={Link} onClick={(e) => {
            e.preventDefault();
            window.location.href='/#ser';
            }}>Services</Nav.Link>
          {/* <NavDropdown title="Services" id="collapsible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/crop-recommend">Crop Recommend</NavDropdown.Item> */}
            {/* <NavDropdown.Item as={Link} to="/fertilizer">Fertilizer</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/disease">Disease</NavDropdown.Item> */}
          {/* </NavDropdown> */}
          <NavDropdown title="User" id="collapsible-nav-dropdown">
            <NavDropdown.Item eventKey="4" onClick={() => setLoginModalShow(true)}>Login</NavDropdown.Item>
            <NavDropdown.Item eventKey="5" onClick={() => setSignupModalShow(true)}>Sign Up</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link eventKey="6" as={Link} to="/contact">Contact Us</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
      <Auth show={loginModalShow} handleClose={handleLoginModalClose} isSignUp={false} />
      <Auth show={signupModalShow} handleClose={handleSignupModalClose} isSignUp={true} />
    </BootstrapNavbar>
  );
};

export default Navbar;