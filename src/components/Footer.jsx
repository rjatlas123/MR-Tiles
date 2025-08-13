import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Footer.css";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section animate-footer">
      <Container>
        <Row className="gy-3 text-center text-md-start">
          {/* Contact Info */}
          <Col md={4}>
            <h5 className="footer-heading">Contact Us</h5>
            <p>satheeshaswathi@gmail.com</p>
            <p>+91 9567904901‬</p>
            <p>Thazhe Chovva, Kannur</p>
          </Col>

          {/* Social Links */}
          <Col md={4}>
            <h5 className="footer-heading">Follow Us</h5>
            <div className="social-icons">
              <a href="#" className="social-link instagram"><FaInstagram /></a>
              <a href="#" className="social-link facebook"><FaFacebookF /></a>
              <a href="#" className="social-link youtube"><FaYoutube /></a>
            </div>
          </Col>

          {/* Policies */}
          <Col md={4}>
            <h5 className="footer-heading">Legal</h5>
            <p><a href="#" className="footer-link">Privacy Policy</a></p>
            <p><a href="#" className="footer-link">Accessibility Statement</a></p>
          </Col>
        </Row>

        {/* Bottom Line */}
        <Row className="mt-4">
          <Col className="text-center">
            <p className="footer-copy">© 2025 MR TILE DESIGNING</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
