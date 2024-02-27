import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Utkarsh Sinha </span>
            from <span className="purple"> Lucknow, India.</span>
            <br />
            I am currently pursuing <b className="purple">BTech</b> final year in <b className="
            purple">Computer Science and Engineering</b> from SRMCEM Luckonw.
            <br />
            I've completed extensive training in the <b className="purple">MERN stack</b>, mastering technologies like <b className="purple"> MongoDB, Express.js, React.js, and Node.js</b>. 
            <br />
            <br />
            I've honed my skills in Data Structures and Algorithms using <b className="purple">Java</b>. Proficient in <b className="purple">Frontend Development</b>, I'm adept at crafting engaging user experiences using <b className="purple">HTML, CSS, JavaScript, Bootstrap, and React</b>.
          </p>
          

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
