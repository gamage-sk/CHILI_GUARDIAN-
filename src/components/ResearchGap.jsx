import React from "react";
import Container from "react-bootstrap/esm/Container";
import { FaSearch } from "react-icons/fa";
import { AiOutlineRise, AiFillMessage } from "react-icons/ai";
import "./ResearchGap.scss";

const ResearchGap = () => {
  return (
    <Container className="ResearchGap-container marginComp" id="research-gap">
      <div className="sub-section">
        <h2>
          <strong>Research Gap</strong>
        </h2>
        <p>
          Following areas are the research gaps found in most of the recent
          researches.
        </p>
        <div className="row mt-5 research-gap">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="fa-container text-center">
                  <FaSearch />
                </div>
                <div className="text-center" style={{ paddingTop: "20px" }}>
                  <h5 className="fw-700">Holistic Integration</h5>
                </div>
                <div>
                  <p style={{ textAlign: "justify" }}>
                    Existing studies often address isolated issues in chili
                    farming. There is a need for holistic solutions that
                    integrate diverse aspects like disease prediction, market
                    trends analysis, and soil health assessment into a unified
                    framework.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="fa-container text-center">
                  <AiOutlineRise />
                </div>
                <div className="text-center" style={{ paddingTop: "20px" }}>
                  <h5 className="fw-700">Soil Health Emphasis</h5>
                </div>
                <div>
                  <p style={{ textAlign: "justify" }}>
                    While disease and market aspects are explored, there's a
                    lack of emphasis on soil health analysis and precise
                    fertilization guidance. Integrating soil nutrient data into
                    predictive models is crucial for comprehensive farming
                    strategies.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="fa-container text-center">
                  <AiFillMessage />
                </div>
                <div className="text-center" style={{ paddingTop: "20px" }}>
                  <h5 className="fw-700">User-Friendly Interfaces</h5>
                </div>
                <div>
                  <p style={{ textAlign: "justify" }}>
                    Current solutions lack farmer-friendly interfaces.
                    Developing intuitive mobile apps and easy-to-use interfaces
                    is vital, ensuring that farmers, regardless of their tech
                    proficiency, can interact with the predictive models and IoT
                    systems effortlessly.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="fa-container text-center">
                  <AiFillMessage />
                </div>
                <div className="text-center" style={{ paddingTop: "20px" }}>
                  <h5 className="fw-700">Local Context Customization</h5>
                </div>
                <div>
                  <p style={{ textAlign: "justify" }}>
                    Most studies are conducted in different agricultural
                    contexts. Customizing solutions to fit the specific dynamics
                    of Sri Lankan chili farming, including local market
                    variations, climate nuances, and specific chili varieties,
                    is essential for accurate predictions.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="fa-container text-center">
                  <AiFillMessage />
                </div>
                <div className="text-center" style={{ paddingTop: "20px" }}>
                  <h5 className="fw-700">Sustainability and Scalability</h5>
                </div>
                <div>
                  <p style={{ textAlign: "justify" }}>
                    While predictive models are proposed, their long-term
                    sustainability and scalability are often overlooked.
                    Ensuring that the implemented systems are not only effective
                    but also sustainable for prolonged use and scalable to
                    accommodate a growing number of farmers is a critical
                    research aspect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ResearchGap;
