import React from "react";
import { Box, Link, Flex } from "@chakra-ui/core";

function Project({ project }) {
  const { name, imgUrl, link, repo, description, tech } = project;

  return (
    <div>
      <Box className="portfolio"  maxH="sm" rounded="lg" overflow="hidden">
            <Flex align="center" justify="center">
          <img size="250px"src={imgUrl} alt={name} />
          </Flex>
          {/* <Box 
            fontWeight="semibold"
            lineHeight="tight"
            className="deploy"
            alignContent="center"
          >
            <Link className="project_head" href={link}>
            </Link>
         
            </Box> */}
          <Flex align="center" justify="center">
           <h5>{tech}</h5> 
          </Flex>
          <Flex align="center" justify="center">
          <Box maxW="100%" className="center" textAlign="center" >
            <p className="description">
         {description}
         </p>
         </Box>
         </Flex>
          <Box className="center" textAlign="center" >
          <Flex align="center" justify="center" >
          <Link className="plain" href={link}>
            DEPLOYED
          </Link>
          <Link className="plain" href={repo}>
            GITHUB
          </Link>
          </Flex>
      </Box>
      </Box>
      <br />
    </div>
  );
}

export default Project;
