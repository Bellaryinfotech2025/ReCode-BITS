import React from 'react';
import '../AboutStyles/AboutMain.css';
import aboutimage from '../BitsImages/Aboutimage.jpg'; 

const AboutMain = () => {
  return (
     <>
      <div>
      <br/>
      <br/>
      <br/>
        <img src={aboutimage} alt="aptitude" style={{width:'100%',height:'450px'}}/>
      </div>
     </>
  );
};

export default AboutMain;
