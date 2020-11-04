import React from 'react';
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, Row, Col
  } from 'reactstrap';
  
  function Project({ project }) {

    const { name, image, link, repo, description } = project;

    return (
        <div>

          <Card>
            <CardBody>
            <CardTitle>{name}</CardTitle>
            <img width="100%" src={require(`../../assets/${image}`)}
             alt="project" 
             />
            <CardText>{description}</CardText>
            <CardLink href={link}>Deployed</CardLink>
            <CardLink href={repo}>GitHub</CardLink>
          </CardBody>
        </Card>
 
    </div>
 ) 
 }


export default Project;