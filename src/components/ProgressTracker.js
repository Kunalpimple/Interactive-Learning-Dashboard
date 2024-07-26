import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ProgressTracker = ({ tasks }) => {
  console.log('Tasks:', tasks); // Add this line to check the tasks data

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  const progressData = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        label: 'Tasks Progress',
        data: [completedTasks, totalTasks - completedTasks],
        backgroundColor: ['#4caf50', '#ff9800'],
      },
    ],
  };

  const taskData = {
    labels: tasks.map(task => task.text),
    datasets: [
      {
        label: 'Task Completion',
        data: tasks.map(task => (task.completed ? 100 : 0)),
        backgroundColor: tasks.map(task =>
          task.completed ? '#4caf50' : '#ff9800'
        ),
      },
    ],
  };

  return (
    <div className="progress-tracker">
      <h2 className="progress-tracker-heading">Progress Tracker</h2>
      <div className="chart-container">
        <h3>Overall Progress</h3>
        <Doughnut data={progressData} />
      </div>
      <div className="chart-container">
        <h3>Individual Task Completion</h3>
        <Bar
          data={taskData}
          options={{
            indexAxis: 'x',
            scales: {
              x: {
                beginAtZero: true,
              },
              y: {
                beginAtZero: true,
                max: 100,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default ProgressTracker;
