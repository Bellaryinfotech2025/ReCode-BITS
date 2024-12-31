import React from 'react';
import '../BitsStyles/Featurechoose.css';
import video from '../BitsImages/video of BITS.mp4';
const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <div className="feature-card" style={{ animationDelay: `${delay}s` }}>
      <div className="icon-wrapper">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Featurechoose = () => {
  return (
    <div className="feature-section">
      <div className="container">
        <h1 className="main-title">
          Why choose <span className="gradient-text">Bellary InfoTech</span>
        </h1>

        <div className='video-container'>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="feature-video"
            width="100%"
            height="auto"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="features-grid">
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" className="icon" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>}
            title="Business Seniors"
            description="Leverage our experience to transform your ideas into impactful solutions, helping you grow and stay ahead in business by continuous improvement."
            delay={0.1}
          />

          <FeatureCard
            icon={<svg viewBox="0 0 24 24" className="icon" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>}
            title="One-stop solution"
            description="Our team of specialists excels in providing all-in-one solutions for your business needs, streamlining your comprehensive projects, leveraging our One-stop solution ecosystem for full-scope support."
            delay={0.3}
          />

          <FeatureCard
            icon={<svg viewBox="0 0 24 24" className="icon" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>}
            title="Talented resources"
            description="Access top-tier global talent, delivering high-quality software solutions with expertise in mobile, web apps, and business automation."
            delay={0.5}
          />

          <FeatureCard
            icon={<svg viewBox="0 0 24 24" className="icon" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>}
            title="Security and Support"
            description="Our strict privacy policy ensures data security, and we provide continuous, reliable support to keep your systems secure, operational, and optimized for growth."
            delay={0.7}
          />
        </div>
      </div>
    </div>
  );
};

export default Featurechoose;
