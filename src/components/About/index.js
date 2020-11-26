import React from "react";
import { Container, Jumbotron } from "reactstrap";
import { Box, Image, Flex} from "@chakra-ui/core";


function About() {
  return (
    <section id="about">
      
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
        <Flex textAlign="center">
        <p className="quote"
        size="xsm" text-wrap="wrap-around" >
          An artist, over-thinker, and 
Front-End Developer excited to create useful applications and memorable experiences. Integrated, user-centric design approach preferably as part of a team.
        </p>
        </Flex>
        <Flex align="center" justify="center">
          <Image
            className="headshot"
            size="130px"
            objectFit="cover"
            src="https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/headshot.jpg"
            alt="headshot"
          ></Image>
        </Flex>
        </Box>
        </Flex>
      
    </section>
  );
}

export default About;
