import React from "react";
import { Row, Col } from "reactstrap";
import { Box } from "@chakra-ui/core";

function Resume() {
  return (
    <section>
      <Col xs={12}>
        <Box
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          overflow="hidden"
          bg="tomato"
        >
          <br />
        </Box>

        <h2>SARAH IDONIA GARRETT</h2>
        <h4>CV2020</h4>
        <nav className="footer">
          <a className="plain" href="#education">
            Education |
          </a>
          <a className="plain" href="#experience">
            Experience |
          </a>
          <a className="plain" href="#statement">
            Statement |
          </a>
          <a className="plain" href="#volunteer">
            Volunteerism
          </a>
        </nav>
      </Col>
      <Col xs={12} md={10}>
        <h3>Education</h3>
        <ul>
          <p>University of Texas | Full Stack Development | Fall 2020</p>
          <p>
            San Antonio College | AA in Business Administration | Summer 2020 |
            President's List
          </p>
          <p>
            San Antonio College | Communication Design Certificate | Summer 2020
          </p>
          <p>General Assembly | Social Media BootCamp | Spring 2017</p>
          <p>
            Real Estate School at SABOR | Texas Real Estate Salesperson License
            | Spring 2015
          </p>
          <p>
            French Culinary Institute | Classic Culinary Arts | Fall 2001 |600
            hours (ACCSC)
          </p>
        </ul>
      </Col>
      <Col xs={12}>
        <Row>
          <h3>Experience</h3>
          <Col>
            <p>Ortiz Firm</p>
          </Col>

          <p>Sales Agent | 2016 - Present</p>
          <p>
            Single family sales executive with focus on first time home buyers,
            residential leases, commercial sales and leases. Developed and
            distributed marketing collateral for print and digital channels.
          </p>

          <Col>
            <p>Saint City Supper Club</p>
            <p>Director of Events & Programming | 11.2017 - 12.2019</p>
            <p>
              Collaborate with team members to develop events and new
              fundraising ideas. Coordinate with vendors, volunteers, and other
              community members to ensure event runs smoothly, patrons are
              happy, and the foundation’s values are maintained.
            </p>
          </Col>

          <p>
            Lux Agency, LLC. | Sales Agent | 03.2016 - 12.2016 | San Antonio, TX
            Land acquisition, Condominium Sales, Single Family Sales with focus
            on first time home Buyers, Residential Leases, Marketing Open House
            as host and planner. Meet with local business owners about
            cross-marketing opportunities and with non-profits to offer
            sponsorship. Manage, track and communicate through process of
            contract to close internally and with Client and Vendors.
          </p>
          <p>
            Keller Williams Heritage | Sales Agent | 12.2014 - 03.2015 | San
            Antonio, TX Business Development, Marketing, Hosting of Open Houses,
            Building of Sphere Of Influence, Completed Ignite Program and BOLD:
            Business Objective, a Life by Design
          </p>
          <p>
            Pegasus Elite Aviation | Corporate Flight Attendant | 03.2010 TO
            10.2012 | Los Angeles, CA Ensure passenger comfort and safety while
            maintaining “white glove” level of service. Orchestrate meal and
            plane preparedness domestically and abroad. Organize, track and
            retain records of planes’ safety equipment and passenger specific
            requests.
          </p>
          <p>
            Cartewheels Catering | Chef & Server | 10.2004 - 05.2005 |
            Kerrville, TX Assisted in organizing and setting up décor to create
            relaxing and enjoyable environment. Communicated essential
            information and served patrons in courteous, professional manner.
            Prepared visually appealing, delicious food in large quantities
            while multi- tasking to meet deadlines.
          </p>
          <p>
            Red Door Bakery | Chef & Owner | 03.2003 - 05.2004 | Bandera, TX
            Leased, Designed and remodeled 1950’s era home to run as bakery and
            café offering catered private parties and daily menus. Worked in
            kitchen and front of house while managing employees and business
            operation.
          </p>
        </Row>
      </Col>
      <Col>
        <h3>Statement</h3>
        <ul>
          Approaching two decades of experience in communication, adaptation, and a developed keen style. 
          Always learning and challenging myself to change and improve, personally and professionally. 
          I aspire to create memorable applications and experiences preferably as part of a team.
        </ul>
      </Col>
      <Col xs={12}>
        <h3>Volunteerism</h3>

              <p>Green Space Alliance | San Antonio, Texas</p>
  
              <p>City of San Antonio Parks and Recreation | San Antonio, Texas</p>

              <p>Historical Society | San Antonio, Texas</p>

              <p>Force of Nature | Vancouver, British Columbia</p>
              
             <p>Saint City Supper Club | San Antonio, Texas</p>
        
        <br /> <br />
      </Col>
    </section>
  );
}

export default Resume;
