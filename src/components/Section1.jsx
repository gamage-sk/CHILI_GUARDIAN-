import React from "react";
import "./Section1.scss";

const Section1 = () => {
  return (
    <section id="home" className="section1-container">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="hero-cta">
              <h1>
                Explore the World of Thriving Crops
                <br />
                with
                <br />
                Chili Guardian!
              </h1>
              <a
                className="btn btn-outline-light"
                type="button"
                href="#project-scope"
              >
                <span className="btn-text">Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
