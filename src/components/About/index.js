import React from "react";
// import Nav from '../Nav';
import { Container } from "reactstrap";
import { Box, Image } from "@chakra-ui/core";

function About() {
  return (
    <section>
      <Box bg="tomato" w="100%" p={3} color="white"></Box>
      <br />
      <h2>always grow.</h2>
      <Image
        className="tree"
        size="300px"
        objectFit="cover"
        src="https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/tree.jpg"
        alt="tree"
      ></Image>
      <Container className="main">
          
        <h4>
          Hello, nice to meet you.
          <br /> My name is Sarah Idonia Garrett.
        </h4>
        <br />

        <p>I am an artist, over-thinker, and always in development.</p>
        <p>
          <i>
            I'm the Doctor. Well, they call me the Doctor. I don't know why. I
            call me the Doctor too. I still don't know why. *Insistently* Bow
            ties are cool! Come on Amy, I'm a normal bloke, tell me what normal
            blokes do!
          </i>
        </p>
      </Container>
    </section>
  );
}

export default About;
