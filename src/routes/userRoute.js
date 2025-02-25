const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Root route
router.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

// Login route
router.post('/login', userController.login);

// Signup route
router.post('/signup', userController.signup);

module.exports = router;
