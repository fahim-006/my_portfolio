import { Container, Row } from "react-bootstrap";
import TechandTools from "../data/TechandTools";
import My_expertise_AI from "../data/My_expertise/My_expertise_AI";
import MyExpertiseCS from "../data/My_expertise/MyExpertiseCS";

const MyTechAndTools = () => {
  return (
    <Container id="techandtools" style={{ marginTop: "20px" }}>
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
        {My_expertise_AI.map((item, index) => (
          <p key={index} className="h5" style={{ textAlign: "left" }}>
            {item.Category} {item.Algorithms.AlgoName}:
            {item.Algorithms.details.map((detail, detailIndex) => (
              <>
                <p className="fs-5" style={{ textDecoration: "underline" }}>
                  {detail.Name}{" "}
                  <span style={{ fontSize: "16px" }}>
                    {detail.Description}-{" "}
                  </span>
                  {detail.Algos.map((algos, index2) => (
                    <button type="button" class="btn btn-light">
                      {algos}
                    </button>
                  ))}
                </p>
              </>
            ))}
          </p>
        ))}

        {MyExpertiseCS.map((item, index) => (
          <p key={index} className="h5" style={{ textAlign: "left" }}>
            {item.Category} {item.Algorithms.AlgoName}:
            {item.Algorithms.details.map((detail, detailIndex) => (
              <>
                <p className="fs-5" style={{ textDecoration: "underline" }}>
                  {detail.Name}{" "}
                  <span style={{ fontSize: "16px" }}>
                    {detail.Description}-{" "}
                  </span>
                  {detail.Algos.map((algos, index2) => (
                    <button type="button" class="btn btn-light">
                      {algos}
                    </button>
                  ))}
                  <br />
                  {detail.LifeCycle.length > 0 ? (
                    <span className="fs-5">LifeCycle: </span>
                  ) : (
                    ""
                  )}
                  {detail.LifeCycle.length > 0
                    ? detail.LifeCycle.map((lifeCycle, index2) => (
                        <button type="button" class="btn btn-light">
                          {lifeCycle}
                        </button>
                      ))
                    : ""}
                  <br />
                  {detail.Tools.length > 0 ? (
                    <span className="fs-5">Tools: </span>
                  ) : (
                    ""
                  )}
                  {detail.Tools.length > 0
                    ? detail.Tools.map((tools, index3) => (
                        <button type="button" class="btn btn-light">
                          {tools}
                        </button>
                      ))
                    : ""}
                </p>
              </>
            ))}
          </p>
        ))}
      </Row>
    </Container>
  );
};

export default MyTechAndTools;
