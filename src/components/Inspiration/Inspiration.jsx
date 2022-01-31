import { Component } from "react";
import { Container, Row, Card } from "react-bootstrap";
import "./Inspiration.css";
const cities = [
  {
    name: "Hamburg",
    km: "255 kilometers away",
    src: "https://a0.muscache.com/im/pictures/1bbded7d-51fe-49b8-b85d-e458b3e218bf.jpg",
    style: "#d93b30",
  },
  {
    name: "Munich",
    km: "504 kilometers away",
    src: "https://a0.muscache.com/im/pictures/ee86b8d6-b214-43f5-912c-3db2637a5724.jpg",
    style: "#de3151",
  },
  {
    name: "Rostock",
    km: "195 kilometers away",
    src: "https://a0.muscache.com/im/pictures/b4e025ab-b353-41fb-814d-5e4f80571186.jpg",
    style: "#cc2d4a",
  },
  {
    name: "Dresden",
    km: "165 kilometers away",
    src: "https://a0.muscache.com/im/pictures/a7a97132-3ab9-4969-ad23-32c676193df7.jpg",
    style: "#bc1a6e",
  },
];
const Inspiration = () => {
  return (
    <>
      <Container fluid className="container__deco">
        <h1 className=" mt-5 mb-5">Inspiration for your next trip</h1>
        <Row>
          <div className="d-flex">
            {cities.map((city, i) => {
              return (
                <Card
                  key={i}
                  className="card__deco mr-2 ml-2"
                  style={{ backgroundColor: city.style }}
                >
                  <Card.Img
                    variant="top"
                    className="card-img1"
                    src={city.src}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h2>{city.name}</h2>
                    </Card.Title>
                    <Card.Text>{city.km}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </Row>
      </Container>
    </>
  );
};
export default Inspiration;
