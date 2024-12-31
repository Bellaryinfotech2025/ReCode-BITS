import React from 'react';
import image1 from '../BitsImages/billing solutions imagek.jpg';
import image2 from '../BitsImages/imageofbilling2.jpg';
import image3 from '../BitsImages/billing.jpeg';
const ResourceSection = () => {
  const styles = {
    container: {
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px',
    },
    title: {
      fontSize: '2.5rem',
      color: '#333',
      marginBottom: '30px',
    },
    resourceGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      marginBottom: '80px',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
    },
    cardImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    cardContent: {
      padding: '20px',
    },
    cardTag: {
      display: 'inline-block',
      fontSize: '0.8rem',
      color: '#666',
      marginBottom: '10px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    cardTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '15px',
      color: '#333',
    },
    cardText: {
      fontSize: '0.9rem',
      color: '#666',
      lineHeight: '1.5',
      marginBottom: '20px',
    },
    readMore: {
      display: 'inline-flex',
      alignItems: 'center',
      color: '#333',
      textDecoration: 'none',
      fontSize: '0.9rem',
      fontWeight: '500',
    },
    journeySection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      alignItems: 'center',
      padding: '40px 0',
    },
    journeyContent: {
      maxWidth: '500px',
    },
    journeyTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#333',
    },
    journeyText: {
      fontSize: '1rem',
      color: '#666',
      lineHeight: '1.6',
      marginBottom: '30px',
    },
    buttonContainer: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
    },
    primaryButton: {
      backgroundColor: '#000',
      color: '#fff',
      padding: '12px 24px',
      borderRadius: '25px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '500',
    },
    secondaryButton: {
      backgroundColor: '#fff',
      color: '#000',
      padding: '12px 24px',
      borderRadius: '25px',
      border: '1px solid #000',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '500',
    },
    careerSection: {
      backgroundColor: 'lightblue',
      padding: '30px',
      borderRadius: '12px',
      marginTop: '40px',
    },
    careerTitle: {
      fontSize: '1.5rem',
      marginBottom: '15px',
    },
    careerText: {
      marginBottom: '20px',
    },
    careerLink: {
      color: '#000',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
    },
  };

  const resources = [
    {
      image: image1,
      
      title: "Driving Efficiency with Leading Billing Solutions",
      text: "Discover how industry pioneers like Zoom and GoPro have revolutionized their financial operations using advanced billing and payment software. From automating invoice generation to streamlining payment workflows, these companies have unlocked new opportunities for growth and operational excellence."
    },
    {
      image: image2,
      
      title: "The Role of Smart Invoicing in Business Growth",
      text: "Explore the latest trends in billing and invoicing software that are enabling businesses to scale with confidence. This report dives into the impact of automation, real-time payment processing, and advanced tax compliance features that simplify financial management and support sustainable growth."
    },
    {
      image: image3,
       
      title: "Top Payment Solutions for Innovation",
      text: "An in-depth analysis highlights Zuora's leadership in the payment software landscape. With its comprehensive platform for invoicing, recurring billing, and tax compliance, businesses have found to be the go-to solution for driving efficiency and ensuring accuracy in their financial processes.."
    }
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.title}>Billing resources</h2>
      </header>

      <div style={styles.resourceGrid}>
        {resources.map((resource, index) => (
          <div 
            key={index} 
            style={styles.card}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <img src={resource.image} alt={resource.title} style={styles.cardImage} />
            <div style={styles.cardContent}>
              <span style={styles.cardTag}>{resource.tag}</span>
              <h3 style={styles.cardTitle}>{resource.title}</h3>
              <p style={styles.cardText}>{resource.text}</p>
               
            </div>
          </div>
        ))}
      </div>

      <div style={styles.journeySection}>
        <div style={styles.journeyContent}>
          <h2 style={styles.journeyTitle}>Your journey starts here</h2>
          <p style={styles.journeyText}>
          As your customers redefine how they engage with your products and services, your business must adapt to stay ahead. Discover how our cutting-edge Subscription Economy solutions empower the world’s most forward-thinking businesses to in the ever-evolving landscape of subscriptions.
          </p>
           
        </div>

        <div style={styles.careerSection}>
          <h3 style={styles.careerTitle}>Want to Lead Change?</h3>
          <p style={{color:'black'}}>
            Join our team that transforming the billing solutions in world Economy subscription.
          </p>
           
        </div>
      </div>
    </div>
  );
};

export default ResourceSection;