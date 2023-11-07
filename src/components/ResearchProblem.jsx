import React from "react";
import Container from "react-bootstrap/esm/Container";
import mobile from "../assets/mobile.mp4";

const ResearchProblem = () => {
  return (
    <Container
      id="research-problem"
      className="ResearchProblem-container marginComp"
    >
      <h2>
        <strong>Research Problem & Solution</strong>
      </h2>
      <div className="row">
        <div
          className="col-md-6 col-sm-12 pt-lg-5 justify-text"
          id="project-scope-left"
        >
          <h5>
            <strong>Research Problem</strong>
          </h5>
          <br />
          {/* <h4 className="highlight">
            How to classify pest and diseases in coconut and provide
            surveillance to people in real time?
          </h4> */}
          <p style={{ textAlign: "justify" }}>
            Chili farming in Sri Lanka faces multifaceted challenges, including
            diseases, market uncertainties, and limited technological access.
            Traditional disease detection methods are time-consuming and prone
            to errors, leading to significant yield losses. Additionally,
            selecting the optimal chili variety for cultivation is complex due
            to market trends and varying agricultural conditions. The lack of
            precise soil nutrient management further hampers chili cultivation,
            resulting in inefficient fertilizer use and reduced yields. These
            challenges hinder the economic stability of farmers and impact the
            nation's agricultural sector.
          </p>
          <br />
        </div>
        <div className="col-md-6 col-sm-12 pt-lg-5" id="project-scope-right">
          <div className="section-left">
            <div className="section-figure">
              <iframe
                width="100%"
                height="400"
                src={mobile}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <p>Product Demonstration - Promo Video</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h5>
          <strong>Proposed Solution</strong>
        </h5>
        <br />
        <div className="col-md-12">
          <div className="text-Left" style={{ paddingTop: "20px" }}>
            <h5 className="fw-700">1. Advanced Disease Prediction</h5>
          </div>
          <div>
            <p style={{ textAlign: "justify" }}>
              Implement advanced image processing techniques to predict chili
              crop diseases accurately. Develop a system that utilizes machine
              learning algorithms to analyze images of chili plants, enabling
              early and precise disease detection. This solution ensures timely
              interventions, minimizing yield losses.
            </p>
          </div>
        </div>
        <br />
        <div className="col-md-12">
          <div className="text-Left">
            <h5 className="fw-700">2. Market Trend Analysis:</h5>
          </div>
          <div>
            <p style={{ textAlign: "justify" }}>
              Develop predictive models based on historical price data, market
              demand, and agricultural conditions. Utilize machine learning
              algorithms to analyze trends, helping farmers choose the most
              profitable chili varieties. Integrate real-time market data into a
              user-friendly mobile application, providing instant
              recommendations to farmers.
            </p>
          </div>
        </div>
        <br />
        <div className="col-md-12">
          <div className="text-Left">
            <h5 className="fw-700">3. Precision Nutrient Management:</h5>
          </div>

          <p style={{ textAlign: "justify" }}>
            Implement IoT-based soil sensors to monitor soil conditions in
            real-time. Utilize data analytics to recommend precise nutrient
            applications tailored to the specific soil profile. Develop a
            user-friendly interface for farmers to input soil data and receive
            customized fertilization plans. This solution optimizes fertilizer
            use, improves soil health, and enhances crop yields.
          </p>
        </div>
        <br />
        <p style={{ textAlign: "justify" }}>
          By addressing these challenges comprehensively, the proposed solutions
          empower farmers with accurate disease diagnosis, informed crop
          selection, and precise nutrient management strategies. Integrating
          technology with agriculture enhances the economic stability of
          farmers, strengthens the agricultural sector, and contributes to the
          overall prosperity of the nation
        </p>
      </div>
    </Container>
  );
};

export default ResearchProblem;
