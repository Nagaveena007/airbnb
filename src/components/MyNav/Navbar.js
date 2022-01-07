import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  Nav,
  Navbar,
  Col,
  Row,
  Container,
  Image,
  Button,
} from "react-bootstrap";
import { FiGlobe } from "react-icons/fi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const Navbar1 = () => {
  let src;
  const navElements = [
    {
      name: "Place to stay",
    },
    {
      name: "Experiences",
    },
    {
      name: "Online Experiences",
    },
  ];
  const [navbar, setNavbar] = useState(false);
  const [logo, setLogo] = useState(false);
  const [globe__btn, setGlobe] = useState(false);
  const [become__host__btn, setHost] = useState(false);
  const [profile__btn, setUser] = useState(false);
  const [isScroll, setIsscroll] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const changeLogo = () => {
    if (window.scrollY >= 80) {
      setLogo(true);
      src =
        "https://1000logos.net/wp-content/uploads/2017/08/Airbnb-symbol.jpg";
    } else {
      setLogo(false);
      src =
        "https://logosmarken.com/wp-content/uploads/2020/07/Airbnb-Logo.png";
    }
  };
  const changeGlobe = () => {
    if (window.scrollY >= 80) {
      setGlobe(true);
    } else {
      setGlobe(false);
    }
  };
  const changeHost = () => {
    if (window.scrollY >= 80) {
      setHost(true);
    } else {
      setHost(false);
    }
  };
  const changeUser = () => {
    if (window.scrollY >= 80) {
      setUser(true);
    } else {
      setUser(false);
    }
  };
  const onScroll = () => {
    if (window.scrollY >= 100) {
      setIsscroll(true);
    } else {
      setIsscroll(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  window.addEventListener("scroll", changeLogo);
  window.addEventListener("scroll", changeGlobe);
  window.addEventListener("scroll", changeHost);
  window.addEventListener("scroll", changeUser);

  useEffect(() => window.addEventListener("scroll", onScroll), []);
  return (
    <>
      <Navbar
        bg="bg-dark"
        variant="dark"
        expand="lg"
        className={navbar ? "navbar active" : "navbar"}
      >
        <Navbar.Brand className={logo ? "logo active" : "logo"}>
          <Image />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav__bar__center">
          {isScroll ? (
            <div style={{}} className="search__box__div__onScroll">
              <Container className="search__container__onscroll">
                <Row className="search__bar__elements__row">
                  <small>start your search</small>
                  <Col md={3} className="mt-1 d-flex">
                    <div className="" style={{ paddingLeft: "4.4em" }}>
                      <span className="search__btn__onscroll ">
                        <FiSearch
                          className=""
                          style={{ height: "20px", width: "20px" }}
                        />
                      </span>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          ) : (
            <Nav className="">
              {navElements.map((e, i) => {
                return (
                  <Nav.Link key={i} className="nav-links">
                    {e.name}
                  </Nav.Link>
                );
              })}
            </Nav>
          )}
        </Navbar.Collapse>
        <Button
          className={
            become__host__btn ? "become__host__btn active" : "become__host__btn"
          }
        >
          Become a Host
        </Button>
        <Button className={globe__btn ? "globe__btn active" : "globe__btn"}>
          <FiGlobe />
        </Button>
        <button
          className={profile__btn ? "profile__btn active" : "profile__btn"}
        >
          <AiOutlineMenu className="profile__more__btn" />
          <IoPersonCircleSharp className="person__btn" />
        </button>
      </Navbar>
      <div style={{}} className="search__box__div">
        <Container className="search__container">
          <Row className="search__bar__elements__row">
            <Col md={3} className="  mt-1  search__inputs">
              <small className="search__bar__small__text"> Location</small>
              <br />
              <span className="search__text"> Where are you goining?</span>
            </Col>
            <span className="search__hr__line mr-2"></span>
            <Col md={2} className="mt-1  search__inputs">
              <small className="search__bar__small__text">Check in</small>
              <br />
              <span className="search__text">Add dates</span>
            </Col>
            <span className="search__hr__line mr-2"></span>
            <Col md={3} className="mt-1  search__inputs">
              <small className="search__bar__small__text"> Check out</small>
              <br />
              <span className="search__text">Add dates</span>
            </Col>
            <span className="search__hr__line mr-2"></span>
            <Col md={3} className="mt-1  search__inputs d-flex">
              <div className="" role="button">
                <span>
                  <small className="search__bar__small__text"> Guests</small>
                </span>

                <br />
                <span className="search__text  ">Add guests</span>
              </div>
              <div className=" ml-auto">
                <span
                  className="search__btn mr-auto mt-2"
                  style={{ paddingLeft: "3.4em" }}
                >
                  <FiSearch
                    className=""
                    style={{ height: "20px", width: "20px" }}
                  />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Navbar1;
