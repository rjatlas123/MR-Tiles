import React from "react";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import "../styles/HomePage.css";
import homeimage from "../assets/21 Stunning Modern Living Room Ideas for Inspiration _ Relixiy.jpg";
const HomePage = () => {
  return (
    <div className="homepage">
      {/* Heading */}
      <Container className="text-center">
        <h1 className="main-heading animate-heading">
          Luxury with MR TILE DESIGNING
        </h1>
      </Container>

      {/* Cards Section */}
      <Container className="mt-5">
        <Row className="g-4 align-items-center">
          {/* Text Card */}
          <Col md={6}>
            <Card className="text-card shadow-lg p-3 animate-left">
              <Card.Body>
                <Card.Title className="card-title">
                  Crafting exceptional tile experiences with a Personal Touch
                </Card.Title>
                <Card.Text className="card-description">
                  At MR Tile Designing, we specialize in crafting luxurious yet
                  comfortable spaces through expert tilework that speaks
                  elegance and durability. Our focus on precision craftsmanship,
                  premium materials, and timeless design brings the essence of
                  refined living into modern homes across Kannur.
                </Card.Text>
                {/* <Button variant="light" className="explore-btn glow-btn">
                  View Our Projects
                </Button> */}
                 <Nav.Link href="#contact" className="contact-btn w-50">
                  View Our Projects
  </Nav.Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Image Card */}
          <Col md={6}>
            <Card className="image-card shadow-lg animate-right">
              <Card.Img
                variant="top"
                src={homeimage}
                alt="Tile Design"
                className="tile-image"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
