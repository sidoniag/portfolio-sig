import React from 'react';
// import Nav from '../Nav';

import { Box, Image } from "@chakra-ui/core";

function Header() {
    return (
        <section>
            
            <header>
     
                <Box className="jumbo">
                <Image src={require('../../assets/tree.JPG')} width="80%" alt="oaktree" />
                </Box>
            </header>
        </section>
    );
}

export default Header;