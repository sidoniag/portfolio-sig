import React, { useState } from "react";
import Project from "../Project";
import { Box, Flex } from "@chakra-ui/core";
import { Carousel, CarouselItem, CarouselCaption, CarouselControl, CarouselIndicators, Row } from "reactstrap";

function Portfolio() {
  const [projects] = useState([
    {
      name: "TeachMeTo",
      imgUrl:
        "https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/projects/TeachMeTo.jpg",
      description:
        "TeachMeTo is an application built with React. It is a place where users can find and contribute knowledge. Users can donate to contributors whose resources they admire.",
      link: "https://floating-spire-39046.herokuapp.com/",
      repo: "https://github.com/evkonradi/teach-me-to",
    },
    {
      name: "CardSocial",
      imgUrl:
        "https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/projects/CardSocial.jpg",
      description:
        "Card Social is an application for users that have multiple hussles and want to connect. Users can create unique cards to share with others via QRcode.",
      link: "https://cryptic-shelf-96558.herokuapp.com/",
      repo: "https://github.com/evkonradi/cardsocial",
    },
    {
      name: "TrackMyBudget",
      imgUrl:
        "https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/projects/TrackMyBudget.png",
      description:
        "Track My Budget is an application built with React that helps the user track their budget simply.",
      link: "https://limitless-sierra-65574.herokuapp.com/",
      repo: "https://github.com/sidoniag/trackmybudget",
    },
    {
      name: "SootheR",
      imgUrl:
        "https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/projects/SootheR.png",
      description:
        "SootheR is an application where the user can discover news articles. Encouraging quotes help to bear the headlines.",
      link: "https://devmadia.github.io/soother/",
      repo: "https://github.com/Devmadia/sootheR",
    },
    // {
    //   name: "NoteTaker",
    //   imgUrl:
    //     "https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/projects/NoteTaker.png",
    //   description:
    //     "Note Taker is an application where users can take and save notes.",
    //   link: "https://devmadia.github.io/note/",
    //   repo: "https://github.com/sidoniag/note-taker",
    // },
  ]);



  return (
    <div>
      <Box
      className="#Portfolio"
      height=".3rem"
        borderWidth=".3rem"
        rounded="md"
        overflow="hidden"
        bg="tomato"
      >
        
      </Box>
 
      <h1>Portfolio</h1>
      <Flex align="center" justify="center">
      <p class="center">
        Below are a handful of recent projects. My primary role included:
        Front-end design, asset creation, and communications . 
      </p>
      </Flex>
    
    
      {/* <Carousel>
        {
        projects.map((project) => (
          
          <Project
          project={project}
          key={project}
          />
        
        ))
        }
        </Carousel> */}
        
             <Box alignItems="baseline"
        maxW="sm"
        borderWidth="1px"
        rounded="md"
        overflow="hidden"
        padding="30px"
      >
  
     
      {projects.map((project, idx) => (
        <Project project={project} key={"project" + idx} />
      ))}

<br />
        
        </Box>
     </div>
    
    
  );
}

export default Portfolio;
