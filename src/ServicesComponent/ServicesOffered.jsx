import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem 0;
  background-color: #2a2678;  
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Box = styled.div`
  width: calc(25% - 1rem);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  transition: transform 0.5s ease-in-out;
  background-color: white; 
  cursor:pointer;
  &:hover {
    transform: translateY(-5px);
  } 

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 3rem;
  }
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #2a2678;  
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #999;  
`;

const Section = styled.section`
  padding: 2rem;
  background-color: #2a2678;  
`;

const Services = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = document.querySelector('.services-section').offsetTop;
      const windowTop = window.scrollY;

      if (windowTop > sectionTop - window.innerHeight / 2) {
        setIsAnimated(true);
      } else {
        setIsAnimated(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    {
      icon: 'bi-diagram-3',
      title: 'Mobile App Development',
      description: 'Tailored Mobile App Development services that desingn an develop your dream app as your vision',
    },
    {
      title: 'Billing Solutions',
      description: 'Our Billing services range with huge billing solutions and billign payment software',
    },
    {
      title: 'Website Development',
      description: 'We Design your website on a familiar and mobile responsive with powerful visual tools for full creative control',
    },
    {
      title: 'Web Application Development',
      description: 'We build robust, scalable web applications that evolve with your business needs and user expectations that understands your customers.',
    },
    {
      title: 'Software Support and Development ',
      description: 'We provide Rapid, repeatable, software support for your business and applications',
    },
    {
      title: 'Billing Systems Payments',
      description: 'Our secure billing and payment integration ensures the highest level of data protection, keeping your customers’ payment information safe and your business compliant',
    },
    {
      title: 'Billing Payment Integration',
      description: 'We provide seamless billing and payment integration solutions, ensuring a smooth and efficient transaction experience for your customers',
    },
    {
      title: 'IT Support Projects',
      description: 'Bellary Infotech accepts comprehensive IT support services, ensuring seamless operations and timely resolutions for all your technical needs',
    },
  ];

  return (
    <Section className="services-section">
    <center>
      <h2 style={{color:'whitesmoke',fontWeight:'bold'}}>Specific Services Offered for your Business Needs</h2>
      </center>
      <p style={{color:'whitesmoke'}}>With over 10+ discrete services across technology strategy, migration and modernization, engineering, modern styling an design, and ways of working and managed services, Bellary InfoTech has limitless potential.</p>
      <Container>
        {services.map((service, index) => (
          <Box
            key={index}
            style={{
              transform: isAnimated
                ? `translateY(${index % 2 === 0 ? 10 : -10}px)`
                : 'translateY(100px)',
              opacity: isAnimated ? 1 : 0,
            }}
          >
            <Title>{service.title}</Title>
            <Description>{service.description}</Description>
          </Box>
        ))}
      </Container>
    </Section>
  );
};

export default Services;