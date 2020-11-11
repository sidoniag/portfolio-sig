import React from "react";
import { Box, Link } from "@chakra-ui/core";

function Project({ project }) {
  const { name, imgUrl, link, repo, description } = project;

  return (
    <div>
      <Box p="6" maxW="sm" maxH="sm" borderWidth="1px" rounded="lg" overflow="hidden">
        <Box>
          <Box
            p={4}
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {name}
          </Box>
          <img size="320px"src={imgUrl} alt={name} />

          <Box maxW="xsm" fontSize="sm">{description}</Box>
          <Link className="plain" href={link}>
            Deployed
          </Link>
          <Link className="plain" href={repo}>
            GitHub
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default Project;
