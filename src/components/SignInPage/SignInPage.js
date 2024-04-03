import React, { useState } from 'react';
import './SignInPage.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate here

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically check the credentials against your backend
    // This is a placeholder for your sign-in logic

    // Simulate successful sign-in
    // Navigate to the dashboard after successful sign-in
    navigate('/dashboard'); // Adjust '/dashboard' as needed to match your route
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="sign-in-container">
      <div className="logo-container">
        <Link to="/">
          <img src="/Logo.png" alt="Trackster Logo" className="sign-in-logo"/>
        </Link>
      </div>
      <div className="sign-in-box">
        <form onSubmit={handleSubmit}>
          <h2>Sign in</h2>
          <p className="form-text">Stay in touch with your physical wellbeing</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email or Phone"
            required
          />
          <div>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <a href="#">Forgot password?</a>
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
