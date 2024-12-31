import React, { useState, useEffect } from 'react';
import '../BitsStyles/Carouselnew.css';

// Sample Images (Replace with your own image URLs)
import slide2 from '../BitsImages/slide1carousel1.jpg';
import slide1 from '../BitsImages/Slide1carousel.jpg';
import slide3 from '../BitsImages/slide3.jpg';
import slide4 from '../BitsImages/slide4.jpg';
import slide5 from '../BitsImages/slide5.jpg';

const Carouselnew = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Transforming businesses with innovative solutions",
      description: "We specialize in providing cutting-edge and digital solutions for your business.",
      image: slide1,
    },
    {
      title: "Excellence through technology",
      description: "Our expert team builds scalable and secure applications for various industries.",
      image: slide2,
    },
    {
      title: "Building modern mobile and web applications",
      description: "Crafting user-centric applications with modern technologies.",
      image: slide3,
    },
    {
      title: "Smart enterprise solutions",
      description: "Designing enterprise-grade applications that scale with your business.",
      image: slide4,
    },
    {
      title: "Future-proof enterprise applications",
      description: "Developing next-generation applications for the digital age.",
      image: slide5,
    },
  ];

  // Automatically change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel-container">
      <div className="carousel-slide" key={currentSlide}>
        <div className="slide-text">
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].description}</p>
        </div>
        <div className="slide-image">
          <img src={slides[currentSlide].image} alt={`Slide ${currentSlide}`} />
        </div>
      </div>
      <div className="radio-controls">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`radio-btn ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carouselnew;
