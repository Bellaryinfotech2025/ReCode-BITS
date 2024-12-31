import React, { useEffect } from "react";
import '../BitsStyles/Services.css'; 
import websiteandwebapp from '../BitsImages/website & web app imagek.jpg';
import mobileappimagekk from '../BitsImages/mobile app imagekk.jpg';
import ITsupportprojects from '../BitsImages/ITsupport projects.jpg';
import billingimagek from '../BitsImages/billing solutions imagek.jpg';
const ExpertiseSection = () => {
  useEffect(() => {
    const serviceCards = document.querySelectorAll('.service-card');

    // Function to handle scroll animation
    function handleScrollAnimation() {
      serviceCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
          card.style.opacity = '1';
          card.style.transform = 'translateX(0)';  
        }
      });
    }

     
    window.addEventListener('scroll', handleScrollAnimation);

     
    handleScrollAnimation();

     
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);  

  return (
    <section className="expertise-section">
    <br/>
      <h2 className="services-heading">We Work With</h2>

      <div className="services-container">
        <div className="service-card web-app" data-aos="fade-right">
          <h2 className="service-title">Web App Development</h2>
          <ul className="service-list">
            <li>
              <span className="check-icon">✓</span>
              Website development
            </li>
            <li>
              <span className="check-icon">✓</span>
              Software development
            </li>
            <li>
              <span className="check-icon">✓</span>
              E-commerce Web App development
            </li>
            <li>
              <span className="check-icon">✓</span>
              Hospital Management
            </li>
            <li>
              <span className="check-icon">✓</span>
              Software Applications
            </li>
          </ul>
          <img
            src={websiteandwebapp}
            alt="Web Development Illustration"
            className="service-image"
          />
        </div>

        <div className="service-card mobile-app" data-aos="fade-left">
          <h2 className="service-title">Mobile App Development</h2>
          <ul className="service-list">
            <li>
              <span className="check-icon">✓</span>
              Android app development
            </li>
            <li>
              <span className="check-icon">✓</span>
              iOS app development
            </li>
            <li>
              <span className="check-icon">✓</span>
              React Native Cross Platform App Development
            </li>
            <li>
              <span className="check-icon">✓</span>
              Mobile App Support & Maintenance
            </li>
            <li>
              <span className="check-icon">✓</span>
              Flutter Cross Platform App Development
            </li>
          </ul>
          <img
            src={mobileappimagekk}
            alt="Mobile Development Illustration"
            className="service-image"
          />
        </div>

        <div className="service-card staff" data-aos="fade-right">
          <h2 className="service-title">Billing Solutions</h2>
          <ul className="service-list">
            <li>
              <span className="check-icon">✓</span>
              Billing Analytics and Reporting
            </li>
            <li>
              <span className="check-icon">✓</span>
              Billing software Integration
            </li>
            <li>
              <span className="check-icon">✓</span>
              Custom Billing Solutions
            </li>
            <li>
              <span className="check-icon">✓</span>
              Payment gateway Integration
            </li>
            <li>
              <span className="check-icon">✓</span>
              Billing Systems Development
            </li>
          </ul>
          <img
            src={billingimagek}
            alt="Billing Solutions"
            className="service-image"
          /> 
        </div>

        <div className="service-card emerging" data-aos="fade-left">
          <h2 className="service-title">IT Support Projects</h2>
          <ul className="service-list">
            <li>
              <span className="check-icon">✓</span>
              Sodtware Support Projects
            </li>
            <li>
              <span className="check-icon">✓</span>
              Custom Software development
            </li>
            <li>
              <span className="check-icon">✓</span>
              Helpdesk Ticketing System Implementation
            </li>
            <li>
              <span className="check-icon">✓</span>
              API Integration
            </li>
          </ul>
          <img
            src={ITsupportprojects}
            alt="Emerging Technology Illustration"
            className="service-image"
          />
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
