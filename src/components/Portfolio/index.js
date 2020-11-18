import React, { useState } from "react";
import Project from "../Project";
import { Box, Flex } from "@chakra-ui/core";

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
    },
    {
      name: "Card Social",
      imgUrl:
        "https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/projects/CardSocial.jpg",
      description:
        "Card Social is an application for users that have multiple hussles and want to connect. Users can create unique cards to share with others via Code + QRcode.",
      link: "https://cryptic-shelf-96558.herokuapp.com/",
      repo: "https://github.com/evkonradi/cardsocial",
    },
    {
      name: "Track My Budget",
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
        "SootheR is an application where the user can discover news articles via NYTimes API. Encouraging quotes make it easier to bear the painful headlines.",
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
    <section id="portfolio">
      <div>
      <Flex textAlign="center" justify="center">
        <h4>Portfolio</h4>
        </Flex>
        <Flex textAlign="center" justify="center">
          <p class="center">
            Below are a handful of recent projects.
            <br /> My primary role included:
            <br />
            Front-end design, asset creation, and communications .
          </p>
        </Flex>

        <Box
          maxW="sm"
          borderWidth="1px"
          rounded="md"
          overflow="hidden"
          padding="20px"
        >
          {projects.map((project, idx) => (
            <Project project={project} key={"project" + idx} />
          ))}

          <br />
        </Box>
      </div>
    </section>
  );
}

export default Portfolio;
