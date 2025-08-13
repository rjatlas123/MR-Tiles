import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import aboutimage from "../assets/Common Mistakes to Avoid When Buying Floor Tiles from India.jpg";
import MRimage from "../assets/mrtiles-owner-short-CV0-N0ti.jpg";
import "../styles/AboutPage.css";

const AboutPage = () => {
  // Scroll reveal triggers
  const { ref: philosophyRef, inView: philosophyInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const { ref: commitmentRef, inView: commitmentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <div className="about-page" id="about">
      <Container className="py-5">
        {/* OUR DESIGN PHILOSOPHY */}
        <Row
          className={`align-items-center mb-5 ${
            philosophyInView ? "animate-left" : ""
          }`}
          ref={philosophyRef}
        >
          <Col md={7}>
            <h2 className="about-heading">OUR DESIGN PHILOSOPHY</h2>
            <p className="about-text">
              At MR Tile Designing, we believe tiles are more than just
              surfaces — they’re the foundation of great design. Our approach
              blends timeless aesthetics with modern functionality, turning
              ordinary floors, stairs, and kitchens into elegant, lasting
              spaces.
            </p>
            <p className="about-text">
              Every project is guided by precision, creativity, and a deep
              understanding of our clients' needs. From material selection to
              installation, we ensure that every detail reflects quality
              craftsmanship and delivers comfort, beauty, and durability.
            </p>
          </Col>
          <Col md={5}>
            <Card className="about-image-card shadow-lg">
              <Card.Img
                src={MRimage}
                alt="MR Tiles Owner"
                className="about-image"
              />
            </Card>
          </Col>
        </Row>

        {/* OUR COMMITMENT */}
        <Row
          className={`align-items-center ${
            commitmentInView ? "animate-right" : ""
          }`}
          ref={commitmentRef}
        >
          <Col md={5} className="order-md-1 order-2">
            <Card className="about-image-card shadow-lg">
              <Card.Img
                src={aboutimage}
                alt="Tile Design"
                className="about-image"
              />
            </Card>
          </Col>
          <Col md={7} className="order-md-2 order-1">
            <h2 className="about-heading">OUR COMMITMENT</h2>
            <p className="about-text">
              At MR Tile Designing, client satisfaction is at the heart of
              everything we do. We take pride in being transparent, dependable,
              and detail-oriented—from the first consultation to the final tile
              laid. Our team ensures a smooth and stress-free experience with
              timely execution and clear communication.
            </p>
            <p className="about-text">
              We’re not just building surfaces; we’re building trust. Whether
              it’s a compact home or a large commercial project, we bring the
              same level of care, professionalism, and passion to every space
              we transform.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
