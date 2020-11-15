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
          <Box bg="transparent" border="3px" borderColor="tomato">
          <Link className="plain" href={link}>
            Deployed
          </Link>
          </Box>
          <Box border="1px" borderColor="tomato">
          <Link className="plain" href={repo}>
            GitHub
          </Link>
          </Box>
          
          </Box>
          </Flex>
        </Box>
      
      </Box>
    </div>
  );
}

export default Project;
