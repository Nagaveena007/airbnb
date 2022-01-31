import "./FooterPart.css";
import React from "react";
import styled from "styled-components";
import { Col, Form, Row, Container } from "react-bootstrap";

import { FiGlobe } from "react-icons/fi";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Heading = styled.p`
  font-size: 16px;
  color: black;
  margin-bottom: 20px;
  font-weight: bold;
`;
const FooterLink = styled.a`
  color: black;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;
const FooterPart = () => {
  return (
    <>
      <Container fluid id="container__deco">
        <Row className="d-flex justify-content-center">
          <Col className="column__deco" md={3}>
            <Heading>Support</Heading>

            <FooterLink href="#"> Help Center</FooterLink>
            <FooterLink href="#">Safety information</FooterLink>
            <FooterLink href="#">Cancellation options</FooterLink>
            <FooterLink href="#"> Our COVID-19 Response</FooterLink>
            <FooterLink href="#">
              Supporting people with disabilities
            </FooterLink>
            <FooterLink href="#"> Report a neighborhood concern</FooterLink>
          </Col>
          <Col className="column__deco" md={3}>
            <Heading>Community</Heading>
            <FooterLink href="#">
              Airbnb.org: disaster relief housing
            </FooterLink>
            <FooterLink href="#">Support Afghan refugees</FooterLink>
            <FooterLink href="#">Celebrating diversity & belonging</FooterLink>
            <FooterLink href="#">Combating discrimination</FooterLink>
          </Col>
          <Col className="column__deco" md={3}>
            <Heading>Hosting</Heading>
            <FooterLink href="#">Try hosting</FooterLink>
            <FooterLink href="#"> AirCover: protection for Hosts</FooterLink>
            <FooterLink href="#">Explore hosting resources</FooterLink>
            <FooterLink href="#">Visit our community forum</FooterLink>
            <FooterLink href="#">How to host responsibly</FooterLink>
          </Col>
          <Col className="column__deco" md={3}>
            <Heading>About</Heading>

            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span>Newsroom</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span>Learn about new features</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span>Letter from our founders</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span>Careers</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span>Investors</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span>Airbnb Luxe</span>
              </i>
            </FooterLink>
          </Col>
        </Row>
        <hr style={{ width: "97%" }} />
        <Row className="d-flex justify-content-between mb-4">
          <Col className="" md={8}>
            ©2022 Airbnb, Inc.·Privacy·Terms·Sitemap
          </Col>

          <Col className="mr-auto" md={2}>
            <div>
              <FooterLink href="#">
                <FiGlobe className="globe__icon" />
                <strong>English (US) </strong>€ <strong> EUR</strong>
              </FooterLink>
            </div>
          </Col>

          <Col className="" md={2}>
            <div>
              <BsFacebook className="ml-4 social__icons" />
              <BsTwitter className="ml-4 social__icons" />
              <BsInstagram className="ml-4 social__icons" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FooterPart;
