import "./About.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const About = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={6}>
          <div className="about-info">
            <div className="heading">
              <h2>
                About Knack <span>Packaging Pvt. Ltd. </span>
              </h2>
            </div>
            <p>
              At Knack, we believe in manufacturing quality products which
              signify the real art of packaging. We use the most excellent
              quality materials to make BOPP laminated PP woven bags with the
              industry set standards and regulations. Our bags are known for
              their perfect finish, long-lasting build and high quality. The
              Knack family is now a team of 900+ members from diverse
              backgrounds who have stood with us in our thick and thin. We are
              endorsed by a leading-edge infrastructure that's well-equipped
              with the most modern machines and equipment.
            </p>
            <a href="#">
              <button type="button" class="btn btn-danger">
                Learn More
              </button>
            </a>
          </div>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <div className="aboutimg-div">
            <img
              src="about-img/aboutimg.png"
              alt="Factory img"
              height="550px"
              width="500px"
              className="a-img"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
