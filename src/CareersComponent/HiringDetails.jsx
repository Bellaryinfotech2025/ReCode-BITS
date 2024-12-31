import React, { useState } from 'react';
import '../CareersStyles/Hiringsection.css';

const HiringSection = () => {
  const [buttonHover, setButtonHover] = useState(false);

  // Handle the mouse enter and leave for button hover effect
  const handleMouseEnter = () => {
    setButtonHover(true);
  }

  const handleMouseLeave = () => {
    setButtonHover(false);
  };

  return (
    <section className="hiring-section">
      <div className="content">
        <h2 className="heading">We're Hiring!</h2>
        <p className="paragraph">
          Join our innovative team and shape the future with us. We’re looking for passionate and talented individuals who thrive in a dynamic, creative environment. Ready to make an impact? Let’s build something great together.
        </p>
        <button 
          className={`apply-btn ${buttonHover ? 'hovered' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default HiringSection;
