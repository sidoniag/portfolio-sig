import React, { useState } from "react";
import Project from "../Project";
import { Box } from "@chakra-ui/core";

function Portfolio() {
  const [projects] = useState([
    {
      name: "TeachMeTo",
      imgUrl:
        "https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/projects/TeachMeTo.png",
      description:
        "TeachMeTo is an application built with React. It is a place where users can find and contribute knowledge. Users can donate to contributors whose resources they admire.",
      link: "https://floating-spire-39046.herokuapp.com/",
      repo: "https://github.com/evkonradi/teach-me-to",
    },
    {
      name: "CardSocial",
      imgUrl:
        "https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/projects/CardSocial.png",
      description:
        "Card Social is an application for users that may have multiple hussles and want to connect. Create a unique card to share with others via QRcode.",
      link: "https://cryptic-shelf-96558.herokuapp.com/",
      repo: "https://github.com/evkonradi/cardsocial",
    },
    {
      name: "SootheR",
      imgUrl:
        "https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/projects/Soother.png",
      description:
        "Bathed in soothing colors, SootheR is an application where the user can search and read news articles while getting some encouraging words across the top of their screens.",
      link: "https://devmadia.github.io/soother/",
      repo: "https://github.com/Devmadia/sootheR",
    },
    {
      name: "TrackMyBudget",
      imgUrl:
        "https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/projects/TrackMyBudget.png",
      description:
        "TeachMeTo is an application built with React. It is a place where users can find and contribute knowledge. Users can donate to contributors whose resources they admire.",
      link: "https://limitless-sierra-65574.herokuapp.com/",
      repo: "https://github.com/sidoniag/trackmybudget",
    },
  ]);

  return (
    <div>
      <Box
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        bg="tomato"
      >
        <br />
      </Box>
      <br />
      <h1 data-testid="h1tag">Portfolio</h1>
      <p class="center">
        Below are a few projects from the past six months. My primary role was
        front-end design, asset creation, and communication refinement.
      </p>
      {projects.map((project, idx) => (
        <Project project={project} key={"project" + idx} />
      ))}
    </div>
  );
}

export default Portfolio;
