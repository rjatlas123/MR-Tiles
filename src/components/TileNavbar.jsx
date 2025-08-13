import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/Navbar.css";
import MRimagelogo from "../assets/logo-white-olpKORAA.svg";
const TileNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar expand="lg" className={`tile-navbar ${scrolled ? "scrolled" : ""}`}>
      <Container>
        <Navbar.Brand href="#" className="brand-logo">
          <img
            src={MRimagelogo}
            alt=""
            className="nav-logo"
          />
          
         MR TILE DESIGNING
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" className="nav-item-animated">About</Nav.Link>
            <Nav.Link href="#services" className="nav-item-animated">Services</Nav.Link>
            <Nav.Link href="#projects" className="nav-item-animated">Projects</Nav.Link>
             <Nav.Link href="#contact" className="contact-btn">
    Contact
  </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TileNavbar;
