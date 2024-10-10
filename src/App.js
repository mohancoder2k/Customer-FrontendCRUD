import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AddCustomer from './components/AddCustomer';
import ListCustomer from './components/ListCustomer';
import Home from './components/Home';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add-customer" element={<AddCustomer/>} />
          <Route path="/list-customers" element={<ListCustomer/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
