import React from 'react';
import './HomePage.css';
import ToDoList from './components/ToDoList';
import ProgressTracker from './components/ProgressTracker';
import ResourceRecommendation from './components/ResourceRecommendations';
import MotivationalQuotes from './components/MotivationalQuotes';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-content">
        <ToDoList />
        <ProgressTracker />
        <ResourceRecommendation />
        <MotivationalQuotes />
      </div>
    </div>
  );
};

export default HomePage;
