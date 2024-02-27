import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="TagSize">VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaGithub />
      <p className="TagSize">GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className="TagSize">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p className="TagSize">Vercel</p>
      </Col>
     
    </Row>
  );
}

export default Toolstack;
