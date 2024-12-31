import React from "react";
import {Link} from 'react-router-dom';
import "../BitsStyles/BlogGenerator.css"; 

const BlogGenerator = () => {
  return (
    <section className="bodyofsection">
      <div className="container">
        <div className="left-panel">
          <div className="step-box">
            <h2 style={{color:'whitesmoke'}}>Share Your Project Vision</h2>
            <div className="step-number">1</div>
          </div>

          <div className="step-box">
            <h2 style={{color:'whitesmoke'}}>Receive a Tailored Plan</h2>
            <div className="step-number">2</div>
          </div>

          <div className="step-box">
            <h2 style={{color:'whitesmoke'}}>Design, Develop  & Deliver </h2>
            <div className="step-number">3</div>
          </div>

          <div className="step-box">
            <h2 style={{color:'whitesmoke'}}>Launch & Support</h2>
            <div className="step-number">4</div>
          </div>
        </div>

        <div className="right-panel">
          <div className="preview-header">
            <div className="dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="url" style={{color:'whitesmoke'}}>bellary infotech.com</div>
          </div>
          <div className="preview-content">
            <div className="input-group">
              <label>Enter Project Title</label>
              <input type="text" value="Your Project Name" />
            </div>
            <div className="input-group">
              <label>Select the service of your business needs.</label>
              <select>
                <option>Mobile Development</option>
                <option>Web Development</option>
                <option>Web Application Development</option>
                <option>Billing Solutions</option>
              </select>
            </div>
            <div className="input-group">
              <label>Designing and Development Support</label>
              <select>
                <option>Custom Software Development</option>
              </select>
            </div>
            <Link to="/contact-bits" ><button className="create-btn">Contact us</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGenerator;
