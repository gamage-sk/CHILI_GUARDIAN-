import React from "react";
import Container from "react-bootstrap/esm/Container";
import { FaFileImage, FaFilePdf, FaFilePowerpoint } from "react-icons/fa";

const Documents = () => {
  return (
    <Container id="downloads" className="downloads-container marginComp mt-5">
      <div className="container">
        <h5 className="section-title">Downloads</h5>
        <div className="sub-section" id="documents">
          <h2>
            <strong>Documents</strong>
          </h2>
          <p>Please find all documents related to this project below.</p>
          <div className="row mt-sm-5 downloads-container">
            {/* ---------Card view for each document--------- */}
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <FaFilePdf
                      style={{
                        marginRight: "10px",
                        color: "#ff0000",
                      }}
                    />
                    Topic Assessment
                  </h5>
                  <p className="card-text pt-sm-2">Submitted on 2023/03/08</p>
                </div>
                <ul className="download-items list-group list-group-flush">
                  <li className="list-group-item">
                    <div>Group</div>
                    <a
                      href="https://drive.google.com/file/d/1G6mmX596nefxrNzDaG1Tpasb_gUIFpJF/view?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* ---------Card view for each document--------- */}
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <FaFilePdf
                      style={{
                        marginRight: "10px",
                        color: "#ff0000",
                      }}
                    />
                    Project Charter
                  </h5>
                  <p className="card-text pt-sm-2">Submitted on 2023/4/25</p>
                </div>
                <ul className="download-items list-group list-group-flush">
                  <li className="list-group-item">
                    Group
                    <a
                      href="https://drive.google.com/file/d/1N06cMw3t0iKgMcCvpRzKzwKw1Mkf8ZTf/view?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <FaFilePdf
                      style={{
                        marginRight: "10px",
                        color: "#ff0000",
                      }}
                    />
                    Project Proposal
                  </h5>
                  <p className="card-text pt-sm-2">Submitted on 2023/05/08</p>
                </div>
                <ul className="download-items list-group list-group-flush">
                  <li className="list-group-item">
                    Individual
                    <a
                      href="https://drive.google.com/drive/folders/1Znlw5SihCvxebBtbkuvAj-oxStmrtjp2?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <FaFilePdf
                      style={{
                        marginRight: "10px",
                        color: "#ff0000",
                      }}
                    />
                    Status Documents I
                  </h5>
                  <p className="card-text pt-sm-2">Submitted on 2023/05/22</p>
                </div>
                <ul className="download-items list-group list-group-flush">
                  <li className="list-group-item">
                    Individual
                    <a
                      href="https://drive.google.com/drive/folders/1WP9-gRC57jTLk-rR2Q3lpBLDTf91E1e_?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <FaFilePdf
                      style={{
                        marginRight: "10px",
                        color: "#ff0000",
                      }}
                    />
                    Status Documents II
                  </h5>
                  <p className="card-text pt-sm-2">Submitted on 2023/9/06</p>
                </div>
                <ul className="download-items list-group list-group-flush">
                  <li className="list-group-item">
                    Individual
                    <a
                      href="https://drive.google.com/drive/folders/1eTMFBY_AzG5hkqqyDgs-rZ8sLHM2UUb1?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <FaFilePdf
                      style={{
                        marginRight: "10px",
                        color: "#ff0000",
                      }}
                    />
                    Research Paper
                  </h5>
                  <p className="card-text pt-sm-2">Submitted on 2023/08/15</p>
                </div>
                <ul className="download-items list-group list-group-flush">
                  <li className="list-group-item">
                    Group
                    <a
                      href="https://drive.google.com/file/d/12NmWT9z9PBwS8FPtobFFwVaEflNOtfkC/view?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <FaFilePdf
                      style={{
                        marginRight: "10px",
                        color: "#ff0000",
                      }}
                    />
                    Final Report
                  </h5>
                  <p className="card-text pt-sm-2">Submitted on 2023/10/13</p>
                </div>
                <ul className="download-items list-group list-group-flush">
                  <li className="list-group-item">
                    Group
                    <a
                      href="https://drive.google.com/file/d/1PiNGw9_brntwGfrXzkgwJxkNbxfirvSh/view?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                  <li className="list-group-item">
                    Individual
                    <a
                      href="https://drive.google.com/drive/folders/1ZS75suGNo9W7TI82XXVAwSqJI1yrH427?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <FaFileImage
                      style={{
                        marginRight: "10px",
                        color: "#ff0000",
                      }}
                    />
                    Poster
                  </h5>
                  <p className="card-text pt-sm-2">Submitted on 2023/10/13</p>
                </div>
                <ul className="download-items list-group list-group-flush">
                  <li className="list-group-item">
                    Group
                    <a
                      href="https://drive.google.com/file/d/1HNixjLQ8S_IVQUcUXWc0YlTfPKaQq5cX/view?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ----------Presentations---------- */}
        <div id="presentations" className="sub-section marginComp mt-5">
          <h2>
            <strong>Presentations</strong>
          </h2>
          <p>Please find all presentations related this project below.</p>
          <div className="row mt-sm-5 downloads-container">
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <FaFilePowerpoint
                      style={{
                        marginRight: "10px",
                        color: "#fd7e29",
                      }}
                    />
                    Project Proposal
                  </h5>
                  <p className="card-text pt-sm-2">Submitted on 2023/03/14</p>
                </div>
                <ul className="download-items list-group list-group-flush">
                  <li className="list-group-item">
                    Group
                    <a
                      href="https://docs.google.com/presentation/d/1BpTer8F0meoO_s5BbEP8sE7hm33RBwCB/edit?usp=drive_link&ouid=110018491131883442316&rtpof=true&sd=true"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <FaFilePowerpoint
                      style={{
                        marginRight: "10px",
                        color: "#fd7e29",
                      }}
                    />
                    Progress Presentation I
                  </h5>
                  <p className="card-text pt-sm-2">Submitted on 2023/07/08</p>
                </div>
                <ul className="download-items list-group list-group-flush">
                  <li className="list-group-item">
                    Group
                    <a
                      href="https://docs.google.com/presentation/d/1UfKqcEqcHeFYfPNAUyag-_kJW3k-j6YE/edit?usp=drive_link&ouid=110018491131883442316&rtpof=true&sd=true"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <FaFilePowerpoint
                      style={{
                        marginRight: "10px",
                        color: "#fd7e29",
                      }}
                    />
                    Progress Presentation II
                  </h5>
                  <p className="card-text pt-sm-2">Submitted on 2023/10/18</p>
                </div>
                <ul className="download-items list-group list-group-flush">
                  <li className="list-group-item">
                    Group
                    <a
                      href="https://docs.google.com/presentation/d/16EUo4OeH9zkoMxthAI8ghixz4D808Zq1/edit?usp=drive_link&ouid=110018491131883442316&rtpof=true&sd=true"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center">
                    <FaFilePowerpoint
                      style={{
                        marginRight: "10px",
                        color: "#fd7e29",
                      }}
                    />
                    Final Presentation
                  </h5>
                  <p className="card-text pt-sm-2">Submitted on 2023/11/01</p>
                </div>
                <ul className="download-items list-group list-group-flush">
                  <li className="list-group-item">
                    Group
                    <a
                      href="https://docs.google.com/presentation/d/1sflRSrZ1_dOOKKoUozaPk4XSPKOukA3y/edit?usp=drive_link&ouid=110018491131883442316&rtpof=true&sd=true"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Documents;
