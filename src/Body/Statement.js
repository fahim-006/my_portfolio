import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import statement from "../data/myStatement.js";
const Statement = () => {
  return (
    <Container className="mt-3">
      <Row>
        <p class="h3">My Statement</p>
      </Row>

      <Row className="mt-2 fs-5" style={{ textAlign: "left" }}>
        {statement.paragraph1}
      </Row>
      <Row className="mt-2 fs-5" style={{ textAlign: "left" }}>
        {statement.paragraph2}
      </Row>
      <Row className="mt-2 fs-5" style={{ textAlign: "left" }}>
        {statement.paragraph3}
      </Row>
      <Row className="mt-2 fs-5" style={{ textAlign: "left" }}>
        {statement.paragraph4}
      </Row>
    </Container>
  );
};

export default Statement;
