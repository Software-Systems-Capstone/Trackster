import React from 'react';
// Assuming VideoBackground.css is in the same directory as VideoBackground.jsx
import './VideoBackground.css';


const VideoBackground = ({ src, children }) => {
  return (
    <div className="video-background">
      <video autoPlay="autoplay" loop="loop" muted playsInline>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {children}
    </div>
  );
};

export default VideoBackground;
