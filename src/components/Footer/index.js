import React from "react";
import { Container } from "reactstrap";

function Footer() {
  return (
    <div>
      <Container className="footer">
        <a href="https://github.com/sidoniag" target="_blank" rel="noopener noreference"><img src={require(`../../assets/github_logo.png`)} alt="github" className="icon" /></a>
        <a href="https://www.linkedin.com/in/sarahidoniagarrett/" target="_blank" rel="noopener noreference"><img src={require(`../../assets/linkedin_logo.png`)} alt="linkedin" className="icon" /></a>
        <a href="mailto:seekersig@gmail.com" target="_blank" rel="noopener noreference"><img src={require(`../../assets/email_icon.jpeg`)} alt="email" className="icon" /></a>
      </Container>
    </div>
  );
}

export default Footer;
