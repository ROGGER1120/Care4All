const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const connectDB = require("./Config/db");

// Load env variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON
app.use(cors()); // Enable CORS
app.use(helmet()); // Security headers
app.use(morgan("dev")); // Logger

// Test route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Care4All Backend Running 🚀",
  });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found ❌",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
