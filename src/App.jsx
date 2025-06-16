import "./App.css";
// navbar
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
//  navbarend
//  herro-section
import Hero from "./componet/herrosectin/Hero";
// About-section
import About from "./componet/aboutsectoin/About";
// product-section
import Product from "./componet/productsection/Product";
// Reliable
import Reliable from "./componet/reliablsection/Reliable";
// Testimonial
import Testimonial from "./componet/Testimonialsection/Testimonial";
// Footer
import Footer from "./componet/footer/Footer";

const App = () => {
  return (
    <div className="main-div">
      <header>
        <div className="navigation">
          <Navbar expand="lg" className="bg-body-tertiary ">
            <div id="logo">
              <img
                src="nav-img/nav-logo.png"
                height="100px"
                width="77px"
                alt=""
              />
            </div>
            <Container className="nav">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="">
                <div className="nav-contact">
                  <div className="contect-num">
                    <FaPhoneAlt />
                    <p>+91 7927451130</p>
                  </div>
                  <div className="contect-gmil">
                    <CgMail size="25px" />
                    <p>info@knackpackaging.com</p>
                  </div>
                  <a href="#">
                    <p>Knack Galaxy (Login)</p>
                  </a>
                </div>

                <Nav className="me-auto" id="nav-items">
                  <Nav.Link href="#home" id="nav-link" className="home">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#quality assurance" id="nav-link" className="quality">
                    quality assurance
                  </Nav.Link>
                  <Nav.Link href="#product type" id="nav-link" className="product">
                    product type
                  </Nav.Link>
                  <Nav.Link href="#product use" id="nav-link" className="product">
                    product use
                  </Nav.Link>
                  <Nav.Link href="#i am 100% recyclable" id="nav-link" className="recyclable">
                    i am 100% recyclable
                  </Nav.Link>
                  <Nav.Link href="#Content us" id="nav-link" className="contect">
                    Content us
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>
      <section className="herro-section">
        <Hero />
      </section>
      <section className="about-section">
        <About />
      </section>
      <section className="product-section">
        <Product />
      </section>
      <section className="reliable-section">
        <Reliable />
      </section>
      <section className="Testimonial-section">
        <Testimonial />
      </section>
      <footer>
        <Footer />
      </footer>
    </div> // maindiv
  );
};

export default App;
