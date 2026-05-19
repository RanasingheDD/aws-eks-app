const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    timestamp: new Date().toISOString(),
  });
});

// Dummy data endpoint
app.get("/api/data", (req, res) => {
  res.status(200).json({
    message: "This is for testing",
    data: {
      id: 1,
      name: "Dummy item",
      value: Math.floor(Math.random() * 100),
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});