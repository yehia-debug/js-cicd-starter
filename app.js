const express = require("express");         // Import the Express library

const app = express();          // Create an Express application
const PORT = 3000;             // Define the port number for the server to listen on

app.get("/", (req, res) => {
  res.json({ message: "App is running" });      // Define a route for the root URL that responds with a JSON message
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });                   // Define a route for the health check endpoint that responds with a JSON message
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);    
});