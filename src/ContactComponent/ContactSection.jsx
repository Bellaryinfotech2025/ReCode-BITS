import React, { useState } from "react";
import "../ContactStyle/ContactSection.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interestedIn: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "interestedIn",
      "message",
    ];
    let valid = true;

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        valid = false;
      }
    });

    if (!valid) {
      alert("Please fill in all required fields.");
      return;
    }

    setResult("Sending...");

    // Prepare the form data for submission
    const formPayload = new FormData();
    Object.keys(formData).forEach((key) => {
      formPayload.append(key, formData[key]);
    });

    formPayload.append("access_key", "017080b9-1d21-4076-b2b8-4ea5040869d9");

    // Sending form data to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formPayload,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        interestedIn: "",
        message: "",
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-section">
      <div className="info-section">
        <h2>About Bellary Infotech Solutions</h2>
        <p>
          Bellary Infotech provides cutting-edge IT solutions to businesses
          globally. We help solve complex challenges using Modern technologies,
          and talented Developers. Our expertise spans various industries such
          as billing and technology.
        </p>
        <div className="contact-quote">
          <h3>Contact Us Today</h3>
          <p style={{ color: "whitesmoke" }}>
            Our team is here to assist you. Reach out and let's discuss how we
            can help your business grow.
          </p>
        </div>
      </div>

      <div className="form-section">
        <h2>Contact Form</h2>
        <form onSubmit={onSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="Enter your First Name"
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required 
                placeholder="Enter your Last Name"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your Email Address"
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your Phone Number"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Interested In</label>
            <select
              name="interestedIn"
              value={formData.interestedIn}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option value="webDev">Web Development</option>
              <option value="mobileApp">Mobile App Development</option>
              <option value="consulting">Consulting</option>
              <option value="support">IT Support</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Let us know how we can help"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
        {result && <p>{result}</p>}
      </div>
    </div>
  );
}
