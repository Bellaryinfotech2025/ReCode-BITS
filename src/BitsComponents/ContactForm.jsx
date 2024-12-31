import React, { useState } from 'react';
import '../BitsStyles/ContactForm.css'; 
import logo from '../BitsImages/bits logo.jpeg';
import {Link} from 'react-router-dom';
const ContactForm = () => {
  // State hooks for form values and validation errors
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    agreePrivacy: false
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    agreePrivacy: ''
  });

  const [result, setResult] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Handle form submission with Web3Forms
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Basic validation
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (!/^[6789]\d{9}$/.test(formData.phone)) newErrors.phone = 'Phone number must start with 6, 7, 8, or 9 and be 10 digits';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.agreePrivacy) newErrors.agreePrivacy = 'You must agree to the privacy policy';

    // If no errors, submit the form via Web3Forms
    if (Object.keys(newErrors).length === 0) {
      try {
        setResult("Sending....");
        const web3FormData = new FormData();
        web3FormData.append("access_key", "017080b9-1d21-4076-b2b8-4ea5040869d9");
        web3FormData.append("name", formData.fullName);
        web3FormData.append("email", formData.email);
        web3FormData.append("phone", formData.phone);
        web3FormData.append("message", formData.message);

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: web3FormData
        });

        const data = await response.json();

        if (data.success) {
          setResult("Form Submitted Successfully");
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            message: '',
            agreePrivacy: false
          });
        } else {
          setResult(data.message);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setResult("An error occurred. Please try again.");
      }
    }

    setErrors(newErrors);
  };

  // Handle WhatsApp click
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello, how may I help you?');
    const phone = '+919035299266'; // assuming you want to send the phone number
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section className="bodyofcontact">
      <div className="container">
        {/* Contact Form Section */}
        <div className="contact-form">
          <h1 className="form-title">Drop a message to us</h1>
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="We are sincerely pleased to know your full name"
                required
              />
              {errors.fullName && <div className="error">{errors.fullName}</div>}
            </div>

            <div className="form-group">
              <label>Email address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="We build a relationship, not interrupt your workflow"
                required
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label>Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your phone number"
                required
              />
              {errors.phone && <div className="error">{errors.phone}</div>}
            </div>

            <div className="connect-buttons">
            <Link 
        to="https://www.google.com/maps?q=Your+Address+Here"  
        target="_blank" 
        rel="noopener noreferrer"
      >
              <button type="button" className="connect-btn">Reach Us via google Maps</button>
              </Link>
              <span style={{ color: 'white', alignSelf: 'center' }}>OR</span>
              <button type="button" className="connect-btn" onClick={handleWhatsAppClick}>Connect via WhatsApp</button>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Need a requirement solved, let's us help."
                style={{ resize: 'none' }}
              ></textarea>
              {errors.message && <div className="error">{errors.message}</div>}
            </div>

            <div className="checkbox-group">
              <input
                type="checkbox"
                id="privacy"
                name="agreePrivacy"
                checked={formData.agreePrivacy}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="privacy" style={{color:'whitesmoke'}}>I agree to provide information in accordance with Bellary Infotech privacy policies.</label>
              {errors.agreePrivacy && <div className="error">{errors.agreePrivacy}</div>}
            </div>

            <button type="submit" className="submit-btnn">Submit</button>
          </form>
          <span>{result}</span>
        </div>

        {/* Scheduler Section */}
        <div className="scheduler" style={{ width: '500px' }}>
          <div className="profile">
            <img src={logo} alt="Profile" className="profile-img" />
            <h2 className="meeting-title">Bellary Infotech Solutions | MEETING & GREETING</h2>
             
          </div>

          <div className="contact-details">
            <div className="contact-item">
            <i className="bi bi-geo-alt-fill contact-icon"></i> 
              <span>Plot No 7, Ward No 18/21, Kappagal Road, M V Nagar 9th Cross, Bellary 583103</span>
            </div>
            <div className="contact-item">
            <i className="bi bi-telephone-fill contact-icon"></i>
              <span>+91 9603299266</span>
            </div>
            <div className="contact-item">
            <i className="bi bi-telephone-fill contact-icon"></i>
              <span>+91 9703299266</span>
            </div>
            <div className="contact-item">
            <i className="bi bi-envelope-fill contact-icon"></i>
              <span>info@bellaryinfotech.com</span>
            </div>
          </div>
          <h4>Follow Us</h4>
          <div className="social-icons">
            <Link to="https://www.facebook.com/BellaryInfotech" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link to="https://twitter.com/BellaryInfotech" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
            </Link>
            <Link to="https://www.linkedin.com/company/BellaryInfotech" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </Link>
            <Link to="https://www.instagram.com/BellaryInfotech" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </Link>
          </div>

          <div className="quote" style={{color:'#0a192f'}}>"Empowering your IT solutions for a better tomorrow."</div>

           
        </div>
      </div>
    </section>
  );
};

export default ContactForm;