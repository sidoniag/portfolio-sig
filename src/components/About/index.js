import React from 'react';
// import Nav from '../Nav';
import { Container } from 'reactstrap';
import { Box } from "@chakra-ui/core";


function About() {
    return(
        <section>
            <Box bg="tomato" w="100%" p={3} color="white">
            </Box>
            <Container className="main">
            <h2>Hello, nice to meet you.<br /> My name is Sarah Idonia Garrett.</h2>

      <br />
      <p>I am an artist, fullstack over-thinker and moving into development.</p>     
       <p><i>I'm the Doctor. Well, they call me the Doctor. I don't know why. I call me the Doctor too.
        I still don't know why. *Insistently* Bow ties are cool! Come on Amy, I'm a normal bloke,
        tell me what normal blokes do!</i>
      </p >
      </Container>
        </section>
    );
}

export default About;