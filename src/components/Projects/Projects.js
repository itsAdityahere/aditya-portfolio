import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import MotiveApp from "../../Assets/Projects/MotiveApp.png"
import SugarBounce from "../../Assets/Projects/SugarBounce.png"
import ZafaTours from "../../Assets/Projects/ZafaTours.png"
import TheNotebookCompany from "../../Assets/Projects/TheNotebookCompany.png"
import GraniteWarehouse from "../../Assets/Projects/GraniteWarehuse.png"
import forteMare from "../../Assets/Projects/forteMare.png"

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
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={SugarBounce}
              isBlog={false}
              title="SugarBounce"
              description="SugarBounce is a game-changing ecosystem: a single universe for all the NSFW entertainment needs for the next generation — fully decentralized and on the chain, I worked as a frontend developer & Translated designs and wireframes into a highly responsive user interface and reusable components using React.js."
              link="https://sugarblocks.io/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={MotiveApp}
              isBlog={false}
              title="Motive RealScore"
              description="Motive RealScore™ is a universal scoring system to align your purchasing power with what you care about most. Motive uses validated Environmental, Social, and Governance (ESG) data to create a credible and reliable analysis of thousands of companies, and evaluate how they perform across key topics like climate action, diversity, and support for local economy."
              link="https://hello.motiveapp.co/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={GraniteWarehouse}
              isBlog={false}
              title="TheGraniteWarehouse.com"
              description="This is an e-commerce web app for selling granites and marbles. currently, their website is running on WordPress. So when the traffic increases it becomes very inefficient and also user experiences so many lags and glitches. So I am converting this whole web app in mern stack. till now i have completed almost 70% of the total tasks of the project."
              link="https://granite-warehouse-frontend.web.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={ZafaTours}
              isBlog={false}
              title="Zafs Tours"
              description="ZAFS Tours run amazing high-quality tours around Tanzania and Kenya. ZAFS Tours you can climb Mt Kilimanjaro, go on a wildlife safari and enjoy a beach vacation on the paradise island Zanzibar. "
              link="https://zafstours.com/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={TheNotebookCompany}
              isBlog={false}
              title="The Notebook Company"
              description="The Notebook Company is a trademark in a constantly developing world where education is the priority.this company aims to revolutionize the Education Sector by providing notebooks that are crafted with best-in-class quality at uncompetitively low prices."
              link="https://thetncstore.com/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={forteMare}
              isBlog={false}
              title="Forte Mare Real Estate Website"
              description="forte-mare.com is an Real Estate Website I have developed the frontend of this website for a Client who wanted a real estate website where he could show his estates for renting and selling."
              link="http://www.forte-mare.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
