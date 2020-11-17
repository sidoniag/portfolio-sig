import React from "react";
import { Col } from "reactstrap";
import { Box } from "@chakra-ui/core";

function Resume() {
  return (
    <section id="resume">
      <Col xs={12}>
      <Box
      className="#Contact"
        borderWidth="1px"
        rounded="md"
        maxW="sm"
        overflow="hidden"
        bg="tomato"
        padding="8px"
        alignSelf="center"
        textAlign="center"
      >
        <Box alignSelf="center">
          <Box className="tech" padding="10px" maxW="md" textAlign="center">
            <h4>Front-End Technologies</h4>
          </Box>
          </Box>
          </Box>
          <Box className="center" padding="10px" maxW="md" textAlign="center">
            <p>HTML5 | JavaScript </p>
            <p>CSS | Sass</p>
            <p>React | Bootstrap</p>
            <p>Figma | XD</p>
          </Box>

          <Box
      className="#Contact"
        borderWidth="1px"
        rounded="md"
        maxW="sm"
        overflow="hidden"
        bg="tomato"
        padding="8px"
        alignSelf="center"
        textAlign="center"
      >
            <h4>Back-End Technologies</h4>
          </Box>
          <Box className="center" textAlign="center">
            <p>
              APIs | REST
              <p>Node.js | Express</p>
              <p>MySQL | Sequelize</p>
              <p>MongoDB | Mongoose</p>
              <p>MERN</p>
            </p>
          </Box>
  
       
      </Col>

      {/* <Button onClick="download">CV2020 PDF</Button> */}
    </section>
  );
}

export default Resume;
