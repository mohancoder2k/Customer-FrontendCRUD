import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const goToAddCustomer = () => {
    navigate('/add-customer');
  };

  const goToListCustomers = () => {
    navigate('/list-customers');
  };

  return (
    <div>
      <h2>Customer Service Portal</h2>
      <button onClick={goToAddCustomer}>Add Customer</button>
      <button onClick={goToListCustomers}>List Customers</button>
    </div>
  );
};

export default HomePage;
