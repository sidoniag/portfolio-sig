import React from "react";
import { Container } from "reactstrap";
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div>
      <Container className="footer">
      
        {/* <a href="https://github.com/sidoniag" target="_blank" rel="noopener noreference"><img src={require(`../../assets/github_logo.png`)} alt="github" className="icon" /></a>
        <a href="https://www.linkedin.com/in/sarahidoniagarrett/" target="_blank" rel="noopener noreference"><img src={require(`../../assets/linkedin_logo.png`)} alt="linkedin" className="icon" /></a>
        <a href="mailto:seekersig@gmail.com" target="_blank" rel="noopener noreference"><img src={require(`../../assets/email_icon.jpeg`)} alt="email" className="icon" /></a> */}
{/* 
        <a href="https://github.com/sidoniag" target="_blank" rel="noopener noreference">github</a>
        <a href="https://www.linkedin.com/in/sarahidoniagarrett/" target="_blank" rel="noopener noreference">linkedin</a>
        <a href="mailto:seekersig@gmail.com" target="_blank" rel="noopener noreference">email</a> */}

<Fab>
  <NavigationIcon />
</Fab>
      </Container>
    </div>
  );
}

export default Footer;
