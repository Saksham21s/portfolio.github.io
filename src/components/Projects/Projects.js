import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import hotel from "../../Assets/Projects/hotel.jpg";
import weather from "../../Assets/Projects/weather.webp";
import vendingkart from "../../Assets/Projects/vendingkart.jpg";

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
              imgPath={weather}
              isBlog={false}
              title="WeatherCheck"
              description="A web application that checks Weather of the location we want to check and also provide the feature of forecasts."
              ghLink="https://github.com/Saksham21s/WeatherCheck.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title ="Hotel Managment"
              description="A Complete Hotel Managment system made using PHP Which has all features like Room Management, Reservation Management, Billing and Payment Management, Food and Beverage Management, Staff Management etc "
              ghLink="https://github.com/Saksham21s/sunrisehotel.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={vendingkart}
              isBlog={false}
              title="VendingKart.com"
              description="A Vending Machiene service providing website's Frontend made for a startup in Banglore.It is made using Html,Css,Javascript,Tailwind Css etc."
              ghLink="https://github.com/Saksham21s/vendingkart.github.io"
              demoLink="https://vendingkart-github-io.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/Saksham21s/emotion.github.io"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/Saksham21s/emotion.github.io"   
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
