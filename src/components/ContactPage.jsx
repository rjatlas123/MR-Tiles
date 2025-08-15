import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/ContactPage.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactPage = () => {
//    const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: ""
//   });
//  const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };
// const handleSubmit = (e) => {
//   e.preventDefault();

//   const subject = encodeURIComponent(`New Contact Form Message from ${formData.name}`);
//   const body = encodeURIComponent(
//     `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
//   );

//   window.location.href = `mailto:satheeshaswathi@gmail.com?subject=${subject}&body=${body}`;
// };

const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://mr-tiles-server.vercel.app/api/contact/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
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

            <div className="contact-form">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          {/* <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                 className="mb-3"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mb-3"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                 className="mb-3"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`submit-btn${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form> */}
          <form onSubmit={handleSubmit}>
    {/* Name */}
    <div className="mb-3">
      <label htmlFor="name" className="form-label fw-semibold">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="form-control"
        placeholder="Enter your name"
        required
      />
    </div>

    {/* Email */}
    <div className="mb-3">
      <label htmlFor="email" className="form-label fw-semibold">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="form-control"
        placeholder="Enter your email"
        required
      />
    </div>

    {/* Message */}
    <div className="mb-3">
      <label htmlFor="message" className="form-label fw-semibold">Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="form-control"
        rows="5"
        placeholder="Write your message"
        required
      ></textarea>
    </div>

    {/* Submit */}
    <div className="text-center">
      <button
        type="submit"
        disabled={loading}
        className={`submit-btn ${loading ? "disabled" : ""}`}
      >
        {loading ? (
          <>
            <span className="spinner-border spinner-border-sm me-2"></span>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </div>
  </form>
        </div>
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
