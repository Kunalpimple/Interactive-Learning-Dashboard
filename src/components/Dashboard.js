import React, { useState } from 'react';
import ToDoList from './ToDoList';
import ProgressTracker from './ProgressTracker';
import MotivationalQuotes from './MotivationalQuotes';
import ResourceRecommendations from './ResourceRecommendations';
import ThemeSwitcher from './ThemeSwitcher';
import { ThemeProvider } from './ThemeProvider';

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { text: 'Study React', completed: false },
    { text: 'Complete Homework', completed: true },
  ]);

  const [interests, setInterests] = useState(['React', 'JavaScript', 'CSS']); // eslint-disable-line no-unused-vars

  return (
    <ThemeProvider>
      <div className="dashboard">
        <ThemeSwitcher />
        <ToDoList tasks={tasks} setTasks={setTasks} />
        <ProgressTracker tasks={tasks} />
        <MotivationalQuotes />
        <ResourceRecommendations interests={interests} />
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
