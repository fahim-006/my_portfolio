import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ContactInfo from "../data/ContactInfo";

const MyContactInfo = () => {
  return (
    <Container id="myContactInfo" className="mt-3 mb-5" fluid>
      <Row>
        <p className="h3">Contact Me</p>
      </Row>

      <Row>
        <p className="h5">Email: {ContactInfo.Email}</p>
        <p className="h5">Phone No: {ContactInfo.ContactNo}</p>
      </Row>
    </Container>
  );
};

export default MyContactInfo;
