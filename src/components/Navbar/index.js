import React from "react";
import { Row } from "reactstrap";
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navbar = (props) => {

  return (


      <Nav className="navbar">
        <NavLink className="nav" href="#about">About</NavLink> 
        <NavLink className="nav" href="#portfolio">Portfolio</NavLink> 
        <NavLink className="nav" href="#resume">Resume</NavLink> 
        <NavLink className="nav" href="#contact">Contact</NavLink>
      </Nav>
   
  

  );
}

export default Navbar;
