import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand>
          <Link
            className="mt-2"
            to="introduction"
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
            }}
            spy={true}
            smooth={true}
            offset={-100}
            duration={0}
          >
            Mashrur Portfolio
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                className="mt-2"
                to="aboutme"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "black",
                }}
                spy={true}
                smooth={true}
                offset={-50}
                duration={0}
              >
                About Me
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                className="mt-2"
                to="researchInterest"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "black",
                }}
                spy={true}
                smooth={true}
                offset={-50}
                duration={0}
              >
                Research Interest
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                className="mt-2"
                to="mypublications"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "black",
                }}
                spy={true}
                smooth={true}
                offset={-50}
                duration={0}
              >
                My Publications
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                className="mt-2"
                to="techandtools"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "black",
                }}
                spy={true}
                smooth={true}
                offset={-50}
                duration={0}
              >
                My Expertise
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                className="mt-2"
                to="workExperience"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "black",
                }}
                spy={true}
                smooth={true}
                offset={-50}
                duration={0}
              >
                Work Experience
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                className="mt-2"
                to="education"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "black",
                }}
                spy={true}
                smooth={true}
                offset={-50}
                duration={0}
              >
                Education
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link
                className="mt-2"
                to="myStatement"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "black",
                }}
                spy={true}
                smooth={true}
                offset={-50}
                duration={0}
              >
                My Statement
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="mt-2"
                to="myContactInfo"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "black",
                }}
                spy={true}
                smooth={true}
                offset={-50}
                duration={0}
              >
                Contact Me
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
