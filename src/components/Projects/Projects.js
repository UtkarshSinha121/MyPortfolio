import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ProStream from "../../Assets/Projects/ProStream.png";
import SaleSpotter from "../../Assets/Projects/SaleSpotter.png";
import ProfLink from "../../Assets/Projects/ProfLink.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SaleSpotter}
              isBlog={false}
              title="SaleSpotter"
              description="A MERN stack project where users can find sales near their location. Users can also add sales and view sales added by other users."
              ghLink="https://github.com/UtkarshSinha121/SaleSpotter"
              demoLink="https://sale-spotter.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProfLink}
              isBlog={false}
              title="ProfLink"
              description="A social media web app for professionals. Built with React.js for front-end and Express.js, Node.js and MongoDB for back-end.."
              ghLink="https://github.com/UtkarshSinha121/ProfLink"
              demoLink="https://prof-link.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProStream}
              isBlog={false}
              title="ProStream"
              description="A Movie Streaming platform 🎬 built with HTML, CSS ,JavaScript, Bootstrap and Swiper Class. A simple and clean User Interface."
              ghLink="https://github.com/UtkarshSinha121/ProStream"
              demoLink="https://utkarshsinha121.github.io/ProStream/"              
            />
          </Col>

         

         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
