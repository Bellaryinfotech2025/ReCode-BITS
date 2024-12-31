import React from 'react';
import '../CareersStyles/Careersimagemiddle.css';
import careersimagemiddle from '../BitsImages/careersimage8.webp'; // Your image path

const CareersMiddle = () => {
  return (
    <div className="careers-container">
      <div className="careers-content">
        <div className="text-container">
          <h1 className="main-heading">
            Join Bellary InfoTech Solutions
            <br /> We Create Top-Notch Applications & Solutions
          </h1>
          <p className="quote">
            "Empowering businesses through innovative technology and strategic solutions."
          </p>
        </div>
        <div className="image-container">
          <img src={careersimagemiddle} alt="Career Background" className="background-image" />
        </div>
      </div>
    </div>
  );
};

export default CareersMiddle;
