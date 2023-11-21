import intro from "../data/Intro";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image from "../data/img2.jpeg";
import Image from "react-bootstrap/Image";

const Introduction = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6} className="d-flex align-items-center">
          <span className="fs-4">
            <b class="fs-5">{intro[0]} </b> <br />
            {intro[1]}
          </span>
        </Col>
        <Col>
          <Col xs={12} md={6} style={{ display: "block", margin: "0 auto" }}>
            <Image src={image} fluid />
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;
