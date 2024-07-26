import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // Import useLocation
import ToDoList from './components/ToDoList';
import ProgressTracker from './components/ProgressTracker';
import ResourceRecommendation from './components/ResourceRecommendations'; // Adjust path if necessary
import MotivationalQuotes from './components/MotivationalQuotes'; // Adjust path if necessary
import './App.css';
import Navbar from './components/Navbar';
import Login from './Login';
import Profile from './Profile';
import HomePage from './HomePage';

const AppContent = ({ toggleTheme, tasks, setTasks, isDarkMode }) => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/login';

  return (
    <div className={`dashboard ${isDarkMode ? 'dark' : 'light'}`}>
      {showNavbar && <Navbar toggleTheme={toggleTheme} />}
      <Routes>
        <Route path="/" element={
          <>
            <ToDoList tasks={tasks} setTasks={setTasks} />
            <ProgressTracker tasks={tasks} />
            <ResourceRecommendation /> {/* Include the component */}
            <MotivationalQuotes />       {/* Include the component */}
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [tasks, setTasks] = useState([
    { text: 'Complete assignment', completed: true },
    { text: 'Read chapter 5', completed: false },
    { text: 'Submit project', completed: true },
  ]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode);
  };

  return (
    <Router>
      <AppContent toggleTheme={toggleTheme} tasks={tasks} setTasks={setTasks} isDarkMode={isDarkMode} />
    </Router>
  );
};

export default App;
