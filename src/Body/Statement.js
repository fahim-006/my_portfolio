import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import statement from "../data/myStatement.js";

const Statement = () => {
  return (
    <Container id="myStatement" className="mt-3">
      <Row>
        <p className="h3">My Statement</p>
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
