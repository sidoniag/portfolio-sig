import React from "react";
import { Box, Flex, Image } from "@chakra-ui/core";
import { IconButton, EmailIcon } from "@chakra-ui/react";

function ContactForm() {
  return (
    <section id="contact">
      <Box className="center" padding="10px" maxW="md" textAlign="center">
        <Flex align="center" justify="center" bg="tomato">
          <h4>CONTACT ME</h4>
        </Flex>

        <Box bg="transparent" height="20px" />
        <Flex align="center" justify="center">
          <a href="mailto:seekersig@gmail.com">email</a>
          <a href="https://github.com/sidoniag">github</a>
          <a
            className="linkedIn"
            href="https://www.linkedin.com/in/sarahidoniagarrett/"
          >
            <Image src="https://img.icons8.com/ios/50/000000/linkedin.png" />
          </a>

          
        </Flex>
      </Box>
    </section>
  );
}

export default ContactForm;
