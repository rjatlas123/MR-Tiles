import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/OurProjects.css";
import oneimage from "../assets/Architectural opulence in this modern luxury….jpg";
import twoimage from "../assets/af8b08fc-270d-4a4e-a808-b94a10e0d2e4.jpg";
import threeimage from "../assets/a01eb3e9-7975-499f-9231-8641ce233694.jpg";
import fourimage from "../assets/823a0175-888e-4e58-9e98-f326c1244242.jpg";
import fiveimage from "../assets/56c4f007-6be9-42ca-9571-fdb6c9cc4b41.jpg";
import siximage from "../assets/15 Stylish Staircase Ideas for a Modern Home.jpg";

const projects = [
  {
    title: "Elegant Dining Area with Warm White Tile Finish",
    description:
      "The perfect mix of grace and simplicity, this dining area is grounded by warm-toned white tiles that enhance the space’s refined decor and golden accents.",
    image: oneimage,
  },
  {
    title: "Sunlit Kitchen with Clean Matte Finish",
    description:
      "This compact kitchen uses soft matte tiles to create a soothing ambiance, complemented by natural light streaming from above for a fresh, modern look.",
    image: twoimage,
  },
  {
    title: "Sleek Modular Kitchen with Mirror Cabinets",
    description:
      "Combining functionality with elegance, this modular setup features reflective glass cabinets and minimalist tile backsplashes that amplify light and space.",
    image: threeimage,
  },
  {
    title: "Luxe Living Room with Glossy Stone Flooring",
    description:
      "High-gloss stone tiles elevate this cozy living room, enhancing its rich textures and adding a sleek, reflective finish to the floors.",
    image: fourimage,
  },
  {
    title: "Bright Entryway with Glossy Ivory Marble Flooring",
    description:
      "Welcoming and radiant, this entry space is adorned with large-format ivory tiles that blend warmth with luxury under natural lighting.",
    image: fiveimage,
  },
  {
    title: "Modern Marble-Touch Kitchen with Subtle Textures",
    description:
      "Muted tones and marble-inspired tiles bring depth and refinement to this modern kitchen, creating a soft yet sophisticated cooking space.",
    image: siximage,
  },

];

const OurProjects = () => {
  return (
    <div className="projects-page"id="projects">
      <Container>
        <h2 className="projects-heading animate-title">OUR SHOWCASE OF EXCELLENCE</h2>
        <p className="projects-sub animate-sub">
          Explore a curated collection of tile installations that showcase our passion for design and precision.
          From stylish modern interiors to elegant traditional spaces, our work reflects the versatility and craftsmanship that define MR Tile Designing.
        </p>

        <Row className="mt-5">
          {projects.map((project, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4 animate-up">
              <Card className="project-card">
                <div className="card-image-container">
                  <Card.Img variant="top" src={project.image} />
                  <div className="overlay">
                    <div className="overlay-text">{project.title}</div>
                  </div>
                </div>
                <Card.Body>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OurProjects;
