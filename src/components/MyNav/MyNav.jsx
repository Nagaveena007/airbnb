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
