// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the App component

// Ensure there is only one call to createRoot
const rootElement = document.getElementById('root'); // Ensure 'root' matches the id in your index.html

// Create the root if it doesn't already exist
const root = ReactDOM.createRoot(rootElement);

// Render the App component
root.render(<App />);
