const Booking = require('../models/Booking');
const Car = require('../models/Car');

// Create booking
exports.createBooking = async (req, res) => {
  try {
    const {
      carId,
      pickupDate,
      returnDate,
      pickupLocation,
      dropLocation,
      insuranceType,
    } = req.body;

    // Validate dates
    const pickup = new Date(pickupDate);
    const returnD = new Date(returnDate);

    if (pickup >= returnD) {
      return res.status(400).json({ error: 'Return date must be after pickup date' });
    }

    // Get car details
    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({ error: 'Car not found' });
    }

    // Calculate days and costs
    const totalDays = Math.ceil((returnD - pickup) / (1000 * 60 * 60 * 24));
    const rentalCost = car.dailyRate * totalDays;

    let insuranceCost = 0;
    if (insuranceType === 'BASIC') insuranceCost = 500;
    if (insuranceType === 'PREMIUM') insuranceCost = 1000;

    const taxCost = Math.round((rentalCost + insuranceCost) * 0.18);
    const totalAmount = rentalCost + insuranceCost + taxCost;

    // Create booking
    const booking = new Booking({
      user: req.user.id,
      car: carId,
      pickupDate: pickup,
      returnDate: returnD,
      pickupLocation,
      dropLocation,
      insuranceType,
      insuranceCost,
      totalDays,
      rentalCost,
      taxCost,
      totalAmount,
    });

    await booking.save();
    await booking.populate('car user');

    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get user bookings
exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate('car')
      .sort({ createdAt: -1 });
    res.json({ count: bookings.length, bookings });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get booking by ID
exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate('car')
      .populate('user');

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    // Check if user owns this booking
    if (booking.user._id.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Not authorized' });
    }

    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Cancel booking
exports.cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    if (booking.user.toString() !== req.user.id) {
      return res.status(403).json({ error: 'Not authorized' });
    }

    if (booking.status === 'CANCELLED') {
      return res.status(400).json({ error: 'Booking already cancelled' });
    }

    booking.status = 'CANCELLED';
    await booking.save();

    res.json({ message: 'Booking cancelled successfully', booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all bookings (Admin only)
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('car')
      .populate('user', '-password')
      .sort({ createdAt: -1 });
    res.json({ count: bookings.length, bookings });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update booking status (Admin only)
exports.updateBookingStatus = async (req, res) => {
  try {
    const { status, paymentStatus } = req.body;
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status, paymentStatus, updatedAt: Date.now() },
      { new: true }
    ).populate('car user');

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    res.json({ message: 'Booking updated successfully', booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
