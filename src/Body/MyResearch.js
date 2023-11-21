import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import publications from "../data/Publications";

const MyResearch = () => {
  return (
    <Container style={{ marginTop: "50px" }}>
      <Row>
        <p class="h3">My Publications</p>
      </Row>
      <Row>
        <ListGroup variant="flush" className="list-unstyled">
          <ListGroup.Item>
            <Link className="fs-4" to={publications[0].Link}>
              {publications[0].Name}
            </Link>
            <Row className="mt-2" style={{ textAlign: "left" }}>
              {publications[0].Abstract}
            </Row>
          </ListGroup.Item>

          <ListGroup.Item>
            <Link className="fs-4" to={publications[1].Link}>
              {publications[1].Name}
            </Link>
            <Row className="mt-2" style={{ textAlign: "left" }}>
              {publications[1].Abstract}
            </Row>
          </ListGroup.Item>

          <ListGroup.Item>
            <Link className="fs-4" to={publications[2].Link}>
              {publications[2].Name}
            </Link>
            <Row className="mt-2" style={{ textAlign: "left" }}>
              {publications[2].Abstract}
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Row>
    </Container>
  );
};

export default MyResearch;
