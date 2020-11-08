import React from "react";
import { Container } from "reactstrap";

function Footer() {
  return (
    <div>
      <Container className="footer">
        <span role="img" aria-label="wave">
          {" "}
          say hello👋{" "}
        </span>
        <a className="plain" href="https://github.com/sidoniag">
          github
        </a>{" "}
        |
        <a className="plain" href="seekersig@gmail.com">
          email
        </a>
      </Container>
    </div>
  );
}

export default Footer;
