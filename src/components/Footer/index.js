import React from 'react';
import { Container } from 'reactstrap';
// import { Button, Col, Row } from 'reactstrap';

function Footer() {
    return (
        <div>
            <Container className="footer">
            <a className="plain" href="https://github.com/sidoniag">github</a> |
            <a className="plain" href="seekersig@gmail.com">email</a>
            {/* <Col xs={{ size: 12, offset: 3 }} sm={{ size: 12, offset: 3}} md={{ size: 6, offset: 3 }} lg={{ size: 6, offset: 3}}>
                <Row><p>say <span role="img" aria-label="wave">👋 </span>hello <span role="img" aria-label="wave">👋 </span></p></Row>
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