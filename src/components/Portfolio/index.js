import React, { useState } from "react";
import Project from "../Project";
import { Box, Flex } from "@chakra-ui/core";
import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react"

function Portfolio() {
  const [projects] = useState([
    {
      name: "Teach Me To",
      imgUrl:
        "https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/projects/TeachMeTo.jpg",
      description:
        "TeachMeTo is built with React where users can find and contribute knowledge. Users can donate to contributors whose resources they admire.",
      link: "https://floating-spire-39046.herokuapp.com/",
      repo: "https://github.com/evkonradi/teach-me-to",
      tech: "REACT | EXPRESS.JS | MONGODB | GRAPHQL | MONGOOSE ",
    },
    {
      name: "Card Social",
      imgUrl:
        "https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/projects/CardSocial.jpg",
      description:
        "Card Social is an application for users that have multiple hussles and want to connect. Users can create unique cards to share with others via Code + QRcode.",
      link: "https://cryptic-shelf-96558.herokuapp.com/",
      repo: "https://github.com/evkonradi/cardsocial",
      tech: "EXPRESS.JS | NODE.JS | MYSQL2 | SASS | JQUERY "
    }, 
    {
      name: "Track My Budget",
      imgUrl:
        "https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/projects/TrackMyBudget.png",
      description:
        "Track My Budget is an application built with React that helps the user track their budget simply.",
      link: "https://limitless-sierra-65574.herokuapp.com/",
      repo: "https://github.com/sidoniag/trackmybudget",
      tech: "NODE.JS | EXPRESS.JS | JSON | MONGODB ATLAS | SERVICE WORKER"
    },
    {
      name: "SootheR",
      imgUrl:
        "https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/projects/SootheR.png",
      description:
        "SootheR is an application where the user can discover news articles via NYTimes API. Encouraging quotes make it easier to bear the painful headlines.",
      link: "https://devmadia.github.io/soother/",
      repo: "https://github.com/Devmadia/sootheR",
      tech: "HTML | CSS | FOUNDATION | JAVASCRIP | JQUERY "
    },
    {
    name: "Regex Hex Explained",
    imgUrl:
      "https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/projects/Regex.png",
    description:
      "This Gist is meant as a discovery to better understand regular expressions (regex) through the process of explanation.",
    link: "https://gist.github.com/sidoniag/c7f8aaa73b62e100ba0d5853ee7a9ab4",
    repo: "https://gist.github.com/sidoniag",
    tech: "REGEX | GIST "
    }
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
    <section id="portfolio">
      <div>
      <Flex textAlign="center" justify="center" bg="tomato">
        <h4>PORTFOLIO</h4>
        </Flex>
        <Flex textAlign="center" justify="center">
          <p >
            Below are a handful of recent projects.
            <br /> 
            <br />
            Front-End design and development, asset creation, and communications were my primary contributions.
          </p>
        </Flex>

        <Flex justify="center">
         
      <Box xs="6">
          {projects.map((project, idx) => (
            <Project project={project} key={"project" + idx} />
          ))}
</Box>

        </Flex>


      </div>
    </section>
  );
}

export default Portfolio;
