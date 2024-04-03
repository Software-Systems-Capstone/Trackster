import './get-started-button.css'

const App = () => {
    const handleGetStartedClick = () => {
      // Perform an action when the button is clicked
      console.log('Get Started clicked!');
      // For navigation, you might use your router to navigate to a new route
    };
  
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to Trackster</h1>
          <p>Start your fitness journey</p>
          <button className="get-started-button" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
        {/* Rest of your component */}
      </div>
    );
  };
  