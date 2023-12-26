import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';

const ResearchProject = () => {
  return (
    <Container id="mypublications" style={{ marginTop: '50px' }}>
      <Row>
        <p className="h3">Research Project</p>
      </Row>
      <Row>
        <ListGroup variant="flush" className="list-unstyled">
          <ListGroup.Item>
            <p className="fs-4">
              E-Commerce Trend and Disclosure of Personal Data in Bangladesh.
            </p>
            <Row className="mt-2" style={{ textAlign: 'left' }}>
              The security concern for personal information on e-commerce sites
              is an important research field. Due to the rapid growth of online
              marketing and purchasing, data collection about customer’s
              personal information, behavior, preferences, needs and buying
              patterns is increasing. Sometimes these e-commerce sites use
              unethical methods to collect data about its users. Our goal is to
              know whether the e-commerce sites in Bangladesh is following data
              protection laws to protect its user data and to discover people’s
              views toward these e-commerce sites regarding information
              security. This study examined the data protection laws for e-
              commerce sites mainly European law GDPR and compared those laws
              with respect to Bangladeshi e-commerce sites. To assess the degree
              of security concern of people, empirical data was gathered through
              an online survey using a questionnaire. The survey was done among
              those people who use e-commerce sites. Prior to this study, many
              research has been conducted which were only limited to customer’s
              attitude towards e-commerce site. There is little to no research
              on user data protection and user rights in e- commerce sites. The
              findings of this study will be helpful for customers who use
              e-commerce sites in Bangladesh.
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Row>
    </Container>
  );
};

export default ResearchProject;
