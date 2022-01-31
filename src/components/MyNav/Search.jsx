import { useEffect, useState } from "react";
import { Container, Row, Col, Navbar, Dropdown } from "react-bootstrap";
import { GoSearch } from "react-icons/go";
import { MdArrowForwardIos } from "react-icons/md";
import "../MyNav/Search.css";
const searchStyle = {
  borderRadius: "50%",
  fontSize: "20px",
  backgroundColor: "#ff385c",
  padding: "8px 10px",
  color: "white",
};

const search = {
  backgroundColor: "#ff385c",
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
const Search = () => {
  const [isClicked, setIsClicked] = useState("0");
  const [displayToggle, setDisplayToggle] = useState("0");

  const isClickedToggle = (number) => {
    if (isClicked === number) {
      setIsClicked({ isClicked: "0" });
    } else {
      setIsClicked({ isClicked: number });
    }
  };

  const isDisplayToggle = (section) => {
    if (displayToggle === section) {
      setDisplayToggle({ displayToggle: "0" });
    } else {
      setDisplayToggle({ displayToggle: section });
    }
  };
  /*   const [isClicked, setIsClicked] = useState("0");
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
  }; */

  return (
    <Container
      fluid
      className="searchBar dRelative px-5"
      style={{
        background: "black",
      }}
    >
      <Row
        className="d-flex  flex-column justify-content-center"
        style={{
          height: "9vh",
          width: "800px",
          marginLeft: "16em",
        }}
      >
        {/*   <Col className="d-flex  justify-content-around ">
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
        </Col> */}
        <Col className=" dRelative bg-light d-flex justify-content-between roundedBorder align-items-center m-0 p-0 ">
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
              <input className="fontSize" placeholder="Where are you going?" />
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

          <div className={`roundedBorder  pl-4  p-2  w-100 pointer `}>
            <div className={`d-flex align-items-start flex-column`}>
              <span className="fontSize fontBold ">Check in</span>
            </div>
            <span className="fontSize1">Add Dates</span>
            {/*  <div
              className="dAbsolute"
              style={{
                backgroundColor: "white",
                position: "absolute",
                left: "100px",
                top: "75px",
                zIndex: "10",
                minWidth: "500px",
                minHeight: "200px",
              }}
            ></div> */}
          </div>
          <div className={`roundedBorder  pl-4 p-2  w-100 pointer `}>
            <div className={`d-flex align-items-start flex-column`}>
              <span className="fontSize fontBold">Check out</span>
            </div>

            <span className="fontSize1">Add Dates</span>
          </div>
          {/*  <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              alignLeft
              className=""
            ></Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="" href="#/action-1">
                Sign Up
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">Log in</Dropdown.Item>
              <hr />
              <Dropdown.Item href="#/action-2">Host your home</Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Host an experience
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Help</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}

          <div
            className={`roundedBorder pl-4 p-2  w-100 pointer`}
            style={{ minWidth: "260px" }}
          >
            <div
              className={`d-flex justify-content-between  align-items-start`}
            >
              <div className="d-flex align-items-start flex-column ">
                <span className="fontSize fontBold">Guests</span>
                <span className="fontSize1">Add guests</span>
              </div>
              <div
                className="d-flex align-items-center roundedBorder"
                style={search}
              >
                <span style={searchStyle}>
                  <GoSearch />
                </span>
                <span className="fontBold text-white mr-3" style={{}}>
                  Search
                </span>
              </div>
            </div>
            {/*  <div
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
            </div> */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
