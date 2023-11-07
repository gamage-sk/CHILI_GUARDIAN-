import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Timeline, Event } from "react-timeline-scribble";
import "./Milestones.scss";
import DualColorProgressBar from "./ProgressBar";

const Milestones = () => {
  return (
    <div
      style={{
        backgroundColor: "#e9f7ef",
        padding: "10px 0",
      }}
    >
      <Container id="milestones" className="Milestones-container marginComp">
        <h5 className="section-title">Milestones</h5>
        <h2>
          <strong>Timeline in Brief</strong>
        </h2>
        <div
          style={{
            padding: "0 10%",
            marginTop: "75px",
          }}
        >
          <Timeline>
            <Event
              className="timeline-event"
              interval={"March 2023"}
              title={
                <div style={{ fontSize: "32px", fontWeight: "bold" }}>
                  Project Proposal
                </div>
              }
              subtitle={
                <div style={{ fontSize: "18px", fontWeight: "200" }}>
                  A Project Proposal is presented to potential sponsors or
                  clients to receive funding or get your project approved.
                </div>
              }
            >
              <strong className>Marks Allocated : 6</strong>
              <br />
              <DualColorProgressBar progress1={6} />
            </Event>
            <Event
              className="timeline-event"
              interval={"March 2023"}
              title={"Progress Presentation I"}
              subtitle={
                "Progress Presentation I reviews the 50% completetion status of the project. This reveals any gaps or inconsistencies in the design/requirements."
              }
            >
              Marks Allocated : 6
              <br />
              <DualColorProgressBar progress1={10} progress2={6} />
            </Event>
            <Event
              className="timeline-event"
              interval={"March 2023"}
              title={"Research Paper"}
              subtitle={
                "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge."
              }
            >
              Marks Allocated : 10
              <br />
              <DualColorProgressBar progress1={20} progress2={10} />
            </Event>
            <Event
              className="timeline-event"
              interval={"March 2023"}
              title={"Website Assessment"}
              subtitle={
                "The Website helps to promote our research project and reveals all details related to the project."
              }
            >
              Marks Allocated : 2
              <br />
              <DualColorProgressBar progress1={40} progress2={2} />
            </Event>
            <Event
              className="timeline-event"
              interval={"March 2023"}
              title={"Logbook"}
              subtitle={
                "Status of the project is validated through the Logbook. This also includes, Status documents 1 & 2."
              }
            >
              Marks Allocated : 3
              <br />
              <DualColorProgressBar progress1={42} progress2={3} />
            </Event>
            <Event
              className="timeline-event"
              interval={"March 2023"}
              title={"Final Report"}
              subtitle={
                "Final Report evalutes the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report."
              }
            >
              Marks Allocated : 19
              <br />
              <DualColorProgressBar progress1={45} progress2={19} />
            </Event>
            <Event
              className="timeline-event"
              interval={"March 2023"}
              title={"Final Presentation & Viva"}
              subtitle={
                "Viva is held individually to assess each members contribution to the project."
              }
            >
              Marks Allocated : 20
              <br />
              <DualColorProgressBar progress1={80} progress2={20} />
            </Event>
          </Timeline>
        </div>
      </Container>
    </div>
  );
};

export default Milestones;
