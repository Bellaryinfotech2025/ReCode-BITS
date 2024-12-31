import React from 'react';
import '../ServicesStyles/ServiceAbout.css';
import websiteandwebapp from '../BitsImages/website & web app imagek.jpg';
const ServiceAbout = () => {
  

   

  return (
    <section className="bodyofservice">
      <div className="container">
        {/* Left side content */}
        <div className="content">
          <p className="description">
            Experience Bellary InfoTech Solutions transformation strategy, supercharge your competitive edge and achieve exponential business outcomes. BITS powers end-to-end software and billing transformation solutions and services that help organizations implement complex global-scale transformation programs.
          </p>

          <div className="features">
            <div className="feature">
              <i className="bi bi-hand-index-thumb feature-icon"></i>
              <div>
                <h3 className="feature-title">Maintenance and Support</h3>
                <p className="feature-text">Regular IT support and maintenance is crucial for a business as it helps in increasing productivity, improving security, reducing costs.</p>
              </div>
            </div>

            <div className="feature">
              <i className="bi bi-gear feature-icon"></i>
              <div>
                <h3 className="feature-title">Secure Applications</h3>
                <p className="feature-text">Implement security and strong authentication for applications procedures and systems to protect your applications and their data privacy.</p>
              </div>
            </div>

            <div className="feature">
              <i className="bi bi-box-seam feature-icon"></i>
              <div>
                <h3 className="feature-title">Custom Software Development</h3>
                <p className="feature-text">We understand the value of your data. That’s why our custom software solutions are designed with the highest standards of security and confidentiality. We ensure your sensitive information is always stored securely, with privacy at the forefront of everything we do.</p>
              </div>
            </div>

            <div className="feature">
              <i className="bi bi-cloud feature-icon"></i>
              <div>
                <h3 className="feature-title">24 * 7 Support</h3>
                <p className="feature-text">At Bellary Infotech, we’re here for you 24/7. No matter the time, our expert team is always ready to assist you, ensuring your business runs smoothly, anytime you need us.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side contact form */}
        <div className="form-container">
        <img src={websiteandwebapp} alt={"scopic altra"} style={{width:'550px',height:'500px',borderRadius:'15px'}} />
          
        </div>
      </div>
    </section>
  );
};

export default ServiceAbout;
