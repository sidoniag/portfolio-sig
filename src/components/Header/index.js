import React from 'react';
import Nav from '../Nav';
// import { Image } from "react-bootstrap";
// import { Box } from "@chakra-ui/core";

function Header() {
    return (
        <section>
            
            <header>
            <Nav></Nav>
                {/* <Box className="jumbo"> */}
                <img src={require('../../assets/tree.JPG')} width="80%" alt="oaktree" />
                {/* </Box> */}
            </header>
        </section>
    );
}

export default Header;