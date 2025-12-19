const Car = require('../models/Car');

// Get all cars
exports.getAllCars = async (req, res) => {
  try {
    const { type, brand, available } = req.query;
    let query = {};

    if (type) query.type = type;
    if (brand) query.brand = brand;
    if (available !== undefined) query.available = available === 'true';

    const cars = await Car.find(query);
    res.json({ count: cars.length, cars });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get car by ID
exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ error: 'Car not found' });
    }
    res.json(car);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create car (Admin only)
exports.createCar = async (req, res) => {
  try {
    const {
      brand,
      model,
      year,
      type,
      dailyRate,
      registrationNumber,
      seatingCapacity,
      fuelType,
      transmission,
      mileage,
      features,
    } = req.body;

    const car = new Car({
      brand,
      model,
      year,
      type,
      dailyRate,
      registrationNumber,
      seatingCapacity,
      fuelType,
      transmission,
      mileage,
      features: features || [],
    });

    await car.save();
    res.status(201).json({ message: 'Car created successfully', car });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update car (Admin only)
exports.updateCar = async (req, res) => {
  try {
    let car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ error: 'Car not found' });
    }

    car = Object.assign(car, req.body);
    await car.save();

    res.json({ message: 'Car updated successfully', car });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete car (Admin only)
exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) {
      return res.status(404).json({ error: 'Car not found' });
    }
    res.json({ message: 'Car deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
