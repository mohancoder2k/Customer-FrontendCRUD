import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListCustomer = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/customerservice')
      .then(response => {
        setCustomers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching customers!', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/customerservice/${id}`)
      .then(response => {
        setCustomers(customers.filter(customer => customer.id !== id));
        alert('Customer deleted successfully!');
      })
      .catch(error => {
        console.error('There was an error deleting the customer!', error);
      });
  };

  const handleUpdate = (id) => {
    const name = prompt('Enter new name');
    const address = prompt('Enter new address');

    axios.put(`http://localhost:8080/customerservice/${id}`, { id, name, address })
      .then(response => {
        setCustomers(customers.map(customer =>
          customer.id === id ? { ...customer, name, address } : customer
        ));
        alert('Customer updated successfully!');
      })
      .catch(error => {
        console.error('There was an error updating the customer!', error);
      });
  };

  const styles = {
    container: {
      width: '90%',
      margin: '50px auto',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      textAlign: 'center',
      fontSize: '28px',
      marginBottom: '20px',
      color: '#333',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '40px',
    },
    th: {
      backgroundColor: '#007BFF',
      color: '#fff',
      padding: '12px',
      fontSize: '16px',
    },
    td: {
      padding: '12px',
      textAlign: 'center',
      borderBottom: '1px solid #ddd',
    },
    button: {
      margin: '5px',
      padding: '8px 16px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '14px',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Customer List</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Address</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td style={styles.td}>{customer.id}</td>
              <td style={styles.td}>{customer.name}</td>
              <td style={styles.td}>{customer.address}</td>
              <td style={styles.td}>
                <button
                  style={styles.button}
                  onClick={() => handleUpdate(customer.id)}
                  onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                  onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                >
                  Update
                </button>
                <button
                  style={styles.button}
                  onClick={() => handleDelete(customer.id)}
                  onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                  onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListCustomer;
