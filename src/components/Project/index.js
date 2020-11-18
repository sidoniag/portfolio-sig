import React from "react";
import { Box, Link, Flex } from "@chakra-ui/core";

function Project({ project }) {
  const { name, imgUrl, link, repo, description } = project;

  return (
    <div>
      <Box className="portfolio"  maxH="sm" rounded="lg" overflow="hidden">
      <Flex align="center" justify="center">
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
            </Flex>
            <Flex align="center" justify="center">
          <img size="250px"src={imgUrl} alt={name} />
          </Flex>
          <Flex align="center" justify="center">
          <Box maxW="80%" className="center" textAlign="center" >
         {description}
         </Box>
         </Flex>
          <Box className="center" textAlign="center" >
          <Flex align="center" justify="center" >
          <Link className="plain" href={link}>
            Deployed
          </Link>
          <Link className="plain" href={repo}>
            GitHub
          </Link>
          </Flex>
      </Box>
      </Box>
      <br />
    </div>
  );
}

export default Project;
