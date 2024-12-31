import React from 'react';
import '../ContactStyle/ContactMain.css';
import contact from '../BitsImages/contactimageincontactpage.jpg'; 

const ContactMain = () => {
  return (
    <div className="about-container">
      <img
        src={contact}
        alt="Background"
        className="background-image"
      />
      <div className="about-content">
        <div className="text-container">
          <h1 className="main-heading" style={{color:'#0a192f'}}>Welcome to Bellary InfoTech Solutions</h1>
          <p className="quote" style={{color:'#0a192f'}}>
            "Empowering businesses through innovative technology and strategic solutions."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;