import React from 'react';
// import {
//     Card, CardText, CardBody, CardLink,
//     CardTitle
//   } from 'reactstrap';
import { Box, Link, Image } from "@chakra-ui/core";
  
  function Project({ project }) {

    const { name, image, link, repo, description } = project;

    return (
      <div>
        <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
        <Box p="6">
          <Image src={require(`${image}`)} alt={name} />
          
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {name}
            </Box>
            <Box>{description}</Box>
            <Link className="plain" href={link}>Deployed</Link>
            <Link className="plain" href={repo}>GitHub</Link>
          </Box>
        </Box>
      </div>
    ); 
 }


export default Project;