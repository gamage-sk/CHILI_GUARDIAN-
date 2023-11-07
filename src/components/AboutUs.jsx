import React from "react";
import Container from "react-bootstrap/esm/Container";
import supvisor from "../assets/pepo/supvisor.jpg";
import dhana from "../assets/pepo/dhana.png";
import sk from "../assets/pepo/sk.png";
import nipun from "../assets/pepo/nipun.png";

const AboutUs = () => {
  return (
    <Container id="about" className="about-container marginComp mt-5">
      <div className="container">
        <h5 className="section-title">About Us</h5>
        <div className="sub-section">
          <h2>
            <strong>Meet Our Team !</strong>
          </h2>
          <div className="row mt-sm-5" style={{ justifyContent: "center" }}>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card about-us-card">
                <img
                  src={supvisor}
                  className="about-us-image supervisor"
                  alt="Ms. Bhagyanie Chathurika"
                  height="20%"
                />
                <div className="card-body">
                  <h5 className="card-title">Ms. Bhagyanie Chathurika</h5>
                  <br />
                  <span className="badge badge-secondary">Supervisor</span>
                  <div className="text-group">
                    <p>Sri Lanka Institute of Information Technology</p>
                  </div>
                  <div className="text-group">
                    <p>
                      <strong>Department</strong>
                    </p>
                    <p>Information Technology</p>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a
                      className="card-text mr-4"
                      style={{ cursor: "pointer" }}
                      href="https://scholar.google.com/citations?hl=en&user=M1G6b9MAAAAJ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      G-Scholar
                    </a>
                    <a
                      className="card-text"
                      style={{ cursor: "pointer" }}
                      href="mailto:bhagyanie.c@sliit.lk"
                    >
                      E-Mail
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* //student */}
          <div className="row mt-sm-5" style={{ justifyContent: "center" }}>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card about-us-card">
                <img
                  src={dhana}
                  className="about-us-image"
                  alt="Madhusankha N. H. D"
                  height="20%"
                />
                <div className="card-body">
                  <h5 className="card-title">Madhusankha N. H. D</h5>
                  <br />
                  <span className="badge badge-secondary">Group Leader</span>
                  <div className="text-group">
                    <p>
                      <strong>Undergraduate</strong>
                    </p>
                    <p>Sri Lanka Institute of Information Technology</p>
                  </div>
                  <div className="text-group">
                    <p>
                      <strong>Department</strong>
                    </p>
                    <p>Information Technology</p>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a
                      className="card-text mr-4"
                      style={{ cursor: "pointer" }}
                      href="https://www.linkedin.com/in/dhananjayamadhusankha/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a
                      className="card-text"
                      style={{ cursor: "pointer" }}
                      href="mailto:mdhananjaya@icloud.com"
                    >
                      E-Mail
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card about-us-card">
                <img
                  src={sk}
                  className="about-us-image"
                  alt="Gamage S. K."
                  height="20%"
                />
                <div className="card-body">
                  <h5 className="card-title">Gamage S. K.</h5>
                  <br />
                  <span className="badge badge-secondary">Group Member</span>
                  <div className="text-group">
                    <p>
                      <strong>Undergraduate</strong>
                    </p>
                    <p>Sri Lanka Institute of Information Technology</p>
                  </div>
                  <div className="text-group">
                    <p>
                      <strong>Department</strong>
                    </p>
                    <p>Information Technology</p>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a
                      className="card-text mr-4"
                      style={{ cursor: "pointer" }}
                      href="https://www.linkedin.com/in/sanjula-kusal-gamage-bb828921a/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a
                      className="card-text"
                      style={{ cursor: "pointer" }}
                      href="mailto:kusalgamage1221@gmail.com"
                    >
                      E-Mail
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card about-us-card">
                <img
                  src={nipun}
                  className="about-us-image"
                  alt="Koonara K. M. N. D"
                  height="20%"
                />
                <div className="card-body">
                  <h5 className="card-title">Koonara K. M. N. D</h5>
                  <br />
                  <span className="badge badge-secondary">Group Member</span>
                  <div className="text-group">
                    <p>
                      <strong>Undergraduate</strong>
                    </p>
                    <p>Sri Lanka Institute of Information Technology</p>
                  </div>
                  <div className="text-group">
                    <p>
                      <strong>Department</strong>
                    </p>
                    <p>Information Technology</p>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a
                      className="card-text mr-4"
                      style={{ cursor: "pointer" }}
                      href="https://www.linkedin.com/in/nipun-darshana-aa130b226/"
                    >
                      LinkedIn
                    </a>
                    <a
                      className="card-text"
                      style={{ cursor: "pointer" }}
                      href="mailto:nipund609@gmail.com"
                    >
                      E-Mail
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

export default AboutUs;
