import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function LoginAppScreen() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false); // Set initial login state

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const redirectToIntroScreen = () => {
    navigate('/intro'); // Redirects to the 'IntroScreen' route
  };

  // Function to handle successful login
  const handleLogin = () => {
    // Logic for checking successful login (e.g., comparing credentials)
    // For demonstration purposes, hardcoded login check
    const isValidUser = true; // Replace this with your login validation logic

    if (isValidUser) {
      setLoggedIn(true); // Update login state to true
      redirectToIntroScreen(); // Redirect to IntroScreen upon successful login
    } else {
      // Handle unsuccessful login
      console.log('Login unsuccessful. If at first you do not suceed, try, try again!'); // Display an error message or handle differently
    }
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h1>Welcome to the Intro Screen!</h1>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div>
          <h1>Login Page</h1>
          <form onSubmit={handleLogin}>
            {/* Login form */}
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default LoginAppScreen;
