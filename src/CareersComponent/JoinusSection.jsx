 import React from 'react';
import '../CareersStyles/JoinusSection.css';
import joinimage1 from '../BitsImages/careersimage1.webp';
import joinimage2 from '../BitsImages/careersimage12.jpg';
import joinimage3 from '../BitsImages/careersimage3.webp';
import joinimage4 from '../BitsImages/careers4.webp';
import joinimage5 from '../BitsImages/careersimage5.webp';
import joinimage6 from '../BitsImages/careersimage6.webp';
 
 const JoinUsSection =()=>{
    return(
<>
   <section className="bodyofcareers">
   <center>
      <h1 classNameName="hero-heading" style={{color:'orange',fontSize:'50px'}}>You Would Love to Work with Us</h1>
      </center>
      <br/>
    <div className="showcase">
        <div className="project-card">
            <img src={joinimage1} alt="Awsmd Team" className="project-image"/>
            <div className="project-overlay">
                <h3 className="project-title">Innovative Team</h3>
                <p className="project-description">Marketing careers platform with advanced filtering and dynamic team profiles.</p>
            </div>
            <span className="project-tag">TEAM</span>
        </div>

        <div className="project-card">
            <img src={joinimage2}alt="QClay" className="project-image"/>
            <div className="project-overlay">
                <h3 className="project-title">Talented Developers</h3>
                <p className="project-description">Modern collaboration platform for remote teams with integrated workflow tools.</p>
            </div>
            <span className="project-tag">TEAM</span>
        </div>

        <div className="project-card">
            <img src={joinimage3} alt="Jordan Hughes" className="project-image"/>
            <div className="project-overlay">
                <h3 className="project-title">Talented Resources</h3>
                <p className="project-description">Professional portfolio showcasing product design and development work.</p>
            </div>
            <span className="project-tag">PRO</span>
        </div>

        <div className="project-card">
            <img src={joinimage4} alt="Odama" className="project-image"/>
            <div className="project-overlay">
                <h3 className="project-title">Quality Testers</h3>
                <p className="project-description">Project management system with real-time collaboration features.</p>
            </div>
            <span className="project-tag">TEAM</span>
        </div>

        <div className="project-card">
            <img src={joinimage5} alt="Elegant Seagulls" className="project-image"/>
            <div className="project-overlay">
                <h3 className="project-title">Smart and Creative Developers</h3>
                <p className="project-description">Interactive interview journey platform with seamless mobile experience.</p>
            </div>
            <span className="project-tag">TEAM</span>
        </div>

        <div className="project-card">
            <img src={joinimage6} alt="Habitat" className="project-image"/>
            <div className="project-overlay">
                <h3 className="project-title">One stop Solution</h3>
                <p className="project-description">Career development platform with personalized job matching.</p>
            </div>
            <span className="project-tag">TEAM</span>
        </div>
    </div>
    </section>
</>
    );
 }
 export default JoinUsSection;