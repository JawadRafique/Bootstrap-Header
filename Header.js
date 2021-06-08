import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import civixaWhite from "./images/civixaWhite.svg";
import civixa from "./images/civixa.svg";

import "./Header.css";
import { Link } from "react-router-dom";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

export default function Header({ headercolor }) {
  const [headersticky, setHeaderSticky] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        setHeaderSticky(true);
      } else {
        setHeaderSticky(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  return (
    <Navbar
      // fixed="top"
      sticky="top"
      collapseOnSelect={true}
      expand="lg"
      bg={headercolor}
      variant="light"
      expanded={expanded}
      className={`header py-2 container-fluid w-100 px-0 px-md-auto ${
        headersticky ? "sticky" : ""
      }`}
    >
      <div className="container-lg container-fluid">
        <Navbar.Brand className="pl-5 pl-lg-0">
          <Link to="/" className="d-flex align-items-center  navbar-brand">
            <img
              alt="Civixa"
              src={`${
                headercolor !== "white" || headersticky ? civixaWhite : civixa
              }`}
              width="46"
              height="50"
              className="d-inline-block align-top icon-white"
            />
            <span className="pl-2 logo-heading text-uppercase">Civixa</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(!expanded)}
          aria-controls="responsive-navbar-nav "
          className="mr-5 mr-lg-0"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto pl-5 align-items-lg-center">
            <Link
              eventKey="1"
              to="/"
              onClick={() => setExpanded(false)}
              className="px-3 nav-link"
            >
              Home
            </Link>
            <Link
              onClick={() => setExpanded(false)}
              eventKey="2"
              to="/pricing"
              className="px-3 nav-link"
            >
              Pricing
            </Link>
            <Link
              onClick={() => setExpanded(false)}
              eventKey="3"
              to="/service"
              className="px-3 nav-link"
            >
              Services
            </Link>
            <Link
              onClick={() => setExpanded(false)}
              eventKey="5"
              to="/covid"
              className="px-3 nav-link"
            >
              Covid
            </Link>
            <Link
              onClick={() => setExpanded(false)}
              eventKey="4"
              to="/contact"
              className="px-3 nav-link"
            >
              Contact Us
            </Link>
            <Link
              onClick={() => setExpanded(false)}
              eventKey="4"
              to="/contact-01"
              className="px-3 nav-link"
            >
              Contact 01
            </Link>
          </Nav>
          <Nav className="d-flex pl-lg-0 pl-5 align-items-lg-center">
            <Link
              onClick={() => setExpanded(false)}
              href="/"
              className="px-3 nav-link "
            >
              Support
            </Link>
            <Link
              onClick={() => setExpanded(false)}
              href="/"
              className="px-3 nav-link "
            >
              Login
            </Link>
            <button className="btnReqDemo py-2 px-4 ml-4 my-4 w-sm-50">
              Request Demo
            </button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
