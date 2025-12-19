const express = require('express');
const {
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUser,
} = require('../controllers/userController');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

// User routes
router.get('/profile', auth, getUserProfile);
router.put('/profile', auth, updateUserProfile);

// Admin routes
router.get('/', adminAuth, getAllUsers);
router.delete('/:id', adminAuth, deleteUser);

module.exports = router;
