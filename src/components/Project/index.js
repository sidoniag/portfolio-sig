import React from "react";
import { Box, Link, Flex } from "@chakra-ui/core";

function Project({ project }) {
  const { name, imgUrl, link, repo, description } = project;

  return (
    <div>
      <Box className="portfolio" maxH="smd" rounded="lg" overflow="hidden">
          <Box 
            p={3}
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            className="deploy"
            alignContent="center"
          >
            <Link className="project_head" href={link}>
            
            </Link>
            {name}
            </Box>
          
          <img size="280px"src={imgUrl} alt={name} />
          <Flex align="center" justify="center">
          <Box maxW="xsm" fontSize="sm">{description}
         
          <Box className="center" textAlign="center" >
            <br />
          <Link className="plain" href={link}>
            Deployed
          </Link>
       
          <Link className="plain" href={repo}>
            GitHub
          </Link>

          </Box>

          </Box>
          </Flex>
      
      </Box>
      <br />
    </div>
  );
}

export default Project;
