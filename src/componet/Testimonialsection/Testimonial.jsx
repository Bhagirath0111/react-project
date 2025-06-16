import "./Testimonial.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <>
      <h2 className="test-heading"> Testimonial</h2>
      <Container>
        <Row className="main-test">
          {/* <div className="test-col-div"> */}
          {/* first */}
          <Col sm={12} md={4} lg={4}>
            <div className="test-fiest-div">
              <div className="test-img">
                <img
                  src="/test-img/test-1.png"
                  alt=""
                  height="90px"
                  width="90px"
                />
              </div>
              <p className="test-p">
                Donec auctor ligula sit amet mauris tincidunt, et viverra libero
                congue. Morbi vehicula interdum felis, non euismod felis auctor
                non. Phasellus facilisis urna ut metus mollis, a sollicitudin
                libero suscipit.
              </p>
              <br />
              <hr />

              <div className="lorem">
                <h3>Lorem Ipsum</h3>
                <p>@loremipsumtext</p>
              </div>
              <div className="test-icons">
                <FaStar size="20px" />
                <FaStar size="20px" />
                <FaStar size="20px" />
                <FaStar size="20px" />
                <FaStar size="20px" />
              </div>
            </div>
          </Col>

          {/* second */}
          <Col sm={12} md={4} lg={4}>
            <div className="test-fiest-div">
              <div className="test-img">
                <img
                  src="/test-img/test-1.png"
                  alt=""
                  height="90px"
                  width="90px"
                />
              </div>
              <p className="test-p">
                Donec auctor ligula sit amet mauris tincidunt, et viverra libero
                congue. Morbi vehicula interdum felis, non euismod felis auctor
                non. Phasellus facilisis urna ut metus mollis, a sollicitudin
                libero suscipit.
              </p>
              <br />
              <hr />

              <div className="lorem">
                <h3>Lorem Ipsum</h3>
                <p>@loremipsumtext</p>
              </div>
              <div className="test-icons">
                <FaStar size="20px" />
                <FaStar size="20px" />
                <FaStar size="20px" />
                <FaStar size="20px" />
                <FaStar size="20px" />
              </div>
            </div>
          </Col>

          {/* third */}
          <Col sm={12} md={3} lg={3}>
            <div className="test-fiest-div">
              <div className="test-img">
                <img
                  src="/test-img/test-1.png"
                  alt=""
                  height="90px"
                  width="90px"
                />
              </div>
              <p className="test-p">
                Donec auctor ligula sit amet mauris tincidunt, et viverra libero
                congue. Morbi vehicula interdum felis, non euismod felis auctor
                non. Phasellus facilisis urna ut metus mollis, a sollicitudin
                libero suscipit.
              </p>
              <br />
              <hr />

              <div className="lorem">
                <h3>Lorem Ipsum</h3>
                <p>@loremipsumtext</p>
              </div>
              <div className="test-icons">
                <FaStar size="20px" />
                <FaStar size="20px" />
                <FaStar size="20px" />
                <FaStar size="20px" />
                <FaStar size="20px" />
              </div>
            </div>
          </Col>
          {/* </div> */}
        </Row>
      </Container>
    </>
  );
};

export default Testimonial;
