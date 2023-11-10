import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./LiteratureSurvey.scss";
import gr2 from "../assets/gr2.png";
import gr1 from "../assets/gr1.png";
import world from "../assets/world.jpg";

const LiteratureSurvey = () => {
  return (
    <Container
      id="project-scope"
      className="LiteratureSurvey-container marginComp"
    >
      <h5 className="section-title">Project Scope</h5>
      <h2>
        <strong>Literature Survey</strong>
      </h2>
      <div className="row">
        <div id="project-scope-left" className="col-md-6 col-sm-12 pt-lg-5">
          <div className="section-left">
            <div className="section-info-div">
              <div className="row">
                <div className="col-sm-4 image-container">
                  <img src={world} alt="Bell Paper Disease" />
                </div>
                <div
                  className="col-sm-7 text-col text-justify"
                  style={{
                    textAlign: "justify",
                  }}
                >
                  Sri Lanka is the 75th largest exporter of chili in the world.{" "}
                  {""}
                  <span style={{ color: "grey", fontSize: "12px" }}>[1]</span>
                </div>
              </div>
            </div>
            <div className="section-figure mt-5">
              <img
                style={{ alignItems: "center" }}
                src={gr2}
                width="80%"
                alt="Annual bell pepper Production"
              />
              <p className="fs-12 mt-1">
                Figure 1.1: Annual chili production 2006 – 2017 [2]
              </p>
            </div>

            <div className="section-figure mt-5">
              <img
                style={{ alignItems: "center" }}
                src={gr1}
                width="80%"
                alt="Annual bell pepper Production"
              />
              <p className="fs-12 mt-1">
                Figure 1.2: In Colombo, the retail price of green chili [3]
              </p>
            </div>
          </div>
        </div>
        <div
          id="project-scope-right"
          className="col-md-6 col-sm-12 pt-lg-5 text-justify"
        >
          <p>
            Agriculture, central to Sri Lanka's economy, faced challenges due to
            disease spread linked to climatic shifts, causing substantial losses
            [4]. Smart agriculture hinges on timely disease identification for
            efficient resource use and healthier production [5]. This research
            uniquely addresses both disease detection and market prediction.
            Previous decade's research forms the backdrop, highlighting the
            pivotal juncture of agricultural and market innovation. Integrating
            advanced techniques, this study promises a resilient and sustainable
            future for Sri Lanka's chili farming.
          </p>
          <p>
            Therefore, Mayalekshmi et al. [6] aims to detect chili leaf disease
            using images from actual field conditions. An RGB camera was used to
            collect images, and a state-of-the-art deep learning object
            detection model named YOLOv5 was used. The model performed well
            despite a small dataset, with a mean average precision of 0.461. The
            proposed deep learning object detection model is promising for
            disease detection of chili crops.
          </p>
          <div className="references">
            <p className="pt-sm-1">
              <strong>References</strong>
            </p>
            <ol className="fs-12">
              <li>
                M. S. University, "Sri Lanka: Trade Statistics," globalEDGE,
                [Online]. Available:
                https://globaledge.msu.edu/countries/sri-lanka/tradestats.
              </li>
              <li>
                CIES, "Sri Lanka Production Yield: Chillies," ISI Emerging
                Markets Group Company, [Online]. Available:
                https://www.ceicdata.com/en/sri-lanka/production-by-commodity-annual/production-yield-chillies.
              </li>
              <li>
                CIES, "Sri Lanka Retail Price: Average: Colombo: Vegetables:
                Green Chillies," ISI Emerging Markets Group Company, [Online].
                Available:
                https://www.ceicdata.com/en/sri-lanka/production-by-commodity-annual/production-yield-chillies.
              </li>
              <li>
                Y. S. D. R. L. L. D. K. D. N. J. L. W. R. Miriyagalla, "On The
                Effectiveness of Using Machine Learning and Gaussian Plume Model
                for Plant Disease Dispersion Prediction and Simulation," in 2019
                International Conference on Advancements in Computing (ICAC),
                2019, pp. 317-322.
              </li>
              <li>
                Y. L. S. Y. N. Z. Y. L. Y. Zhang, "Identification of rice
                diseases using deep convolutional neural networks,"
                Neurocomputing, vol. 267, pp. 378-384, 2017.
              </li>
              <li>
                A. R. R. M. Mayalekshmi K M, "In-field Chilli Crop Disease
                Detection Using YOLOv5 Deep Learning Technique," in 2023 IEEE
                8th International Conference for Convergence in Technology
                (I2CT), 2023, pp. 1-6.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LiteratureSurvey;
