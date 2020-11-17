import React from "react";
import { Row } from "reactstrap";
import { Nav, NavItem, NavLink } from 'reactstrap';
import Contact from "../../components/Contact";

const Navbar = (props) => {

  return (

      <Nav>
        <NavLink className="nav" href="#about">About</NavLink> 
        <NavLink className="nav" href="#portfolio">Portfolio</NavLink> 
        <NavLink className="nav" href="#resume">Resume</NavLink> 
        <NavLink className="nav" href="#contact">Contact</NavLink>
      </Nav>
  

  );
}

// function Nav(props) {
//   const { categories = [], setCurrentCategory, currentCategory } = props;
     
        // <nav className="flex-row">
        //   <ul className="flex-row">
        //     {categories.map((category) => (
        //       <li key={category.name}>
        //         <span
        //           onClick={() => setCurrentCategory(category)}
        //           className={`mx-2 ${
        //             currentCategory.name === category.name && "navActive"
        //           }`}
        //         >
        //           {category.name}
        //         </span>
        //       </li>
        //     ))}
        //   </ul>
        // </nav>
 
//   );
// }

export default Navbar;
