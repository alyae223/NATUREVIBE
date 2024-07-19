import React, { useState, useEffect } from 'react';
import User1 from './user1'
import User2 from './User2'
import { FaCartPlus} from 'react-icons/fa'; 
import ProductList from '../Products/ProductList';
import './User3.css'; // Import CSS file for styling

export default function User() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user data exists in localStorage on component mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleForm = () => {
    setIsLoginMode(!isLoginMode);
  };

  const handleSignUp = (userData) => {
    setUser(userData);
    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    // Remove user data from localStorage
    localStorage.removeItem('user');
  };

  return (
    <div className="user-container">
      {user ? (
        <div className="welcome-container">
          <h2 className="welcome-heading">Welcome, {user.name}</h2>
          <p>
            <a href="/cart" className="link">
              <FaCartPlus fontSize="small" /> Take a look at your cart
            </a>
          </p>
          <p className="recommendation-heading">You might also like:</p>
          <ul className="recommendations">
           <ProductList />
          </ul>
          <button className="logout-button" onClick={handleLogout}>Logout</button> {/* Add logout button */}
        </div>
      ) : (
        <div>
          {isLoginMode ? (
            <User2 toggleForm={toggleForm} />
          ) : (
            <User1 toggleForm={toggleForm} onSignUp={handleSignUp} />
          )}
        </div>
      )}
    </div>
  );
}
