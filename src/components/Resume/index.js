import React from "react";
import { Col } from "reactstrap";
import { Box, Flex } from "@chakra-ui/core";

function Resume() {
  return (
    <section id="resume">
      <Col xs={12}>
      <Box
      className="#Resume"
        borderWidth="1px"
        rounded="md"
        maxW="sm"
        overflow="hidden"
        
        padding="8px"
        alignSelf="center"
        textAlign="center"
      >
        <Box alignSelf="center">
          <Box className="tech" padding="8px" maxW="md" textAlign="center">
          <Flex textAlign="center" justify="center" bg="tomato">
            <h4 className="spread">RESUME</h4>
            </Flex>
            <br />
          <Flex textAlign="center" justify="center">
            <h4>Front-End Technologies</h4>
            </Flex>
          </Box>
          </Box>
          </Box>
          <Box className="center" padding="10px" maxW="md" textAlign="center">
            <p>CSS | Sass</p>
            <p>HTML5 | JavaScript </p>
            <p>React | Reactstrap</p>
            <p>Bootstrap | Handlebars.js</p>
            <p>Photoshop | Illustrator | InDesign </p>
            <p>Figma | XD </p>
          </Box>

          <Box
      className="#Contact"
        borderWidth="1px"
        rounded="md"
        maxW="sm"
        overflow="hidden"
        
        padding="8px"
        alignSelf="center"
        textAlign="center"
      >
        <Flex textAlign="center" justify="center">
            <h4>Back-End Technologies</h4>
            </Flex>
          </Box>
          <Box className="center" textAlign="center">
            <p>
              Server-Side APIs | REST | MERN
              <p>Node.js | Express.js | Moment.js</p>
              <p>MySQL2 | Sequelize | NoSQL</p>
              <p>MongoDB | Mongoose | JawsDB</p>
              <p>CLI | Heroku CLI | PWA</p>
              <p>GraphQL | Insomnia </p>
            </p>
          </Box>
  
       
      </Col>

      {/* <Button onClick="download">CV2020 PDF</Button> */}
    </section>
  );
}

export default Resume;
