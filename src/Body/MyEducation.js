import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Education from "../data/Education";

const MyEducation = () => {
  return (
    <Container fluid style={{ marginTop: "50px" }}>
      <Row>
        <p class="h3">Education</p>
      </Row>
      <Row>
        <Col className="fs-4">
          {Education[0].name}
          <p className="fs-5">
            {Education[0].institute} <br /> CGPA: {Education[0].CGPA}
          </p>
          <span className="fs-5"></span>
        </Col>
      </Row>
    </Container>
  );
};

export default MyEducation;
