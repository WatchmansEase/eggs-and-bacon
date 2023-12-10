import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  
  // Check if the current location is the /intro page or login page
  const isIntroPage = location.pathname === '/intro';
  const isLoginPage = location.pathname === '/login';

  return (
    <nav>
      {/* Render the Home button unless the current page is /intro or login */}
      {isIntroPage || isLoginPage ? null : (
        <ul>
          <li>
            {/* Link to the Home page */}
            <Link to="/">Home</Link>
          </li>
          {/* Add other navigation links */}
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
