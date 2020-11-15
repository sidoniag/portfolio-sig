import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/core";

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
      <Box
      className="#Contact"
        borderWidth="1px"
        rounded="md"
        maxW="sm"
        overflow="hidden"
        bg="tomato"
        padding="8px"
        alignSelf="center"
        textAlign="center"
      >
          <h1>Contact Me</h1>
          <a className="light" href="seekersig@gmail.com" />
        
  
    </Box> 

     </section>
  )
}
export default ContactForm;
