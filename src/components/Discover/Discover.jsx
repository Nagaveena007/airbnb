import "./Discover.css";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
const cards = [
  {
    heading: "Things to do ",
    heading1: "on your trip",
    button: "Experiences",
    src: "https://cdn.coverstand.com/45719/657523/article_assets/35b6dfb8de29978befb3951ed8eebe79f6d23186.jpg",
  },
  {
    heading: "Things to do ",
    heading1: "from home",
    button: "Online Experiences",
    src: "https://images.squarespace-cdn.com/content/v1/5a0292a18dd041e3daee3162/1554940208975-GJI1G8TPHQNZMGJFXS2S/claypot2.JPG?format=750w",
  },
];
const Discover = () => {
  return (
    <>
      <Container fluid className="container__deco">
        <h1 className=" mt-5 ">Discover Airbnb Experiences</h1>
        <Row className="d-flex justify-content-center">
          {cards.map((card, i) => {
            return (
              <Card
                key={i}
                className="bg-dark text-white mr-3 ml-2 mb-5"
                style={{ borderRadius: "0.8rem" }}
              >
                <img
                  style={{ height: "100vh", width: "92vh" }}
                  className="card__deco"
                  src={card.src}
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title>
                    <Container className="card__text">
                      <Row>
                        <Col>
                          <h1 className="card__headding">{card.heading}</h1>
                        </Col>
                      </Row>
                      <h1 className="card__headding">{card.heading1}</h1>
                    </Container>
                  </Card.Title>
                  <Card.Text className="">
                    <Button className="card__btn">{card.button}</Button>
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            );
          })}
        </Row>
      </Container>
      <Container fluid className="d-flex justify-content-center">
        <Card
          className=" text-white mt-5 mb-5"
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
            src="https://media.istockphoto.com/photos/without-a-worry-in-the-worldhow-retirement-should-be-picture-id1158818000?b=1&k=20&m=1158818000&s=170667a&w=0&h=nk5NBePZRmKO5uy851_0J_kstspKh1RouDtlVXiv7AY="
            alt="Card image"
          />
          <Card.ImgOverlay className="d-flex ">
            <Col md={6}>
              <Card.Title className=" card__text1 ">
                <h1 className="card__headlines">Questions about hosting?</h1>
                <Card.Text className="d-flex align-element-start ">
                  <Button className="card__btn">Ask a Superhost</Button>
                </Card.Text>
              </Card.Title>
            </Col>
          </Card.ImgOverlay>
        </Card>
      </Container>
    </>
  );
};
export default Discover;
