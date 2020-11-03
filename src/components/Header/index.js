import React from 'react';
import { Image } from "react-bootstrap";
import { Box } from "@chakra-ui/core";

function Header() {
    return (
        <section>
            <div>
                <Box className="jumbo">
                {/* <Image src={require('../../assets/tree.JPG')} width="60%" /> */}
                </Box>
            </div>
        </section>
    );
    
}

export default Header;