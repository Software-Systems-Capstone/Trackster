// RegisterPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // to navigate after registration
import './RegisterPage.css'; // Your styles


const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    // add any other fields you need
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation example
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Here you would send formData to your backend API
    console.log('Form submitted', formData);
    // After successful registration, you might navigate to a different route
    // navigate('/dashboard');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
      <div className="register-container"> {/* Changed the class name to be more specific to registration */}
        <div className="logo-container">
    <Link to="/">
          <img src="/Logo.png" alt="Trackster Logo" className="sign-in-logo"/>
        </Link>
    </div>
        <div className="register-box">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
            />
            <button type="submit">Register</button>
            <p className="already-user">
              Already a user? <Link to="/signin">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
  );
};

export default RegisterPage;
