import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import VideoSrc from '../BitsImages/Slide1carousel.jpg';

const Section = styled.section`
  display: flex;
  align-items: center;
  background-image: linear-gradient(37deg, rgb(32, 218, 233),rgb(40, 21, 236));
  padding: 5rem 0;
`;
const ContentContainer = styled.div`
  width: 60%;
  padding-left: 4rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
`;

const Quote = styled.blockquote`
  border-left: 5px solid #333;
  padding-left: 1rem;
  margin-top: 2rem;
  font-style: italic;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
`;

const ITServiceSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = document.querySelector('.it-services-section').offsetTop;
      const windowTop = window.scrollY;

      if (windowTop > sectionTop - window.innerHeight / 2) {
        setIsAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Section className="it-services-section">
       
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={VideoSrc} alt="magnitude" style={{width:'500px', height:'350px'}}/>
      
      <ContentContainer>
        <Title style={{ opacity: isAnimated ? 1 : 0, transform: isAnimated ? 'translateY(0)' : 'translateY(50px)' }}>
          Transforming Businesses with Innovative IT Solutions
        </Title>
        <Text style={{ opacity: isAnimated ? 1 : 0, transform: isAnimated ? 'translateY(0)' : 'translateY(50px)', color:'whitesmoke' }}>
          We provide a comprehensive range of IT services tailored to meet the unique needs of your organization. From cloud computing and cybersecurity to data analytics and software development, our expert team delivers cutting-edge solutions that drive growth and efficiency.
        </Text>
        <Quote style={{ opacity: isAnimated ? 1 : 0, transform: isAnimated ? 'translateY(0)' : 'translateY(50px)' }}>
          “In today's digital age, IT is no longer just a support function; it is the foundation for innovation and success.”
        </Quote>
      </ContentContainer>
    </Section>
  );
};

export default ITServiceSection;