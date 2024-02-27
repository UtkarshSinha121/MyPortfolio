import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJava,
} from "react-icons/di";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p className="TagSize">Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaHtml5 />
      <p className="TagSize">HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaCss3Alt />
      <p className="TagSize">CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaBootstrap />
      <p className="TagSize">Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className="TagSize">JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="TagSize">React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p className="TagSize">Nodejs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiExpress />
      <p className="TagSize">Express</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p className="TagSize">MongoDB</p>
      </Col>
     
     
    </Row>
  );
}

export default Techstack;
