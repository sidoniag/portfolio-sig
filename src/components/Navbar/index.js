import React from "react";
import { Nav, NavLink } from 'reactstrap';
import { Flex } from '@chakra-ui/core';

const Navbar = (props) => {

  return (

<div>

      <Nav className="navbar">
        <Flex textAlign="center" justify="center">
        <NavLink className="nav" href="#about">ABOUT</NavLink> 
        <NavLink className="nav" href="#portfolio">PORTFOLIO</NavLink> 
        <NavLink className="nav" href="#resume">RESUME</NavLink> 
        <NavLink className="nav" href="#contact">CONTACT</NavLink>
        </Flex>
      </Nav>

      </div>

  );
}

export default Navbar;
