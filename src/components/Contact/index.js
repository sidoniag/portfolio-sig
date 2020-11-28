import React from "react";
import { Box, Flex, Image } from "@chakra-ui/core";

function ContactForm() {
  return (
    <section id="contact">
      <Box className="center" maxW="md" textAlign="center">
        <Flex align="center" justify="center" bg="tomato">
          <h4>CONTACT ME</h4>
        </Flex>
        <br />

        <Flex align="center" justify="center">
          <a href="https://spark.adobe.com/page/wGm9zXRSbZMYL/">
            art portfolio
          </a>
          <a href="mailto:seekersig@gmail.com">email</a>
          <a href="https://github.com/sidoniag">github</a>
          <a href="https://www.linkedin.com/in/sarahidoniagarrett/">linkedin</a>
        </Flex>
      </Box>
    </section>
  );
}

export default ContactForm;
