const express = require('express');
const app = express();
const port = 4000;

// Define a route to handle requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
