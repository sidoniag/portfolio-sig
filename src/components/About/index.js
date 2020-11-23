import React from "react";
import { Container } from "reactstrap";
import { Box, Image, Flex} from "@chakra-ui/core";

function About() {
  return (
    <section id="about">
      {/* <Box
        bg="transparent"
        w="100%"
        p={1}
        color="white"
        className="#About"
      ></Box> */}
      {/* <h2 className="grow">always grow.</h2>
      <br />
      <Image
        className="tree"
        size="280px"
        objectFit="cover"
        src="https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/tree.jpg"
        alt="tree"
      ></Image>
      <br /> */}
      
        <Flex align="center" justify="center">
        <h4 className="title">
          Hello, 
           my name is Sarah Idonia Garrett.
        </h4>
        </Flex>
        <Box bg="transparent" w="100%" p={1} color="white">
        
        </Box>
        <Flex align="center" justify="center">
        <Box border="1px" bg="transparent" w="60%" p={1} color="white">
       
        <Flex align="center" justify="center">
          <Image
            className="headshot"
            size="130px"
            objectFit="cover"
            src="https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/headshot.jpg"
            alt="headshot"
          ></Image>
        </Flex>
        <Flex textAlign="center">
        <p className="quote"
        size="xsm" text-wrap="wrap-around" >
          An artist, over-thinker, and 
Front-End Developer excited to create useful applications and memorable experiences. Integrated, user-centric design approach preferably as part of a team.

        </p>
        </Flex>
        </Box>
        </Flex>
      
    </section>
  );
}

export default About;
