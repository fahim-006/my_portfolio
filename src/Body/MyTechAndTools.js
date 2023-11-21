import { Container, Row } from "react-bootstrap";
import TechandTools from "../data/TechandTools";

const MyTechAndTools = () => {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <p className="h3">Tech and Tools</p>
      </Row>

      <Row>
        <p className="h5" style={{ textAlign: "left" }}>
          Programming Languages:
          <button type="button" class="btn btn-light">
            {TechandTools.programmingLanguage[0]}
          </button>
          <button type="button" class="btn btn-light">
            {TechandTools.programmingLanguage[1]}
          </button>
          <button type="button" class="btn btn-light">
            {TechandTools.programmingLanguage[2]}
          </button>
          <button type="button" class="btn btn-light">
            {TechandTools.programmingLanguage[3]}
          </button>
          <button type="button" class="btn btn-light">
            {TechandTools.programmingLanguage[4]}
          </button>
        </p>

        <p className="h5" style={{ textAlign: "left" }}>
          Libraries:
          <button type="button" class="btn btn-light">
            {TechandTools.Libraries[0]}
          </button>
          <button type="button" class="btn btn-light">
            {TechandTools.Libraries[1]}
          </button>
        </p>

        <p className="h5" style={{ textAlign: "left" }}>
          Database:
          <button type="button" class="btn btn-light">
            {TechandTools.Database[0]}
          </button>
          <button type="button" class="btn btn-light">
            {TechandTools.Database[1]}
          </button>
          <button type="button" class="btn btn-light">
            {TechandTools.Database[2]}
          </button>
        </p>

        <p className="h5" style={{ textAlign: "left" }}>
          Frontend:
          <button type="button" class="btn btn-light">
            {TechandTools.Frontend[0]}
          </button>
          <button type="button" class="btn btn-light">
            {TechandTools.Frontend[1]}
          </button>
          <button type="button" class="btn btn-light">
            {TechandTools.Frontend[2]}
          </button>
        </p>

        <p className="h5" style={{ textAlign: "left" }}>
          Backend:
          <button type="button" class="btn btn-light">
            {TechandTools.Backend[0]}
          </button>
          <button type="button" class="btn btn-light">
            {TechandTools.Backend[1]}
          </button>
        </p>

        <p className="h5" style={{ textAlign: "left" }}>
          AWS:
          <button type="button" class="btn btn-light">
            {TechandTools.AWS[0]}
          </button>
          <button type="button" class="btn btn-light">
            {TechandTools.AWS[1]}
          </button>
          <button type="button" class="btn btn-light">
            {TechandTools.AWS[2]}
          </button>
          <button type="button" class="btn btn-light">
            {TechandTools.AWS[3]}
          </button>
          <button type="button" class="btn btn-light">
            {TechandTools.AWS[4]}
          </button>
          <button type="button" class="btn btn-light">
            {TechandTools.AWS[5]}
          </button>
          <button type="button" class="btn btn-light">
            {TechandTools.AWS[6]}
          </button>
          <button type="button" class="btn btn-light">
            {TechandTools.AWS[7]}
          </button>
          <button type="button" class="btn btn-light">
            {TechandTools.AWS[8]}
          </button>
          <button type="button" class="btn btn-light">
            {TechandTools.AWS[9]}
          </button>
          <button type="button" class="btn btn-light">
            {TechandTools.AWS[10]}
          </button>
          <button type="button" class="btn btn-light">
            {TechandTools.AWS[11]}
          </button>
        </p>
      </Row>
    </Container>
  );
};

export default MyTechAndTools;
