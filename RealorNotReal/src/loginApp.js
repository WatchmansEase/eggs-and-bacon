// loginApp.js

import React, { useState } from 'react';
import LoginAppScreen from './components/pages/LoginAppScreen'; // Import the Login component

// Main App component
const App = () => {
  // State variables to manage login and error status             
  const [loggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);

  // Function to handle logout
  const handleLogout = () => {
    setLoggedIn(false); // Set loggedIn state to false on logout
    setIsError(false); // Reset isError state
  };

  // Render components based on login and error status
  return (
    <div>
      {/* Show Login component if user is not logged in */}
      {!loggedIn && !isError && (
        <Login setLoggedIn={setLoggedIn} setIsError={setIsError} />
      )}

      {/* Show welcome message and logout button if user is logged in */}
      {loggedIn && (
        <div>
          <h2>Welcome, User!</h2>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      )}

      {/* Show error message and "Go Back" button if login is unsuccessful */}
      {isError && (
        <div>
          <h2>Login Unsuccessful</h2>
          <button onClick={() => setIsError(false)}>Go Back</button>
        </div>
      )}
    </div>
  );
};

export default loginApp;