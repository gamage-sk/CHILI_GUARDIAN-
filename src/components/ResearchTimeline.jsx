import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ResearchTimeline.scss";

const ResearchTimeline = () => {
  // Dummy data array
  const researchData = [
    {
      id: 1,
      title: "🎯 Advanced Disease Prediction:",
      description:
        "Utilizing cutting-edge image processing and machine learning, our system accurately identifies chili crop diseases. Real-time monitoring and alerts enable swift responses to disease outbreaks.",
    },
    {
      id: 2,
      title: "🎯 Predictive Variety Selection",
      description:
        "Our predictive models analyze historical price data, market demand, and agricultural conditions to recommend the most profitable chili varieties. Farmers receive real-time insights via an intuitive mobile app.",
    },
    {
      id: 3,
      title: "🎯 IoT-Based Nutrient Management",
      description:
        " IoT sensors monitor soil parameters, enabling precise nutrient management. Customized fertilization plans, generated through data analytics, optimize chili plant growth.",
    },
    {
      id: 4,
      title: "🎯 Seamless Integration",
      description:
        "Our solution seamlessly integrates disease prediction, variety selection, and nutrient management systems. It's optimized for efficiency and user-friendly interfaces, empowering farmers with valuable agricultural insights.",
    },
    {
      id: 5,
      title: "🎯 Empowering Farmers",
      description:
        "Comprehensive training empowers farmers to make informed decisions, leading to increased yields and income. Our research contributes to agricultural prosperity and sustainable growth.",
    },
  ];

  return (
    <Container
      id="research-objectives"
      className="ResearchTimeline-container marginComp"
    >
      <h2 className="pb-5 pt-5 text-center display-5">
        <strong>Research Objectives</strong>
      </h2>

      <Row className="align-items-stretch d-flex">
        {researchData.map((item) => (
          <Col key={item.id} sm={6} className="mb-4">
            <Card className="d-flex flex-column h-100 p-5">
              <Card.Body>
                <div className="circle font-weight-bold"></div>
                <Card.Title>
                  <strong>{item.title}</strong>
                </Card.Title>
                <Card.Text style={{ textAlign: "justify", marginTop: "20px" }}>
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ResearchTimeline;
