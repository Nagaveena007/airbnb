import { Component } from "react";
import { Row, Container, Col, Navbar, Nav, Card, Image } from "react-bootstrap";
import "./Home.css";
class Home extends Component {
  state = {};

  render() {
    return (
      <>
        <Container fluid className="home__bg d-flex">
          <Card
            className="bg-dark text-white mt-4 mb-4"
            style={{ borderRadius: "0.8rem", width: "92%" }}
          >
            <img
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "0.8rem",
              }}
              className="card__deco"
              src="home1.jpg"
              alt="Card image"
            />
            <Card.ImgOverlay className="d-flex align-items-end justify-content-center">
              <Card.Title className=" card__text ">
                <h1 className="card__headding ">
                  Not sure where to go? Perfect.
                </h1>
                <Card.Text className="d-flex align-element-center justify-content-center">
                  <button className="card__btn1">I'm flexible</button>
                </Card.Text>
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Container>
        <Container fluid className="home__bg d-flex">
          <Card
            className=" mt-4 mb-4"
            style={{
              borderRadius: "0.8rem",
              width: "92%",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                height: "100vh",
                borderRadius: "0.8rem",
                backgroundColor: "#ebebeb",
                display: "flex",
                alignItems: "center",
              }}
            ></div>
            <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
              <Col md={6}>
                <Card.Title className=" card__text">
                  <div className="d-flex  justify-content-center">
                    <h4 className="" style={{ color: "black" }}>
                      Introducing
                    </h4>
                  </div>
                  <div className="d-flex  justify-content-center">
                    <h1 className=" card__headding1 ">Airbnb </h1>
                  </div>
                  <div className="d-flex  justify-content-center">
                    <h1 className="card__headding1 ">gift cards</h1>
                  </div>
                  <Card.Text className="d-flex align-element-center justify-content-center">
                    <button className="card__btn2">shop now</button>
                  </Card.Text>
                </Card.Title>
              </Col>
              <Col md={6}>
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "transparent",
                  }}
                  src="https://a0.muscache.com/im/pictures/2f283d24-f171-4aa1-a88d-cf121012582f.jpg"
                />
              </Col>
            </Card.ImgOverlay>
          </Card>
        </Container>
      </>
    );
  }
}
export default Home;
