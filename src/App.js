// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './components/SignInPage/SignInPage'; // Assuming SignInPage.jsx is directly under components/
import HomePage from './components/HomePage/HomePage'; // Assuming HomePage.jsx is directly under components/
import RegisterPage from './components/RegisterPage/RegisterPage';
import DashboardPage from './components/Dashboard/Dashboard'; // Import your DashboardPage component
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;