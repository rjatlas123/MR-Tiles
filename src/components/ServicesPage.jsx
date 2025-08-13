import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styles/ServicesPage.css";

const ServicesPage = () => {
  return (
    <div className="services-page"id="services">
      <Container>
        <h2 className="services-heading animate-title">OUR SERVICES</h2>
        <p className="services-sub animate-sub">
          From concept to completion, we handle it all
        </p>

        <Row className="g-4 mt-4">
          {/* Service 1 */}
          <Col md={4}>
            <Card className="service-card animate-left">
              <Card.Body>
                <Card.Title className="service-title">Tile Installation</Card.Title>
                <Card.Subtitle className="service-sub">Tailored Solutions</Card.Subtitle>
                <Card.Text className="service-text">
                  Our certified professionals ensure flawless tile installation with precision
                  and care. Whether it's flooring, walls, stairs, or kitchen counters, we use the
                  latest tools and techniques to deliver clean finishes and long-lasting results —
                  all with minimal disruption to your space.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Service 2 */}
          <Col md={4}>
            <Card className="service-card animate-up">
              <Card.Body>
                <Card.Title className="service-title">Design Consultation</Card.Title>
                <Card.Subtitle className="service-sub">Expert Advice</Card.Subtitle>
                <Card.Text className="service-text">
                  We begin by understanding your space, style, and preferences. Our team guides you
                  through tile selections that match your vision, whether you're renovating a home
                  or building a commercial space. From textures to tones, we help bring your ideas
                  to life with expert design input.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Service 3 */}
          <Col md={4}>
            <Card className="service-card animate-right">
              <Card.Body>
                <Card.Title className="service-title">Repair & Restoration</Card.Title>
                <Card.Subtitle className="service-sub">Transformative Changes</Card.Subtitle>
                <Card.Text className="service-text">
                  Damaged or outdated tiles? We provide expert restoration services to revive the
                  beauty of your surfaces. From cracks and stains to complete tile replacement, we
                  breathe new life into your spaces while preserving their original charm.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-5">
          <Button className="contact-btn animate-up">Get in Touch</Button>
        </div>
      </Container>
    </div>
  );
};

export default ServicesPage;
