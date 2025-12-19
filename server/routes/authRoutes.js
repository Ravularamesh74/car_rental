const express = require('express');
const { register, login, getCurrentUser } = require('../controllers/authController');
const { auth } = require('../middleware/auth');
const { body } = require('express-validator');

const router = express.Router();

// Register
router.post('/register', [
  body('fullname', 'Full name is required').notEmpty(),
  body('email', 'Valid email is required').isEmail(),
  body('phone', 'Phone number is required').notEmpty(),
  body('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
], register);

// Login
router.post('/login', [
  body('email', 'Valid email is required').isEmail(),
  body('password', 'Password is required').notEmpty(),
], login);

// Get Current User
router.get('/me', auth, getCurrentUser);

module.exports = router;
