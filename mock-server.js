const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

const resources = [
  {
    id: 1,
    title: "JavaScript for Beginners",
    description: "A complete guide to learn JavaScript from scratch.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    link: "https://example.com/javascript-for-beginners"
  },
  {
    id: 2,
    title: "React Documentation",
    description: "Official React documentation and guide.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    link: "https://reactjs.org/docs/getting-started.html"
  }
];

app.get('/resources', (req, res) => {
  res.json(resources);
});

app.listen(port, () => {
  console.log(`Mock server running at http://localhost:${port}`);
});
