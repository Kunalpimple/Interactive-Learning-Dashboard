import React from 'react';
// Remove the CSS import
// import './ThemeSwitcher.css'; 

const ThemeSwitcher = ({ toggleTheme }) => {
  return (
    <button className="theme-switcher" onClick={toggleTheme}>
      Switch Theme
    </button>
  );
};

export default ThemeSwitcher;
