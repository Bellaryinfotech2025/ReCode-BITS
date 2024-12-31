import React, { useEffect } from 'react';
import '../BitsStyles/Homepage.css';
import heroImage from '../BitsImages/slide1carousel1.jpg';
import {Link} from 'react-router-dom';

const HeroSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.text-content, .image-content');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="content-wrapper">
        <div className="text-content">
          <h1 style={{color:'whitesmoke'}}>Effortless billing for smarter businesses—accuracy, speed, and reliability..</h1>
          <p>Get started with bellary infotech today. For seamless  Invoicing & Billing Automation,Web & Reporting and Analytics and Tax Calculation & Compliance, explore enterprise.</p>
          <div className="cta-buttons">
            <Link to="/billing" className="button primary">Explore Our Billing Services</Link>
            <Link to="/contact-bits" className="button secondary">Contact Us</Link>
          </div>
        </div>
        <div className="image-content">
          <img src={heroImage} alt="Dashboard Interface" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;