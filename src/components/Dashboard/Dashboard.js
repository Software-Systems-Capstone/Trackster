// DashboardPage.jsx
import React from 'react';
import './Dashboard.css'; // Make sure to create a corresponding CSS file
import Navbar from '../Navbar/Navbar';

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1>Greetings User!</h1>
        </header>
        <div className="dashboard-modules">
          <div className="module progression">Progression</div>
          <div className="module nutrition">Nutrition</div>
          <div className="module workouts">Workouts</div>
        </div>
        <div className="today-goals">
          <h2>Today's Goals</h2>
          {/* Render list of goals here */}
        </div>
        <div className="weekly-schedule">
          <h2>Weekly Schedule</h2>
          {/* Render weekly schedule here */}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
