import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import WorkExperience from '../data/WorkExperience';
import { Col } from 'react-bootstrap';

const MyWorkExperience = () => {
  return (
    <Container id="workExperience" style={{ marginTop: '50px' }} fluid>
      <Row>
        <p className="h3">Work Experience</p>
      </Row>
      <Row>
        <ListGroup
          variant="flush"
          className="list-unstyled"
          style={{ textAlign: 'left' }}
        >
          <ListGroup.Item>
            <table class="table" style={{ border: 'none' }}>
              <tbody>
                <tr>
                  <td className="fs-4"> {WorkExperience[0].companyName}</td>
                  <td style={{ textAlign: 'right' }}>
                    {WorkExperience[0].from} - {WorkExperience[0].to}
                  </td>
                </tr>
              </tbody>
            </table>

            <Col className="fs-4">
              <span className="fs-5">
                {WorkExperience[0].designation} <br />
                Details: <br />
                <ol type="1">
                  <li>{WorkExperience[0].details[0]}</li>
                  <li>{WorkExperience[0].details[1]}</li>
                  <li>{WorkExperience[0].details[2]}</li>
                  <li>{WorkExperience[0].details[3]}</li>
                  <li>{WorkExperience[0].details[4]}</li>
                  <li>{WorkExperience[0].details[5]}</li>
                </ol>
              </span>
            </Col>
          </ListGroup.Item>

          <ListGroup.Item>
            <table class="table" style={{ border: 'none' }}>
              <tbody>
                <tr>
                  <td className="fs-4"> {WorkExperience[1].companyName}</td>

                  <td style={{ textAlign: 'right' }}>
                    {WorkExperience[1].from} - {WorkExperience[1].to}
                  </td>
                </tr>
              </tbody>
            </table>

            <Col className="fs-4">
              <span className="fs-5">
                {WorkExperience[1].designation} <br />
              </span>
            </Col>
          </ListGroup.Item>

          <ListGroup.Item>
            <table class="table" style={{ border: 'none' }}>
              <tbody>
                <tr>
                  <td className="fs-4"> {WorkExperience[2].companyName}</td>

                  <td style={{ textAlign: 'right' }}>
                    {WorkExperience[2].from} - {WorkExperience[2].to}
                  </td>
                </tr>
              </tbody>
            </table>

            <Col className="fs-4">
              <span className="fs-5">
                {WorkExperience[2].designation} <br />
                Details: <br />
                <ol type="1">
                  <li>{WorkExperience[2].details[0]}</li>
                  <li>{WorkExperience[2].details[1]}</li>
                </ol>
              </span>
            </Col>
          </ListGroup.Item>
        </ListGroup>
      </Row>
    </Container>
  );
};

export default MyWorkExperience;
