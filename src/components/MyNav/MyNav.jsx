import { Component } from "react";
import { Nav, Button, FormControl, Form, Navbar } from "react-bootstrap";
import { FiGlobe } from "react-icons/fi";

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
          className="nav__bg text-light d-flex justify-content-center"
        >
          <Navbar.Brand
            style={{
              height: "16vh",
              width: "26vh",
            }}
            href="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-symbol.jpg"
          ></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="nav__link mr-5 ml-4">Place to stay</Nav.Link>
              <Nav.Link className="nav__link mr-5 ml-4">Experiences</Nav.Link>
              <Nav.Link className="nav__link mr-5 ml-4">
                online Experiences
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <a variant="primary" className="btn btn-dark become__host__btn">
            Become a Host
          </a>
          <FiGlobe />
        </Navbar>
        <hr />
      </>
    );
  }
}
export default MyNav;
