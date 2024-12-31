import React, { useEffect, useState } from 'react';
import '../BitsStyles/Community.css';
import {Link} from 'react-router-dom';
const Community = () => {
  const [inView, setInView] = useState(false);

  // Detect when the user scrolls into the component view
  const handleScroll = () => {
    const section = document.getElementById('community-section');
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      setInView(true);
    }
  };

  useEffect(() => {
    // Initial check if the section is in view
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="bodyofcommunity" id="community-section">
      <div className="c-container">
        <div className="grid">
          {/* Left Section */}
          <div>
            <div className="community-label">Kick Start Your Next Project with bellary Infotech Solutions</div>
            <h1
              className="title"
              style={{
                color: 'whitesmoke',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(100px)',
                transition: 'transform 1s ease-out, opacity 1s ease-out',
                fontSize:'50px',
              }}
            >
              
              
            </h1>
            <p
              className="description"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(100px)',
                transition: 'transform 1s ease-out, opacity 1s ease-out',
              }}
            >
              🌟 Bellary Infotech Solutions – Empowering Businesses with Smart Software! Transform your ideas into reality with our Web Apps, Websites, and Billing & Payment Solutions.
            </p>
            <div className="buttons">
            <Link
        to="https://www.google.com/maps?q=Your+Address+Here"  
        target="_blank" 
        rel="noopener noreferrer"
      >
              <button className="btn btn-primary">
                Reach us
                <span>→</span>
              </button>
              </Link>
            </div>
            <div className="code-block">
              Bellary InfoTech Solutions
            </div>
          </div>

          {/* Right Section */}
          <div>
            <div
              className={`card ${inView ? 'show' : ''}`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(50px)',
                transition: 'transform 1s ease-out, opacity 1s ease-out',
              }}
            >
              <div className="card-content">
                <svg
                  className="card-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                </svg>
                <div>
                  <h3 className="card-title" style={{ color: '#374151' }}>
                    Mobile App and Web Application Development and Website Development
                  </h3>
                  <p className="card-description" style={{ color: '#60A5FA' }}>
                    Bringing Your Ideas to Life with Innovative Mobile Apps, Dynamic Web Applications, and Stunning Websites that Drive Growth and Engagement.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`card ${inView ? 'show' : ''}`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(50px)',
                transition: 'transform 1s ease-out, opacity 1s ease-out',
              }}
            >
              <div className="card-content">
                <svg
                  className="card-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 4h-4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4M5 8h6m-6 4h6m-6 4h6" />
                </svg>
                <div>
                  <h3 className="card-title" style={{ color: '#374151' }}>
                    Billing Solutions and Payment Systems
                  </h3>
                  <p className="card-description" style={{ color: '#60A5FA' }}>
                    Revolutionize Your Transactions with Smart Billing Solutions and Effortless Payment Systems that Ensure Accuracy, Security, and Seamless Customer Experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
