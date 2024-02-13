import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutMe from '../data/aboutMe';

const AboutMe = () => {
  return (
    <Container id="aboutme" style={{ marginTop: '50px' }} fluid>
      <Row>
        <p class="h3">About Me</p>
      </Row>
      <Row className="mt-2 fs-5" style={{ textAlign: 'justify' }}>
        <Col>{aboutMe}</Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
