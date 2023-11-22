import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ResearchInterest from "../data/ResearchInterest";

const MyResearchInterest = () => {
  return (
    <Container id="researchInterest" className="mt-3" fluid>
      <Row>
        <p className="h3">My Research Interest</p>
      </Row>

      <Row style={{ textAlign: "left" }}>
        <p className="fs-5">{ResearchInterest.Statement}</p>
        {ResearchInterest.details.map((item, index) => (
          <>
            <p className="fs-4" key={index}>
              {item.name}
            </p>
            <p className="fs-5">{item.statement}</p>
          </>
        ))}
      </Row>
    </Container>
  );
};

export default MyResearchInterest;
