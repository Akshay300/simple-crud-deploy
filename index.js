const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Define a simple route
app.get('/', (req, res) => {
  res.send("I am making my Node js application Deploy to Heroku");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
