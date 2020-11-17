import React, { useState } from "react";
import { Box, Flex, Image } from "@chakra-ui/core";

import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <section>
  <Box className="center" padding="10px" maxW="md" textAlign="center">
  <h4>Contact Me</h4>
        <Flex align="center" justify="center">
          <Image
            className="headshot"
            align-self="right"
            size="130px"
            objectFit="cover"
            src="https://raw.githubusercontent.com/sidoniag/portfolio-sig/master/src/assets/headshot.jpg"
            alt="headshot"
          ></Image>
        </Flex>
        
          <a className="light" href="emailto:seekersig@gmail.com" />
          <span role="img" aria-label="wave">
          {" "}
          say hello👋{" "}
        </span>
        
  
    </Box> 

     </section>
  )
}
export default ContactForm;
