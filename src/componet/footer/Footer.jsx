import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// icons
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-main-div">
      <Container>
        <Row className="footer-row">
          <Col sm={1} md={3} lg={3}>
            <div className="knack">
              <div className="logo2">
                <img
                  src="./public/nav-img/nav-logo.png"
                  height="100px"
                  width="77px"
                  alt=""
                />
              </div>
              <h1 className="footer-heading"> Knack Packaging</h1>
            </div>
            <div className="footer-icons">
              <a href="#">
                {" "}
                <FaFacebookF className="f-icon" />
              </a>
              <a href="#">
                <FaTwitter className="f-icon" />
              </a>
              <a href="#">
                <FaLinkedin className="f-icon" />
              </a>
              <a href="#">
                <FaInstagramSquare className="f-icon" />
              </a>
            </div>
          </Col>
          <Col sm={1} md={3} lg={3}>
            <div className="footer-info">
              <h4>Pages</h4>

              <a href="#">
                <p>About Us</p>
              </a>
              <a href="#">
                <p>Quality Assurance</p>
              </a>
              <a href="#">
                {" "}
                <p>Product Type</p>
              </a>
              <a href="#">
                {" "}
                <p>Product Use</p>
              </a>
              <a href="#">
                {" "}
                <p>I Am 100% Recyclable</p>
              </a>
            </div>
          </Col>
          <Col sm={1} md={3} lg={3}>
            <div className="footer-info">
              <h4>Product </h4>

              <a href="#">
                <p>HDPE/ PP Tapes</p>
              </a>
              <a href="#">
                <p>HDPE/ PP Woven Fabrics</p>
              </a>
              <a href="#">
                {" "}
                <p>HDPE/ PP Woven Bag</p>
              </a>
            </div>
          </Col>
          <Col sm={1} md={3} lg={3}>
            <div className="footer-info">
              <h4>About us</h4>
              <p style={{ width: "195px" }}>
                You can contact Us to send email to us
              </p>
              <input type="text" placeholder="Your email" className="email" />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="my-info">
        <h5>Devloped by Bhagirath</h5>
        <div className="mo">
          <FaPhoneAlt size="15px" style={{ marginTop: "-5px" }} />
          <h6>7778999443</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
