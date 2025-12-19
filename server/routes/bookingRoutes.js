const express = require('express');
const {
  createBooking,
  getUserBookings,
  getBookingById,
  cancelBooking,
  getAllBookings,
  updateBookingStatus,
} = require('../controllers/bookingController');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

// User routes
router.post('/', auth, createBooking);
router.get('/user/my-bookings', auth, getUserBookings);
router.get('/:id', auth, getBookingById);
router.put('/:id/cancel', auth, cancelBooking);

// Admin routes
router.get('/', adminAuth, getAllBookings);
router.put('/:id/status', adminAuth, updateBookingStatus);

module.exports = router;
