import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/ContactPage.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactPage = () => {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
 const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
const handleSubmit = (e) => {
  e.preventDefault();

  const subject = encodeURIComponent(`New Contact Form Message from ${formData.name}`);
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
  );

  window.location.href = `mailto:satheeshaswathi@gmail.com?subject=${subject}&body=${body}`;
};



  return (
    <div className="contact-page"id="contact">
      <Container>
        <h2 className="contact-heading animate-title">GET IN TOUCH</h2>
        <p className="contact-sub animate-sub">
          We’d love to hear from you and discuss your next project
        </p>

        <Row className="align-items-center mt-5">
          {/* Contact Form */}
          <Col md={6} className="animate-left">
            <Form className="contact-form"  onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>First name*</Form.Label>
                <Form.Control type="text" name="name"
 placeholder="Enter first name" value={formData.name}
              onChange={handleChange}
 required />
              </Form.Group>

              {/* <Form.Group className="mb-3">
                <Form.Label>Last name*</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" required />
              </Form.Group> */}

              <Form.Group className="mb-3">
                <Form.Label>Email*</Form.Label>
                <Form.Control type="email" name="email"
              placeholder="Enter email" value={formData.email}
              onChange={handleChange}
 required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel"  name="phone"
 placeholder="Enter phone number" value={formData.phone}
              onChange={handleChange}
 />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea"  name="message"
 rows={4} placeholder="Your message" value={formData.message}
              onChange={handleChange}
 />
              </Form.Group>

              <Button type="submit" className="submit-btn">Submit</Button>
            </Form>
          </Col>

          {/* Image & Map */}
          <Col md={6} className="animate-right">
            <div className="image-map-container">
              
              <div className="map-container mt-4">
                <iframe
                  title="MR Tile Designing Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.2156659354176!2d75.3700!3d11.8670!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43d3f725a3f65%3A0x4b6e5e5c5e!2sKannur%2C%20Kerala!5e0!3m2!1sen!2sin!4v123456789"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>

        {/* Business Info */}
        <div className="business-info mt-5 animate-up">
          <h4>OUR DESIGN SPACE</h4>
          <p>
            Visit us at our conveniently located design space in Kannur, where ideas come to life.
            See our tile collections and discuss your project with our experts.
          </p>
          <p>
            <strong>Business Hours:</strong> Monday to Friday, 9 AM to 6 PM
          </p>
          
          <p><FaPhoneAlt /> Phone: ‪+91 9567904901‬</p>

          <p><FaEnvelope /> Email: satheeshaswathi@gmail.com </p>

        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
