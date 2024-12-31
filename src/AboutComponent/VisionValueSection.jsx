import React from 'react';
import '../AboutStyles/PurposeValuesSection.css';  // Ensure the styles are being imported
import purpose from '../BitsImages/purposeimage.jpeg';
import vision from '../BitsImages/vision image.jpeg';
import values from '../BitsImages/valuesimage.jpeg';

const VisionValueSection = () => {
  const cards = [
    { title: "Purpose", image: purpose, alt: "Purpose" },
    { title: "Vision", image: vision, alt: "Vision" },
    { title: "Values", image: values, alt: "Values" }
  ];

  return (
    <div className="section-container">
      <div className="content-wrapper">
        <p className="description-text">
          Bellary InfoTech Solutions purpose is enshrined in our values and reflected in the mindfulness we bring to using technology and solving business problems. Purpose guides our actions; it shapes strategy and provides predictability to execution; it is the foundation for service excellence. Our clients, from across industries, geographies, and cultures, partner with us for what we do—and as much for why we do it. The purpose, vision, and values of BITS ensure we are committed to sustainable growth that propels our clients towards the future, faster – together.
        </p>

        <div className="card-container">
          <div className="card-grid">
            {cards.map((card, index) => (
              <div key={index} className="card-wrapper">
                <img 
                  src={card.image} 
                  alt={card.alt}
                  className="card-image"
                />
                <div className="overlay" />
                <h2 className="title">{card.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionValueSection;
