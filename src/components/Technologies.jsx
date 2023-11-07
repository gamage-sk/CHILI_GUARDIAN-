import React from "react";
import Container from "react-bootstrap/esm/Container";
import download from "../assets/Technologies/download.png";
import JavaScript from "../assets/Technologies/JavaScript.png";
import Reacticon from "../assets/Technologies/Reacticon.png";
import GoogleColab from "../assets/Technologies/GoogleColab.png";
// import firebase from "../assets/Technologies/download.png";
import Keras from "../assets/Technologies/Keras.png";
import arduino from "../assets/Technologies/arduino.png";
import pytorch from "../assets/Technologies/pytorch.png";
import Tensorflow from "../assets/Technologies/Tensorflow.png";
import PyCharm from "../assets/Technologies/PyCharm.png";
import download1 from "../assets/Technologies/download1.png";
import vs from "../assets/Technologies/vs.png";
import fb from "../assets/Technologies/fb.png";

const Technologies = () => {
  const dummyData = [
    {
      id: 1,
      imageSrc: download,
      text: "Python",
    },
    {
      id: 2,
      imageSrc: JavaScript,
      text: "JavaScript",
    },
    {
      id: 3,
      imageSrc: Reacticon,
      text: "React",
    },
    {
      id: 4,
      imageSrc: GoogleColab,
      text: "Google Colab",
    },
    {
      id: 5,
      imageSrc: fb,
      text: "Firebase",
    },
    {
      id: 6,
      imageSrc: Keras,
      text: "Keras",
    },
    {
      id: 7,
      imageSrc: arduino,
      text: "Arduino",
    },
    {
      id: 8,
      imageSrc: pytorch,
      text: "Pytorch",
    },
    {
      id: 9,
      imageSrc: Tensorflow,
      text: "Tensorflow",
    },
    {
      id: 10,
      imageSrc: PyCharm,
      text: "PyCharm",
    },
    {
      id: 11,
      imageSrc: download1,
      text: "Google Cloud Console",
    },
    {
      id: 12,
      imageSrc: vs,
      text: "Visual Studio Code",
    },
  ];

  return (
    <Container
      id="technologies"
      className="Technologies-container marginComp mt-5"
    >
      <h2>
        <strong>Technologies Used</strong>
      </h2>
      <div className="row technology mt-5">
        {dummyData.map((item) => (
          <div key={item.id} className="col-md-2 col-sm-4 col-6 mb-5">
            <div
              className="technologies-list"
              style={{ width: "150px", height: "150px" }}
            >
              <img src={item.imageSrc} alt={item.text} className="img-fluid" />
            </div>
            <p
              className="text-center fs-20 fw-400 mt-3"
              style={{
                color: "grey",
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Technologies;
