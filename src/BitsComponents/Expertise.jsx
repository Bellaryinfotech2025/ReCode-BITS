import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../BitsStyles/Expertise.css'; // Import the updated CSS file
import expertise1 from '../BitsImages/mobile app imagek.webp';
import expertise2 from '../BitsImages/imageofbilling2.jpg';
import expertise3 from '../BitsImages/webisteimageservice.jpg';

const services = [
  {
    title: 'Mobile App Development',
    description: 'We build intuitive and high-performing mobile apps for all platforms.',
    image: expertise1, 
    link: '/service-bits'  // Add link to each service page
  },
  {
    title: 'Billing Solutions',
    description: 'We provide solutions for your products in secure software.',
    image: expertise2, 
    link: '/billing'  // Add link to each service page
  },
  {
    title: 'Enterprise and Web Application',
    description: 'Robust and scalable solutions for enterprise-level applications.',
    image: expertise3,  
    link: '/service-bits'  // Add link to each service page
  }
];

const Expertise = () => {
  return (
    <div className='servicesthreeboxes'>
      <center>
        <h1>Our Services</h1>
      </center>
      <div className="services-container-bits">
        {services.map((service, index) => (
          <Link to={service.link} className="service-box-bits" key={index}>
            <div className="service-image-bits">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-text-bits">
              <h2 style={{color:'blue'}}>{service.title}</h2>
              <p style={{color:'blue'}}>{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
