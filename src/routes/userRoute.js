const express = require('express');
const router = express.Router();

// Root route
router.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

// Login route
router.get('/login', (req, res) => {
  res.send('Login page');
});

// Signup route
router.get('/signup', (req, res) => {
  res.send('Signup page');
});

module.exports = router;
