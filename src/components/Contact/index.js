import React, { useState } from "react";
import { Box, Flex, Image } from "@chakra-ui/core";

function ContactForm() {
  return (
    <section id="contact">
      <Box className="center" padding="10px" maxW="md" textAlign="center">
        <Flex align="center" justify="center" bg="tomato">
          <h4>CONTACT ME</h4>
        </Flex>
        <br />
        <Image
          className="headshot"
          align-self="right"
          size="130px"
          objectFit="cover"
          src="https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/headshot.jpg"
          alt="headshot"
        ></Image>
        {/* <Flex align="center" justify="center">
          <a href="emailto:seekersig@gmail.com" />
          <span role="img" aria-label="wave">
            {" "}
            <a href="mailto:seekersig@gmail.com">say hello👋 </a>
          </span>
        </Flex> */}
      </Box>
    </section>
  );
}

export default ContactForm;
