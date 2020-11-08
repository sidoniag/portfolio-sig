import React from 'react';
import { Container } from 'reactstrap';

function Footer() {
    return (
        <div>
            <Container className="footer">
              
            <span role="img" aria-label="wave"> say hello👋 </span>
            <a className="plain" href="https://github.com/sidoniag">github</a> |
            <a className="plain" href="seekersig@gmail.com">email</a>
          
            {/* <Col xs={{ size: 12, offset: 3 }} sm={{ size: 12, offset: 3}} md={{ size: 6, offset: 3 }} lg={{ size: 6, offset: 3}}>
                <Row></Row>
                <Row>
            <Button outlinecolor="success">email</Button>
            <Button outlinecolor="success">linkedin</Button>
                </Row>
            </Col> */}
       
            </Container>
        </div>
    );
    
}

export default Footer;