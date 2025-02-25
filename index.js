const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 4000;

const userRoute = require("./src/routes/userRoute");
const connectDB = require('./db');

// Connect to the database
connectDB();

// Middleware to parse JSON requests and cookies
app.use(express.json());
app.use(cookieParser());

// Use the user routes
app.use("/", userRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
