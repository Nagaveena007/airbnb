/* import { Component } from "react";
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
  state = { searchString: "" };

  searchStringHandler = (e) => {
    if (e.keyCode === 13) {
      // WHEN ENTER KEY IS PRESSED
      this.props.searchBar(this.state.searchString);
    } else {
      this.setState({ searchString: e.currentTarget.value });
    }
  };

  render() {
    return (
      <>
        <Navbar
          bg="bg-dark"
          variant="dark"
          expand="lg"
          className="nav__bg d-flex justify-content-around"
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
              <Nav.Link className="nav__link mr-2 ml-5">Place to stay</Nav.Link>
              <Nav.Link className="nav__link mr-2 ml-2">Experiences</Nav.Link>
              <Nav.Link className="nav__link  ml-2">
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
              <div className="mt-1  search__inputs">
                <small className="search__bar__small__text"> Location</small>
                <br />
                <span className="search__text"> Where are you goining?</span>
              </div>
              <span className="search__hr__line mr-2"></span>
              <div className="d-flex">
                <div className="mt-1  search__inputs">
                  <small className="search__bar__small__text">Check in</small>
                  <br />
                  <span className="search__text">Add dates</span>
                </div>
                <span className="search__hr__line mr-2"></span>
                <div className="mt-1  search__inputs">
                  <small className="search__bar__small__text"> Check out</small>
                  <br />
                  <span className="search__text">Add dates</span>
                </div>
              </div>
              <span className="search__hr__line mr-2"></span>
              <div className="d-flex">
                <div className="d-flex mt-1  search__inputs">
                  <div className="" role="button">
                    <span>
                      <small className="search__bar__small__text">
                        {" "}
                        Guests
                      </small>
                    </span>

                    <br />
                    <span className="search__text  ">Add guests</span>
                  </div>
                  <div>
                    <span className="search__btn mr-auto">
                      <FiSearch
                        className=""
                        style={{ height: "20px", width: "20px" }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
export default MyNav; */

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

class Nav1 extends Component {
  state = { searchString: "" };

  searchStringHandler = (e) => {
    if (e.keyCode === 13) {
      // WHEN ENTER KEY IS PRESSED
      this.props.searchBar(this.state.searchString);
    } else {
      this.setState({ searchString: e.currentTarget.value });
    }
  };

  render() {
    return (
      <>
        <Navbar
          bg="bg-dark"
          variant="dark"
          expand="lg"
          className="nav__bg d-flex justify-content-around"
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
              <Nav.Link className="nav__link mr-2 ml-5">Place to stay</Nav.Link>
              <Nav.Link className="nav__link mr-2 ml-2">Experiences</Nav.Link>
              <Nav.Link className="nav__link  ml-2">
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
              <Col md={3} className="  mt-1 mb-2 search__inputs">
                <small className="search__bar__small__text"> Location</small>
                <br />
                <span className="search__text"> Where are you goining?</span>
              </Col>

              <span className="search__hr__line mr-2"></span>
              <Col md={2} className="mt-1 mb-2 search__inputs">
                <small className="search__bar__small__text">Check in</small>
                <br />
                <span className="search__text">Add dates</span>
              </Col>
              <span className="search__hr__line mr-2"></span>
              <Col md={2} className="mt-1 mb-2 search__inputs">
                <small className="search__bar__small__text"> Check out</small>
                <br />
                <span className="search__text">Add dates</span>
              </Col>
              <span className="search__hr__line mr-2"></span>
              <Col md={4} className="mt-1 mb-2 search__inputs d-flex">
                <div className="" role="button">
                  <span>
                    <small className="search__bar__small__text"> Guests</small>
                  </span>

                  <br />
                  <span className="search__text  ">Add guests</span>
                </div>
                <div>
                  <span className="search__btn mr-auto">
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
export default Nav1;
