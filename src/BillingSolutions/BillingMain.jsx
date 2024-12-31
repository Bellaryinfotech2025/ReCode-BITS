import React from 'react';

const BillingMain = () => {
  const styles = {
    container: {
      width: '100%',
      minHeight: '500px',
      background: 'linear-gradient(135deg, #0055ff 0%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden',
      padding: '20px',
      boxSizing: 'border-box',
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '2rem',
      padding: '40px 20px',
    },
    textSection: {
      flex: '1',
      minWidth: '300px',
      color: '#fff',
      zIndex: '1',
    },
    label: {
      fontSize: '14px',
      fontWeight: '600',
      marginBottom: '8px',
      letterSpacing: '1px',
    },
    heading: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '24px',
      lineHeight: '1.2',
    },
    description: {
      fontSize: '18px',
      marginBottom: '32px',
      opacity: '0.9',
    },
    button: {
      backgroundColor: '#000',
      color: '#fff',
      padding: '12px 24px',
      borderRadius: '25px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '500',
      transition: 'background-color 0.3s ease',
    },
    imageSection: {
      flex: '1',
      minWidth: '300px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    circle: {
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    decorativeDot1: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      width: '10px',
      height: '10px',
      backgroundColor: '#fff',
      borderRadius: '50%',
    },
    decorativeDot2: {
      position: 'absolute',
      bottom: '40px',
      left: '20px',
      width: '8px',
      height: '8px',
      backgroundColor: '#fff',
      borderRadius: '50%',
    },
    '@media (max-width: 768px)': {
      content: {
        flexDirection: 'column',
        textAlign: 'center',
      },
      heading: {
        fontSize: '36px',
      },
      circle: {
        width: '300px',
        height: '300px',
      },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.textSection}>
          <div style={styles.label}>Bellary infotech BILLING</div>
          <h1 style={styles.heading}>
            Flexible recurring billing software that scales with your growth.
          </h1>
          <p style={styles.description}>
            Transform your business with our powerful billing solution
          </p>
           
        </div>
        
        <div style={styles.imageSection}>
          <div style={styles.circle}>
            <div style={styles.decorativeDot1}></div>
            <div style={styles.decorativeDot2}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingMain;