import { Component } from "react";
import {
  Nav,
  Button,
  FormControl,
  Row,
  Navbar,
  Container,
  Col,
} from "react-bootstrap";
import { FiGlobe } from "react-icons/fi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import "../MyNav/MyNav.css";

class MyNav extends Component {
  state = {};

  render() {
    return (
      <>
        <Navbar
          bg="bg-dark"
          variant="dark"
          expand="lg"
          className="nav__bg d-flex justify-content-around sticky-top"
        >
          <Navbar.Brand className="logo">
            <img
              style={{
                height: "6vh",
                width: "15vh",
              }}
              src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-symbol.jpg"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="nav__bar__center">
            <Nav className="">
              <Nav.Link className="nav__link mr-2 ml-5 active">
                Place to stay
              </Nav.Link>
              <Nav.Link className="nav__link mr-2 ml-2 active">
                Experiences
              </Nav.Link>
              <Nav.Link className="nav__link  ml-2 active">
                online Experiences
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <a variant="primary" className="btn btn-dark become__host__btn">
            Become a Host
          </a>
          <a variant="primary" className="btn btn-dark globe__btn">
            <FiGlobe />
          </a>
          <button className="profile__btn">
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
                  <span className="search__btn mr-auto mt-2">
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
  }
}
export default MyNav;
/**
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GoSearch } from "react-icons/go";
import { MdArrowForwardIos } from "react-icons/md";
import "../MyNav/MyNav.css";
const searchStyle = {
  borderRadius: "50%",
  fontSize: "20px",
  backgroundColor: "rgb(227,28,93)",
  padding: "8px 16px",
  color: "white",
};

const search = {
  backgroundColor: "rgb(227,28,93)",
  padding: "0px 4px",
};

const inIAmFlexiBtn = {
  color: "purple",
  borderRadius: "30px",
  fontSize: "20px",
  fontWeight: "600",
  padding: "10px 20px",
  border: "1px solid rgb(221,221,221)",
  boxShadow: "0px 0px 4px 1px rgb(221,221,221)",
};
const Nav1 = () => {
  const [isClicked, setIsClicked] = useState("0");
  const [displayToggle, setDisplayToggle] = useState("0");

  const isDisplayToggle = (section) => {
    if (displayToggle === section) {
      setDisplayToggle({ displayToggle: "0" });
    } else {
      setDisplayToggle({ displayToggle: section });
    }
  };

  const isClickedToggle = (number) => {
    if (isClicked === number) {
      setIsClicked({ isClicked: "0" });
    } else {
      setIsClicked({ isClicked: number });
    }
  };

  return (
    <Container
      className="searchBar dRelative px-5"
      style={{ margin: "100px auto 10px", width: "900px" }}
    >
      <Row className="d-flex  flex-column justify-content-center">
        <Col className="d-flex  justify-content-around ">
          <div
            className="d-flex text-white text-left"
            style={{
              position: "absolute",
              zIndex: "3",
              bottom: "0",
              marginBottom: "35px",
              fontSize: "17px",
            }}
          >
            <p href="#features" className="mx-3">
              Place to stay
            </p>
            <p href="#pricing" className="mx-3">
              Experience
            </p>
            <p href="#pricing" className="mx-3">
              Online Experiences
            </p>
          </div>
        </Col>
        <Col className=" dRelative bg-light d-flex justify-content-between roundedBorder m-0 p-0">
          <div
            className={` roundedBorder pl-4  p-2  w-100 pointer ${
              setIsClicked === 1 && "shadowOnRightEdge"
            }`}
          >
            <div
              className={`d-flex align-items-start flex-column  `}
              onClick={(e) => {
                isClickedToggle(1);
                isDisplayToggle("display location");
              }}
            >
              <span className="fontSize fontBold">Location</span>
              <span className="fontSize">Where are you going?</span>
            </div>

            <div
              className=" bg-light m-1 p-4"
              style={{
                borderRadius: "20px",
                backgroundColor: "white",
                position: "absolute",
                left: "0",
                top: "75px",
                zIndex: "10",
                minWidth: "500px",
                minHeight: "150px",
                display:
                  setDisplayToggle === "display location" ? "block" : "none",
              }}
            >
              <p
                style={{
                  textAlign: "left",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                GO ANYWHERE, ANYTIME
              </p>
              <div
                className="d-flex justify-content-between"
                style={inIAmFlexiBtn}
              >
                <span>I'm flexible</span>
                <MdArrowForwardIos />
              </div>
            </div>
          </div>

          <div
            className={`roundedBorder  pl-4  p-2  w-100 pointer ${
              setIsClicked === 2 && "shadowOnBothEdge"
            }`}
          >
            <div
              className={`d-flex align-items-start flex-column`}
              onClick={(e) => {
                isClickedToggle(2);
                isDisplayToggle("show calender");
              }}
            >
              <span className="fontSize fontBold ">Check in</span>
            </div>
            <span className="fontSize">Add Dates</span>
            <div
              className="dAbsolute"
              style={{
                backgroundColor: "white",
                position: "absolute",
                left: "100px",
                top: "75px",
                zIndex: "10",
                minWidth: "500px",
                minHeight: "200px",
                display:
                  setDisplayToggle === "show calender" ? "block" : "none",
              }}
            ></div>
          </div>

          <div
            className={`roundedBorder  pl-4 p-2  w-100 pointer ${
              setIsClicked === 3 && "shadowOnBothEdge"
            }`}
          >
            <div
              className={`d-flex align-items-start flex-column`}
              onClick={(e) => {
                isClickedToggle(3);
                isDisplayToggle("show calender");
              }}
            >
              <span className="fontSize fontBold">Check out</span>
            </div>

            <span className="fontSize">Add Dates</span>
          </div>

          <div
            className={`roundedBorder pl-4 p-2  w-100 pointer ${
              setIsClicked === 4 && "shadowOnLeftEdge"
            }`}
            style={{ minWidth: "260px" }}
          >
            <div
              className={`d-flex justify-content-between  align-items-start`}
              onClick={(e) => {
                isClickedToggle(4);
                isDisplayToggle("add guest");
              }}
            >
              <div className="d-flex align-items-start flex-column ">
                <span className="fontSize fontBold">Guests</span>
                <span className="fontSize">Add guests</span>
              </div>
              <div
                className="d-flex align-items-center roundedBorder"
                style={search}
              >
                <span
                  className="fontBold text-white pl-2"
                  style={{
                    display: isDisplayToggle > "0" ? "block" : "none",
                  }}
                >
                  Search
                </span>
                <span style={searchStyle}>
                  <GoSearch />
                </span>
              </div>
            </div>
            <div
              className=" bg-light m-1 p-4 text-left"
              style={{
                borderRadius: "20px",
                backgroundColor: "white",
                position: "absolute",
                right: "0",
                top: "75px",
                zIndex: "10",
                minWidth: "500px",
                minHeight: "150px",
                display: isDisplayToggle === "add guest" ? "block" : "none",
              }}
            >
              <ul className="list-unstyled ">
                <li>Adults</li>
                <li>Ages 13 or above</li>
                <hr />

                <li>Children</li>
                <li>Ages 2–12</li>
                <hr />

                <li>Infants</li>
                <li>Under 2</li>
                <hr />

                <li>Pets</li>
                <li>Bringing an assistance animal?</li>
                <hr />
              </ul>
              <p>
                If you're lucky enough to have more than 2 pets <br /> with you,
                be sure to let your host know.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Nav1;
 

 */
