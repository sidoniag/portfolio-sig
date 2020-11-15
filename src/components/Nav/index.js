import React from "react";
import { Navbar } from "react-bootstrap";
import About from "../About";
import Portfolio from "../Portfolio";

import Resume from "../Resume";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  return (
    <nav className="flex-row">
    {/* <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      React Bootstrap
    </Navbar.Brand>
    <Nav.Link href={<About/>}>About</Nav.Link> */}
    {/* <Nav.Link href="#portfolio">Portfolio</Nav.Link>
    <Nav.Link href="#contact">Contact</Nav.Link>
    <Nav.Link href="#resume">Resume</Nav.Link>
    <Navbar.Brand href="#home"></Navbar.Brand> */}
  {/* </Navbar> */}
  


          <ul className="flex-row">
            {categories.map((category) => (
              <li key={category.name}>
                <span
                  onClick={() => setCurrentCategory(category)}
                  className={`mx-2 ${
                    currentCategory.name === category.name && "navActive"
                  }`}
                >
                  {category.name}
                </span>
              </li>
            ))}
          </ul>
        </nav>
 
  );
}

export default Nav;
