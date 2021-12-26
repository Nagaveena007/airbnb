import { Component } from "react";
import { Container, Row, Card } from "react-bootstrap";
let i;
class Inspiration extends Component {
  state = {};
  render() {
    return (
      <>
        <Container>
          <h2>Inspiration for your next trip</h2>

          <Row>
            <div className="d-flex">
              <Card className="card">
                <Card.Img
                  variant="top"
                  src="https://a0.muscache.com/im/pictures/1bbded7d-51fe-49b8-b85d-e458b3e218bf.jpg?im_w=320"
                />
                <Card.Body id="card-img1">
                  <Card.Title>
                    <h2>Hamburg</h2>
                  </Card.Title>
                  <Card.Text>255 kilometers away</Card.Text>
                </Card.Body>
              </Card>
              <Card className="card">
                <Card.Img
                  variant="top"
                  src="https://a0.muscache.com/im/pictures/ee86b8d6-b214-43f5-912c-3db2637a5724.jpg?im_w=320"
                />
                <Card.Body>
                  <Card.Title>
                    <h2>Munich</h2>
                  </Card.Title>
                  <Card.Text>504 kilometers away</Card.Text>
                </Card.Body>
              </Card>
              <Card className="card">
                <Card.Img
                  variant="top"
                  src="https://a0.muscache.com/im/pictures/b4e025ab-b353-41fb-814d-5e4f80571186.jpg?im_w=320"
                />
                <Card.Body>
                  <Card.Title>
                    <h2>Rostock</h2>
                  </Card.Title>
                  <Card.Text>195 kilometers away</Card.Text>
                </Card.Body>
              </Card>
              <Card className="card">
                <Card.Img
                  variant="top"
                  src="https://a0.muscache.com/im/pictures/a7a97132-3ab9-4969-ad23-32c676193df7.jpg?im_w=320"
                />
                <Card.Body>
                  <Card.Title>
                    <h2> Dresden</h2>
                  </Card.Title>
                  <Card.Text>165 kilometers away</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}
export default Inspiration;
