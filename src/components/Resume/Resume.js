import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/my-resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
              <Resumecontent
                  title="MERN Stack Developer [ Xpertiks, Mohali ]"
                  date="March 2020 - August 2021"
                  content={[
                      "Worked on the development of 20+ Full Stack Web-Apps that includes PWA also",
                      "developed API and integrated with the application with the proper state management ( with redux )",
                      "Translated designs and wireframes into a highly responsive user interface and reusable components using React.js.",
                      "Used Back-End APIs to display data using the Custom Components, library Components, and Redux.",
                  ]}
              />
            <Resumecontent
              title="MERN Stack Developer [ THE NOTEBOOK COMPANY ]"
              date="Jan 2019 - March 2020"
              content={[
                "Worked on the development of an E-commerce website",
                "Redesigned Wigme.com and created features to enhance the user experience and optimized designs for smartphones.",
                "Translated designs and wireframes into a highly responsive user interface and reusable components using React.js.",
                "Used Back-End APIs to display data using the Custom Components, library Components, and Redux.",
              ]}
            />

          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Computer Science and Engineering [ Chandigarh University] "
              date="2019 - Present"
              content={[`CGPA: 7.49 (Till 5th Sem)`]}
            />

              <h3 className="resume-title">Extracurricular Activities</h3>
              <Resumecontent
                  title="Web Developer [  Mozilla Chandigarh ]"
                  content={[
                      "Worked on building front-end UI design using HTML5, CSS3, JavaScript jQuery, and building API routes using Node and express.js.",
                  ]}
              />
              <Resumecontent
                  title="Technical Coordinator [ WEBSPARKS CLUB ]"
                  content={[
                      "Have delivered sessions among juniors and guided them about how to master the full stack development, what are the best free learning resources available on the Internet. and also have shared the tips for finding and cracking the web developer jobs. ",
                  ]}
              />

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                // `Current rank in Spoj ${spojRank}`,
                // `Current rank in HackerRank  ${hackerrank}`,
                "Secured 1st position in QUIZOHOLIC event under M-field club organized by division of mathematics",
                "Rated expert at Dtech club",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
