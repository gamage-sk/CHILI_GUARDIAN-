import React from "react";
import Container from "react-bootstrap/esm/Container";
import diagram1 from "../assets/diagram1.png";

const Methodology = () => {
  return (
    <Container id="methodology" className="Methodology-container marginComp">
      <h2>
        <strong>Methodology</strong>
      </h2>
      <div className="row mt-3">
        <div id="project-scope-left" className="col-md-6 col-sm-12 pt-lg-5">
          <div className="section-left">
            <div className="section-figure">
              <img
                src={diagram1}
                width="100%"
                alt="High Level Architecture of the system"
              />

              <p className="fs-12 mt-1">
                Figure 2. High Level Architecture of the system.
              </p>
            </div>
          </div>
        </div>
        <div
          id="project-scope-right"
          className="col-md-6 col-sm-12 pt-lg-5 text-justify"
        >
          <p>The proposed system consists of 3 main components. They are;</p>
          <ol>
            <li>
              <strong>
                Predicting chili crop disease using image processing with
                appropriate solutions.
              </strong>
            </li>
            <li>
              <strong>
                Predicting the best chili crop type to grow based on market
                trends using historical price data give a further explanation.
              </strong>
            </li>
            <li>
              <strong>
                Predicting the nutrients to be applied for chili varieties
                according to the soil condition.
              </strong>
            </li>
          </ol>
          <p>
            Our methodology integrates cutting-edge technologies to
            revolutionize chili farming. We collect and preprocess extensive
            datasets related to chili diseases, market trends, historical
            prices, soil conditions, and greenhouse parameters. Utilizing
            Convolutional Neural Networks (CNNs), we accurately predict diseases
            through image processing, enabling timely interventions. Advanced
            predictive algorithms, including Long Short-Term Memory (LSTM)
            networks and regression models, forecast market trends and identify
            profitable chili varieties.
          </p>
          <p>
            In greenhouses, IoT sensors continuously monitor vital parameters
            like temperature, humidity, soil moisture, and light intensity.
            Real-time data is transmitted to a cloud-based database, accessible
            through a user-friendly React Native mobile app. This app provides
            farmers with actionable insights, disease diagnosis reports, market
            forecasts, and remote control over greenhouse systems. Training,
            ongoing support, and performance evaluations ensure the system's
            accuracy and user satisfaction. By seamlessly integrating these
            components, our methodology empowers farmers, maximizes yields, and
            contributes to sustainable agriculture.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Methodology;
