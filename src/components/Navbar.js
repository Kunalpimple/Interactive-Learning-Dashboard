import React from 'react';
import { FaMoon, FaHome, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './css/Navbar.css';

const Navbar = ({ toggleTheme }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-title">Student Dashboard</h1>
        <div className="navbar-right">
          <button className="navbar-button" onClick={() => navigate('/')}>
            <FaHome /> Home
          </button>
          <button className="navbar-button my-profile" onClick={() => navigate('/profile')}>
            My Profile
          </button>
          <button className="navbar-button" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
          <button className="theme-switcher" onClick={toggleTheme}>
            <FaMoon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
