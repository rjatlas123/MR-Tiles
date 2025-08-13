import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/ConceptCompletion.css";
import baseimage from "../assets/City Skyline Reflected in Sleek Interior (1).png";
import companyLogo from "../assets/logo-white-olpKORAA.svg";
const steps = [
  { number: "01", title: "Consultation & Site Visit" },
  { number: "02", title: "Design & Selection" },
  { number: "03", title: "Planning & Preparation" },
  { number: "04", title: "Installation & Finishing" },
];

const ConceptCompletion = () => {
  return (
    <section className="concept-completion-section">
      <Container>
        <h2 className="section-title">FROM CONCEPT TO COMPLETION</h2>
        <Row className="g-4">
          {steps.map((step, index) => (
            <Col md={3} sm={6} xs={12} key={index}>
              <Card
                className={`concept-card slide-step ${
                  index % 2 === 0 ? "slide-left" : "slide-right"
                }`}
              >
                <Card.Body>
                  <div className="step-number">{step.number}</div>
                  <Card.Title>{step.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Full Width Image */}
        {/* <div className="fullwidth-image-container">
          <img
            src={baseimage}
            alt="Concept to Completion"
            className="fullwidth-image slide-up"
          />
        </div> */}
        <div className="fullwidth-image-container">
  <img
    src={baseimage}
    alt="Concept to Completion"
    className="fullwidth-image slide-up"
  />

  {/* Overlay with Logo, Brand Name, and Description */}
  <div className="image-overlay">
    <img src={companyLogo} alt="MR Tile Designing Logo" className="overlay-logo" />
    <h2 className="overlay-brand">MR TILE DESIGNING</h2>
    <p className="overlay-desc">
      Transforming spaces from concept to completion with unmatched craftsmanship and style.
    </p>
  </div>
</div>
      </Container>
    </section>
  );
};

export default ConceptCompletion;
