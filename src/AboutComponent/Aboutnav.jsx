import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../BitsStyles/Carouselpage.css';

const Aboutnav = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  return (
    <div className="bodyofcarousel">
      <nav>
        <div className="logo">BITS</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about-us">About us</Link>

          {/* Capabilities Dropdown */}
           <Link to="/billing">Billing Solutions</Link>

          {/* Services Dropdown */}
          <div className="dropdown">
            <Link to="/service-bits" className="dropbtn">Services</Link>
            <div className="dropdown-content">
              <Link to="/">IT Services</Link>
              <Link to="/">Billing Solutions</Link>
              <Link to="/">Support Projects</Link>
            </div>
          </div>

           
          <Link to="/career-bits">Careers</Link>
          <Link to="/contact-bits">Contact us</Link>
        </div>

        <div className="hamburger" onClick={() => setMobileMenuActive(!mobileMenuActive)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileMenuActive ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about-us">About us</Link>
        <Link to="/billing">Billing Solutions</Link>
        <Link to="/service-bits">Services</Link>
        
        <Link to="/career-bits">Careers</Link>
        <Link to="/contact-bits">Contact us</Link>
      </div>
    </div>
  );
};

export default Aboutnav;
