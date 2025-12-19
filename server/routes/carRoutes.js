const express = require('express');
const {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
} = require('../controllers/carController');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.get('/', getAllCars);
router.get('/:id', getCarById);

// Admin routes
router.post('/', adminAuth, createCar);
router.put('/:id', adminAuth, updateCar);
router.delete('/:id', adminAuth, deleteCar);

module.exports = router;
