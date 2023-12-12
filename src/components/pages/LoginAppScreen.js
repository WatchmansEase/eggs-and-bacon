import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess, logout } from '../../Redux/Login/logInSlice'; 
import { useNavigate } from 'react-router-dom';


function LoginAppScreen() {
  const navigate = useNavigate();
  const screen = useSelector((state) => state.quiz.screen);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const redirectToIntroScreen = () => {
    dispatch(loginSuccess(navigate(screen)));
  };

  const handleLogin = () => {
    // Logic for checking successful login (e.g., comparing credentials)
    // For demonstration purposes, hardcoded login check
    const isValidUser = true;

    if (isValidUser) {
      redirectToIntroScreen();
    } else {
      console.log('Login unsuccessful.');
      // Handle unsuccessful login
    }
  };

  return (
    <div>
      {isLoggedIn ? (
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