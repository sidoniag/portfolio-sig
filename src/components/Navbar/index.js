import React from "react";
import { Row } from "reactstrap";
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Flex } from '@chakra-ui/core';

const Navbar = (props) => {

  return (


      <Nav className="navbar">
         <Flex textAlign="center" justify="center">
        <NavLink className="nav" href="#about">About</NavLink> 
        <NavLink className="nav" href="#portfolio">Portfolio</NavLink> 
        <NavLink className="nav" href="#resume">Resume</NavLink> 
        <NavLink className="nav" href="#contact">Contact</NavLink>
        </Flex>
      </Nav>
   
  

  );
}

export default Navbar;
