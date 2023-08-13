import React from 'react';

const LandingPage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1></h1>
        <p>Your trusted partner for medical assistance and more</p>
      </header>
      <section style={styles.section}>
        <div style={styles.feature}>
          <h2>Medical Assistance</h2>
          <p>Access to qualified medical professionals at your fingertips.</p>
        </div>
        <div style={styles.feature}>
          <h2>Activities Tracker</h2>
          <p>Stay active and healthy with our easy-to-use activity tracking.</p>
        </div>
       
      </section>
      <div style={styles.feature}>
      <h2>Fall Detection</h2>
      <p>Advanced fall detection technology for your safety.</p>
    </div>
      <section style={styles.services}>
        <h2>Our Services</h2>
        <ul style={styles.serviceList}>
          <li>24/7 Medical Consultation</li>
          <li>Health Checkups</li>
          <li>Medication Reminders</li>
          <li>Emergency Assistance</li>
        </ul>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  header: {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    marginBottom: '20px',
  },
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px',
  },
  feature: {
    flex: 1,
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    margin: '0 10px',
  },
  services: {
    marginBottom: '30px',
  },
  serviceList: {
    listStyle: 'none',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  serviceListItem: {
    padding: '10px',
    margin: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
};

export default LandingPage;
