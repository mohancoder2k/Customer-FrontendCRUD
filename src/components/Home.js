import React from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../assets/bg.jpg'; // Import the image

const Home = () => {
  const navigate = useNavigate();

  const goToAddCustomer = () => {
    navigate('/add-customer');
  };

  const goToListCustomers = () => {
    navigate('/list-customers');
  };

  const styles = {
    container: {
      textAlign: 'center',
      padding: '50px',
      backgroundColor: '#f0f4f7',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    },
    heading: {
      fontSize: '36px',
      color: '#333',
      marginBottom: '20px'
    },
    description: {
      fontSize: '18px',
      color: '#666',
      marginBottom: '40px'
    },
    button: {
      padding: '12px 24px',
      margin: '10px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    footer: {
      marginTop: '40px',
      fontSize: '14px',
      color: '#aaa',
    },
    image: {
      width: '100%', // Make the image responsive
      maxHeight: '300px', // Set a max height for the image
      objectFit: 'cover', // Ensures the image maintains aspect ratio and covers the area
      marginBottom: '20px',
      borderRadius:'20%' // Add space below the image
    }
  };

  return (
    <div style={styles.container}>
      {/* Image element at the top */}
      <img src={bg} alt="Background" style={styles.image} />
      
      <h2 style={styles.heading}>Customer Service Portal</h2>
      <p style={styles.description}>
        Welcome to the Customer Service Portal. Manage your customers efficiently by adding new customers or reviewing the list of current customers. Use the buttons below to navigate to the desired section.
      </p>
      <button 
        style={styles.button} 
        onClick={goToAddCustomer}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        Add Customer
      </button>
      <button 
        style={styles.button} 
        onClick={goToListCustomers}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        List Customers
      </button>
      <div style={styles.footer}>
        <p>&copy; 2024 Customer Service Portal | All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;
