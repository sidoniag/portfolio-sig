import React, { useState } from "react";
import { Box, Flex, Image } from "@chakra-ui/core";

import { validateEmail } from "../../utils/helpers";

function ContactForm() {

  return (
    <section id="contact">
  <Box className="center" padding="10px" maxW="md" textAlign="center">
  
  <h4>Contact Me</h4>
  <br />
        <Flex align="center" justify="center">
          <Image
            className="headshot"
            align-self="right"
            size="130px"
            objectFit="cover"
            src="https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/headshot.jpg"
            alt="headshot"
          ></Image>
        </Flex>
        
          <a className="light" href="emailto:seekersig@gmail.com" />
          <span role="img" aria-label="wave">
          {" "}
          say hello👋{" "}
        </span>
        
  
    </Box> 

     </section>
  )
}
export default ContactForm;
