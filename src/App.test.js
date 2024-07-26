// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; 
import ToDoList from './components/ToDoList';
import ProgressTracker from './components/ProgressTracker';
import ResourceRecommendation from './components/ResourceRecommendations'; 
import MotivationalQuotes from './components/MotivationalQuotes'; 
import './App.css';
import Navbar from './components/Navbar';
import Login from './Login';
import Profile from './Profile';
import HomePage from './HomePage';

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
      <div className={`dashboard ${isDarkMode ? 'dark' : 'light'}`}>
        <Navbar toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={
            <>
              <ToDoList tasks={tasks} setTasks={setTasks} />
              <ProgressTracker tasks={tasks} />
              <ResourceRecommendation /> 
              <MotivationalQuotes /> 
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
