import { Container, Row } from 'react-bootstrap';
import TechandTools from '../data/TechandTools';
import My_expertise_AI from '../data/My_expertise/My_expertise_AI';
import MyExpertiseCS from '../data/My_expertise/MyExpertiseCS';

const MyTechAndTools = () => {
  return (
    <Container id="techandtools" style={{ marginTop: '50px' }} fluid>
      <Row>
        <p className="h3">Tech and Tools</p>
      </Row>

      <Row>
        <table class="table">
          <thead>
            <tr>
              <th scope="col"> Programming Languages</th>
              <th scope="col">Libraries</th>
              <th scope="col">Database</th>
              <th scope="col">Frontend</th>
              <th scope="col">Backend</th>
              <th scope="col">Others</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> {TechandTools.programmingLanguage[0]}</td>
              <td> {TechandTools.Libraries[0]}</td>
              <td>{TechandTools.Database[0]}</td>
              <td> {TechandTools.Frontend[0]}</td>
              <td>{TechandTools.Backend[0]}</td>
              <td>Several AWS services</td>
            </tr>
            <tr>
              <td> {TechandTools.programmingLanguage[1]}</td>
              <td> {TechandTools.Libraries[1]}</td>
              <td>{TechandTools.Database[1]}</td>
              <td> {TechandTools.Frontend[1]}</td>
              <td>{TechandTools.Backend[1]}</td>
              <td>Machine Learning Algorithms(Supervised and Unsupervised)</td>
            </tr>
            <tr>
              <td> {TechandTools.programmingLanguage[2]}</td>
              <td> </td>
              <td>{TechandTools.Database[2]}</td>
              <td> {TechandTools.Frontend[2]}</td>
              <td> </td>
              <td>Deep Learning(CNN,RNN, LSTM)</td>
            </tr>
            <tr>
              <td> {TechandTools.programmingLanguage[3]}</td>
              <td> </td>
              <td></td>
              <td></td>
              <td></td>
              <td>GIT</td>
            </tr>
            <tr>
              <td> {TechandTools.programmingLanguage[4]}</td>
              <td> </td>
              <td></td>
              <td></td>
              <td></td>
              <td>SVN</td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td></td>
              <td></td>
              <td></td>
              <td>Docker</td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td></td>
              <td></td>
              <td></td>
              <td>Android</td>
            </tr>
          </tbody>
        </table>
      </Row>
    </Container>
  );
};

export default MyTechAndTools;
