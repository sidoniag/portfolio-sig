import React from "react";
import { Col } from "reactstrap";
import { Box } from "@chakra-ui/core";

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
        >
        </Box>
        <br />
        <div className="center">
        <Box 
        display="inline-block">
        <Box className="tech"
        backgroundColor="grey"
        padding="10px"
        maxW="sm"
        textAlign="center">
          <h4>Front-End Technologies</h4>
          <p>HTML5 | CSS</p><br/>
          <p>JavaScript</p>
          <p>React</p>
          <p>Bootstrap</p>
</Box>
<Box className="tech"
  backgroundColor="tomato"
  padding="10px"
  maxW="sm"
  textAlign="center">
          <h4>Back-End Technologies</h4>
          <p>APIs</p>
          <p>Node.js</p>
          <p>Express</p>
          <p>MySQL | Sequelize</p>
          <p>MongoDB | Mongoose</p>
          <p>REST</p>
          <p>MERN</p>
        </Box>
        </Box>
        </div>

        {/* <Button onClick="download">CV2020 PDF</Button> */}

        </Col>
        
        </section>
  )
};

export default Resume;
