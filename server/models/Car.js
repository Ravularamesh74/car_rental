const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['SEDAN', 'SUV', 'SPORTS', 'LUXURY'],
    required: true,
  },
  dailyRate: {
    type: Number,
    required: true,
  },
  registrationNumber: {
    type: String,
    unique: true,
    required: true,
  },
  seatingCapacity: {
    type: Number,
    default: 5,
  },
  fuelType: {
    type: String,
    enum: ['PETROL', 'DIESEL', 'HYBRID', 'ELECTRIC'],
    default: 'PETROL',
  },
  transmission: {
    type: String,
    enum: ['MANUAL', 'AUTOMATIC'],
    default: 'AUTOMATIC',
  },
  mileage: {
    type: String,
  },
  features: [String],
  image: {
    type: String,
  },
  available: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Car', CarSchema);
