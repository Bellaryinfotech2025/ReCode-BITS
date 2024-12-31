import React from 'react';

const Billingchoose = () => {
  const styles = {
    container: {
      width: '100%',
      padding: '40px 20px',
      background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
      minHeight: '100vh',
      boxSizing: 'border-box',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    title: {
      fontSize: '2.5rem',
      color: '#333',
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    gridContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      padding: '20px',
    },
    card: {
      background: 'linear-gradient(135deg, lightblue 0%, #f0f7ff 100%)',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
    },
    iconContainer: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: '#1a472a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    icon: {
      width: '30px',
      height: '30px',
      color: '#ffffff',
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '12px',
    },
    description: {
      color: '#666',
      fontSize: '1rem',
      lineHeight: '1.5',
      marginBottom: '20px',
    },
    link: {
      display: 'inline-flex',
      alignItems: 'center',
      color: '#1a472a',
      textDecoration: 'none',
      fontSize: '0.9rem',
      fontWeight: '500',
    },
    arrow: {
      marginLeft: '8px',
    },
  };

  const features = [
    {
      icon: '📦',
      title: 'Flexible pricing and packaging',
      description: 'Easily design, deploy, and iterate on pricing and packaging to stay competitive.',
    },
    {
      icon: '💰',
      title: 'Subscription, milestone, and hybrid billing',
      description: 'Meet changing market demands with out-of-the-box recurring billing software for any business model.',
    },
    {
      icon: '📊',
      title: 'Usage metering and billing',
      description: 'Capture, consolidate, and monetize consumption data all in one solution.',
    },
    {
      icon: '📄',
      title: 'E-invoicing and tax compliance',
      description: 'Ensure tax and e-invoicing requirement compliance with pre-built integrations.',
    },
    {
      icon: '🌐',
      title: 'Global payments orchestration',
      description: 'Optimize payment success and scale globally across 40+ pre-built payment gateway',
    },
    {
      icon: '⚡',
      title: 'API-first and built to scale',
      description: 'Scale transactions as your business grows without any impact on performance.',
    },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.title}>Why Choose Bellary Infotech Billing?</h2>
      </header>
      
      <div style={styles.gridContainer}>
        {features.map((feature, index) => (
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
            <div style={styles.iconContainer}>
              <span style={styles.icon}>{feature.icon}</span>
            </div>
            <h3 style={styles.cardTitle}>{feature.title}</h3>
            <p style={styles.description}>{feature.description}</p>
             
          </div>
        ))}
      </div>
    </div>
  );
};

export default Billingchoose;