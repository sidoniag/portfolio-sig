import React from "react";
import { Container, Jumbotron } from "reactstrap";
import { Box, Image, Flex } from "@chakra-ui/core";

function About() {
  return (
    <section id="about">
      <Container className="about">
        <Flex align="center" justify="center" padding="10px">
          <h4 className="title">
            Hello, my name is <br />
            Sarah Idonia Garrett.
          </h4>
        </Flex>
        <Box bg="transparent" w="100%" p={2} color="white"></Box>
        <Box className="aboutme" bg="transparent" w="100%"  color="white">
        <Flex align="left" justify="left" paddingLeft="60px">
              <Image
                className="headshot"
                size="160px"
                objectFit="cover"
                src="https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/headshot.jpg"
                alt="headshot"
              ></Image>
              </Flex>
   <Flex align="right" justify="right" paddingLeft="100px" paddingRight="25px">
              <p className="quote" size="sm" text-wrap="wrap-around" >
                An artist, over-thinker, and Front-End Developer excited to
                create user-centric applications and memorable experiences.
                Passionate about ideation and process, learning new
                technologies, and contributing a solution-oriented mindset to a
                team.
              </p>
            </Flex>
            </Box>
            <Box
              border="1px"
              bg="transparent"
              w="60%"
              height="30px"
              p={1}
              color="white"
            ></Box>
         
     
      </Container>
    </section>
  );
}

export default About;
