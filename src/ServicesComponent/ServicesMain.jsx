import React from 'react';
import '../AboutStyles/AboutMain.css';
import Servicemainimage from '../BitsImages/services-main-images.jpg'; 

const ServiceMain = () => {
  return (
    <div className="about-container">
      <img
        src={Servicemainimage}
        alt="Background"
        className="background-image"
      />
      <div className="about-content">
        <div className="text-container">
          <h1 className="main-heading">Where innovation meets precision to elevate your business.</h1>
          <p className="quote">
            "Empowering businesses through innovative technology and strategic solutions."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceMain;
