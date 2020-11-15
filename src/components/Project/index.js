import React from "react";
import { Box, Link, Flex } from "@chakra-ui/core";

function Project({ project }) {
  const { name, imgUrl, link, repo, description } = project;

  return (
    <div>
      <Box className="portfolio"   maxH="sm" borderWidth="1px" rounded="lg" overflow="hidden">
        <Box>
          <Box 
            p={3}
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            className="deploy"
          >
            <Link className="light" href={link}>
            {name}
            </Link>
          </Box>
          <img size="320px"src={imgUrl} alt={name} />
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
      
      </Box>
      <br />
    </div>
  );
}

export default Project;
