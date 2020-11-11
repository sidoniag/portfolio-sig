import React from "react";
import { Row, Col } from "reactstrap";
import { Box, Image, Flex, Button } from "@chakra-ui/core";

function Resume() {
  return (

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
        <h2>SARAH IDONIA GARRETT</h2>
        <h4>CV2020</h4>
        <Box>
          <h5>Front-End Technologies</h5>
          <p>HTML5</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>Bootstrap</p>
          <p>Adobe XD</p>

          <h5>Back-End Technologies</h5>
          <p>APIs</p>
          <p>Node.js</p>
          <p>Express</p>
          <p>MySQL | Sequelize</p>
          <p>MongoDB | Mongoose</p>
          <p>REST</p>
          <p>MERN</p>
        </Box>
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
        {/* <Button onClick="download">CV2020 PDF</Button> */}

        </Col>
        

  )
};

export default Resume;
