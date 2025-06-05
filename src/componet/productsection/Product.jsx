import "./product.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = () => {
  return (
    <>
      <h2 className="product-heading">What We are offer</h2>
      <div className="product-cardgroup">
        <Container>
          <Row>
            {/* first-card */}
            <Col className="col">
              <Card>
                <Card.Img
                  variant="top"
                  src="./public/product-img/product-c1.png"
                  className="card-img"
                />
                <Card.Body className="card-body">
                  <div className="heading">
                    <Card.Title className="card-tital">
                      HDPE/ PP Tapes
                    </Card.Title>
                    <a href="#">
                      <img
                        src="./public/product-img/product-b.png"
                        alt=""
                        height="30px"
                        width="30px"
                        className="b"
                      />{" "}
                    </a>
                  </div>
                  <Card.Text className="card-text">
                    In the world of woven packaging, the tape is considered as
                    the soul of bags as the quality depends more or less on it.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/*second -card */}
            <Col className="col">
              <Card>
                <Card.Img
                  variant="top"
                  src="./public/product-img/product-c2.png"
                  className="card-img"
                />
                <Card.Body className="card-body">
                  <div className="heading">
                    <Card.Title className="card-tital">
                      HDPE/ PP Woven Fabrics
                    </Card.Title>
                    <a href="#">
                      {" "}
                      <img
                        src="./public/product-img/product-b.png"
                        alt=""
                        height="30px"
                        width="30px"
                        className="b"
                      />
                    </a>
                  </div>
                  <Card.Text className="card-text">
                    Without fabric, woven packaging would be the next impossible
                    thing unless we get some other viable alternative.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* third-card */}
            <Col className="col">
              <Card>
                <Card.Img
                  variant="top"
                  src="./public/product-img/product-c3.png"
                  className="card-img"
                />
                <Card.Body className="card-body">
                  <div className="heading">
                    <Card.Title className="card-tital">
                      HDPE/ PP Woven Bag
                    </Card.Title>
                    <a href="#">
                      {" "}
                      <img
                        src="./public/product-img/product-b.png"
                        alt=""
                        height="30px"
                        width="30px"
                        className="b"
                      />{" "}
                    </a>
                  </div>
                  <Card.Text className="card-text">
                    Woven bags are manufactured with the help of Woven Fabric.
                    These kinds of bags are widely used in the packaging
                    industry.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Product;
