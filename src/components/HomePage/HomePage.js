import React from 'react';
import Navbar from '../Navbar/Navbar';
import VideoBackground from '../VideoBackground/VideoBackground';
import '../HomePage/HomePage.css';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <VideoBackground src="/GymBackgroundVideo.mp4"> {/* Corrected path */}
        <Navbar />
        <div className="App-header">
  <h1>Welcome to Trackster</h1>
  <button className="get-started-button">
    <Link to="/info" className="get-started-link">Get Started</Link>
    </button> {/* Add this line */}
</div> 
      </VideoBackground>
    </div>
  );
};


export default App;
