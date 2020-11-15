import React from "react";
import { Container } from "reactstrap";
import { Box, Image, Flex} from "@chakra-ui/core";

function About() {
  return (
    <section>
      <Box
        bg="transparent"
        w="100%"
        p={1}
        color="white"
        className="#About"
      ></Box>
      <h2 className="grow">always grow.</h2>
      <Image
        className="tree"
        size="200px"
        objectFit="cover"
        src="https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/tree.jpg"
        alt="tree"
      ></Image>
      <br />
      <Container className="main">
        <br />
        <h4 className="title">
          Hello, nice to meet you.
          <br /> My name is Sarah Idonia Garrett.
        </h4>
        <Box bg="transparent" w="100%" p={1} color="white">
        <p>I am an artist, over-thinker, and always in development.</p>
        </Box>
        <Flex align="center" justify="center">
        <Box border="1px" bg="transparent" w="60%" p={1} color="white">
       
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
        <p className="quote"
        size="xsm" text-wrap="wrap-around">
          I'm the Doctor. Well, they call me the Doctor. I don't know why. I
          call me the Doctor too. I still don't know why. 
        *Insistently* Bow ties
          are cool! Come on Amy, I'm a normal bloke, tell me what normal blokes
          do!
        </p>
        </Box>
        </Flex>
      </Container>
    </section>
  );
}

export default About;
