import React, { useState } from 'react';
import Project from '../Project';
import { Box } from "@chakra-ui/core";

  
  function Portfolio() {

    const [projects] = useState ([
      { 
        name: "SootheR",
        image: "../../assets/soother.png",
        description: "FIRST PROJECT",
        link: "https://devmadia.github.io/soother/",
        repo: "https://github.com/Devmadia/sootheR"
      },
      { 
        name: "CardSocial",
        image: "cardsocial.png",
        description: "FULL STACK",
        link: "https://cryptic-shelf-96558.herokuapp.com/",
        repo: "https://github.com/evkonradi/cardsocial"
      },
      { 
        name: "TeachMeTo",
        image: "teachmeto.png",
        description: "REACT APP",
        link: "https://floating-spire-39046.herokuapp.com/",
        repo: "https://github.com/evkonradi/teach-me-to"
      }
    ])

    return (
        <div>
             <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" bg="tomato">
      <br />
      </Box>
            <h1 data-testid="h1tag">Portfolio</h1>
          {projects.map((project, idx) => (
            <Project
            project={project}
            key={"project" + idx}
            />
          ))}
</div>
 )
 }


export default Portfolio;