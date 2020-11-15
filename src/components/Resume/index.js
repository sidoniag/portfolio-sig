import React from "react";
import { Row, Col } from "reactstrap";
import { Box, Image, Flex, Button } from "@chakra-ui/core";

function Resume() {
  return (
    <section id="Resume">
      <Col xs={12}>
        <Box
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          overflow="hidden"
          bg="tomato"
        ></Box>
        <Box alignSelf="center">
          <Box className="tech" padding="10px" maxW="md" textAlign="center">
            <h4>Front-End Technologies</h4>
          </Box>

          <Box className="center" textAlign="center">
            <p>HTML5 | JavaScript </p>
            <p>CSS | Sass</p>
            <p>React | Bootstrap</p>
            <p>Figma | XD</p>
          </Box>

          <Box className="center" padding="10px" maxW="md" textAlign="center">
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
        </Box>
      </Col>

      {/* <Button onClick="download">CV2020 PDF</Button> */}
    </section>
  );
}

export default Resume;
