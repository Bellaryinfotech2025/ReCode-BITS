import React, { useEffect } from 'react';
import '../AboutStyles/AboutCEO.css';
import photoofceo from '../BitsImages/photoofceo.jpeg';
const CeoSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-bottom');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <div className="ceo-container">
      <div className="ceo-content">
        <div className="ceo-image-container animate-bottom">
          <img src={photoofceo} alt="CEO" className="ceo-image" />
        </div>
        
        <div className="ceo-statement animate-bottom">
          <h2>CEO's statement</h2>
          <p>At Bellary InfoTech Solutions, we’ve built our reputation on trust and reliability. Our clients turn to us not just for software solutions, but for a partnership 
          they can count on. We’re committed to understanding the unique challenges they face and delivering the right tools to help them grow. For us, it’s
           never about just meeting expectations—it’s about building relationships and creating software that truly makes a difference. We’re proud of the trust our clients place in us,
            and we’re dedicated to earning it every day..</p>
           
        </div>
      </div>

      <div className="philosophy-section">
        <div className="philosophy-grid">
          <div className="philosophy-card animate-bottom">
            <h3>Philosophy</h3>
             
            <p>Bellary InfoTech prioritizes understanding customers and cultures to develop their Design. impactful Our team fosters excellence and empowers individuals.</p>
          </div>

          <div className="philosophy-card animate-bottom">
            <h3>Mission</h3>
             
            <p>Bellary InfoTech is committed to delivering secure, scalable, and user-friendly technology that helps your valuable business in the digital world and run your business tech future.</p>
          </div>

          <div className="philosophy-card animate-bottom">
            <h3>Vision</h3>
             
            <p>Our vision is to be a global leader in software innovation, developing and Designing our clients business needs and their projects.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeoSection;
