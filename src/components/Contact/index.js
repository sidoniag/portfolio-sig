import React from "react";
import { Box, Flex } from "@chakra-ui/core";

function ContactForm() {
  return (
    <section id="contact">
      <Box className="center" maxW="md" textAlign="center">
        <Flex align="center" justify="center" bg="tomato">
          <h4>CONTACT ME</h4>
        </Flex>
        <br />
        {/* <Image
          className="headshot"
          align-self="right"
          size="130px"
          objectFit="cover"
          src="https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/headshot.jpg"
          alt="headshot"
        ></Image> */}
        {/* <Flex align="center" justify="center">
          <a href="emailto:seekersig@gmail.com" />
          <span role="img" aria-label="wave">
            {" "}
            <a href="mailto:seekersig@gmail.com">say hello👋 </a>
          </span>
        </Flex> */}
             <Flex align="center" justify="center">
      
      {/* <a href="https://github.com/sidoniag" target="_blank" rel="noopener noreference"><img src={require(`../../assets/github_logo.png`)} alt="github" className="icon" /></a>
      <a href="https://www.linkedin.com/in/sarahidoniagarrett/" target="_blank" rel="noopener noreference"><img src={require(`../../assets/linkedin_logo.png`)} alt="linkedin" className="icon" /></a>
      <a href="mailto:seekersig@gmail.com" target="_blank" rel="noopener noreference"><img src={require(`../../assets/email_icon.jpeg`)} alt="email" className="icon" /></a> */}

      <a href="https://github.com/sidoniag">github</a>
      <a href="https://www.linkedin.com/in/sarahidoniagarrett/">linkedin</a>
      <a href="mailto:seekersig@gmail.com">email</a>
  
    </Flex>
      </Box>
    </section>
  );
}

export default ContactForm;
