import React from "react";
import { Accordion, Card } from "react-bootstrap";

function Projects() {
  return (
    <>
      <div className='container section mt-5' id='projects-section'>
        <div className='row justify-content-center'>
          <h1 className='display-3'>Projects</h1>
        </div>

        <div className='row mt-5'>
          <div className='col-12'>
            <Accordion defaultActiveKey='0'>
              <Card>
                <Accordion.Toggle
                  className='project-title'
                  as={Card.Header}
                  eventKey='0'
                >
                  Pharmacy Manager
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='0'>
                  <Card.Body>
                    <p>
                      This is pharmacy management portal project. It has been
                      developed using HTML,CSS, Javascript(Jquery), Bootstrap,
                      PHP & MySQL has been used for database. There are three
                      types of users for this portal admin,pharmacist & cashier.
                      This project automates the manual task of a pharmacist
                      like he/she can check the availability of a medicine,
                      price, number of units sold etc. It calculates the total
                      and generates the bill as well. It has a dashboard on
                      which pharmacist can view statistics related to their
                      sales
                    </p>
                    <p>
                      <a
                        href='https://github.com/YashxAnand/Pharmacy-Manager'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        View Github Repository
                      </a>
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  className='project-title'
                  eventKey='1'
                >
                  Dev Connector: Social Network for Developers
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='1'>
                  <Card.Body>
                    <p>
                      This is a social network website for developers. It's a
                      MERN (MongoDB, Express.js, React, Node) stack based
                      application. Bootstrap has also been used in the frontend
                      for layouts and other elements. This application provides
                      basic features of a social network website like posting,
                      liking a post, commenting on a post etc. Users can also
                      display their github repositeries in their profile.
                    </p>
                    <p>
                      <a
                        href='https://github.com/YashxAnand/dev-connector-social-network'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        View Github Repository
                      </a>
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  className='project-title'
                  eventKey='2'
                >
                  My Awesome Cart: e-Commerce website
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='2'>
                  <Card.Body>
                    <p>
                      This is an e-commerce website named My Awesome Cart. This
                      website was implemented using Django framework. Frontend
                      was implemented using HTML, CSS, Javascript, Bootstrap.
                      This website has all the basic features like searching an
                      item, cart, payment portal etc.
                    </p>
                    <p>
                      <a
                        href='https://github.com/YashxAnand/E-Commerce-Website'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        View Github Repository
                      </a>
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  className='project-title'
                  eventKey='3'
                >
                  Code Player
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='3'>
                  <Card.Body>
                    <p>
                      This mini project is a code player on which you can type
                      your HTML, CSS & Javascript code and simultaneously get
                      the output.This project has been implemented using HTML,
                      CSS, Javascript & Jquery.
                    </p>
                    <p>
                      <a
                        href='https://github.com/YashxAnand/Code-Player'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        View Github Repository
                      </a>
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
