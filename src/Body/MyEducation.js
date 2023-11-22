import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Education from "../data/Education";
import otherCertificates from "../data/OtherCertificates";

const MyEducation = () => {
  return (
    <Container id="education" fluid style={{ marginTop: "50px" }}>
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

      <Row>
        <Col className="fs-4">
          {otherCertificates[0].name}
          <p className="fs-5">
            Band: {otherCertificates[0].band}
            <span className="fs-5">
              {" "}
              <br />
              Speaking: {otherCertificates[0].details.Speaking} &nbsp;
              Listening: {otherCertificates[0].details.Listening}&nbsp; Reading:{" "}
              {otherCertificates[0].details.Reading}&nbsp; Writing:{" "}
              {otherCertificates[0].details.Writing}
            </span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default MyEducation;
