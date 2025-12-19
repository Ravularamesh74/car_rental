import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className="nav-left">
            <Link to="/" className="logo">🚗 MALLIKARJUNA TRAVELS</Link>
          </div>

          <ul className="nav-center">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/cars">PICK YOUR CAR</Link></li>
            <li><Link to="/reservation">RESERVATION</Link></li>
            <li><Link to="/service">SERVICE</Link></li>
            <li><Link to="/about-us">ABOUT US</Link></li>
            <li><Link to="/contacts">CONTACTS</Link></li>
          </ul>

          <div className="nav-right">
            <div className="social-media">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>

            {isAuthenticated ? (
              <div className="auth-section">
                <span className="welcome-text">Welcome, {user?.fullname}</span>
                <Link to="/dashboard" className="btn btn-secondary" style={{ marginRight: '0.5rem' }}>
                  Dashboard
                </Link>
                <button className="btn btn-secondary" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <div className="auth-section">
                <Link to="/login" className="btn btn-secondary">Login</Link>
                <Link to="/register" className="btn btn-secondary">Register</Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
