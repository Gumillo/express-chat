const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, '/client')));

// Catch-all route to serve the client index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/index.html'));
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
