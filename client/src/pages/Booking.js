import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { carsAPI, bookingsAPI } from '../services/api';
import { useNavigate } from 'react-router-dom';

export const Booking = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [formData, setFormData] = useState({
    pickupDate: '',
    pickupTime: '09:00',
    returnDate: '',
    returnTime: '09:00',
    carId: '',
  });

  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await carsAPI.getAllCars({});
      setCars(response.data.cars || []);
    } catch (error) {
      console.error('Failed to fetch cars:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'carId') {
      const car = cars.find(c => c._id === value);
      setSelectedCar(car);
    }
  };

  const calculateDays = () => {
    if (!formData.pickupDate || !formData.returnDate) return 0;
    const pickup = new Date(formData.pickupDate);
    const returnDate = new Date(formData.returnDate);
    const diff = returnDate - pickup;
    return Math.ceil(diff / (1000 * 60 * 60 * 24)) || 0;
  };

  const calculateCost = () => {
    if (!selectedCar) return 0;
    const days = calculateDays();
    const dailyRate = selectedCar.dailyRate || 0;
    return days * dailyRate;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.carId || !formData.pickupDate || !formData.returnDate) {
      setError('Please fill in all required fields');
      return;
    }

    if (calculateDays() <= 0) {
      setError('Return date must be after pickup date');
      return;
    }

    setLoading(true);
    try {
      const bookingData = {
        carId: formData.carId,
        pickupDate: formData.pickupDate,
        returnDate: formData.returnDate,
        totalCost: calculateCost(),
      };

      await bookingsAPI.createBooking(bookingData);
      setSuccess('Booking created successfully!');
      
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create booking');
    } finally {
      setLoading(false);
    }
  };

  const days = calculateDays();
  const dailyRate = selectedCar?.dailyRate || 0;
  const rentalCost = calculateCost();
  const insurance = Math.ceil(rentalCost * 0.1); // 10% insurance
  const totalCost = rentalCost + insurance;

  return (
    <div className="booking-page">
      <div className="booking-hero">
        <h1>BOOK <span className="highlight">YOUR RIDE</span></h1>
        <p>Share your trip details and lock in a premium car with a futuristic space-aura experience.</p>
      </div>

      <div className="booking-container">
        <div className="booking-form-section">
          <div className="form-card">
            <h2 className="form-title">📋 BOOKING DETAILS</h2>

            {error && <div className="alert alert-error">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Pickup Date *</label>
                <input
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  required
                  className="booking-input"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Pickup Time *</label>
                  <input
                    type="time"
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleChange}
                    required
                    className="booking-input"
                  />
                </div>
                <div className="form-group">
                  <label>Return Date *</label>
                  <input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleChange}
                    required
                    className="booking-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Return Time *</label>
                <input
                  type="time"
                  name="returnTime"
                  value={formData.returnTime}
                  onChange={handleChange}
                  required
                  className="booking-input"
                />
              </div>

              <div className="form-group">
                <label>Select Car *</label>
                <select
                  name="carId"
                  value={formData.carId}
                  onChange={handleChange}
                  required
                  className="booking-input"
                >
                  <option value="">Choose a vehicle...</option>
                  {cars.map(car => (
                    <option key={car._id} value={car._id}>
                      {car.brand} {car.model} - ${car.dailyRate}/day
                    </option>
                  ))}
                </select>
              </div>

              <div className="info-box">
                <span className="info-icon">ℹ️</span>
                <span className="info-text"><strong>Company details</strong> are fixed so your customers always see trusted info.</span>
              </div>

              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  value="MALLIKARJUNA TRAVELS"
                  disabled
                  className="booking-input disabled"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-large" disabled={loading}>
                {loading ? 'Processing...' : 'Complete Booking'}
              </button>
            </form>
          </div>
        </div>

        <div className="booking-summary-section">
          <div className="summary-card">
            <h2 className="summary-title">📊 BOOKING SUMMARY</h2>

            <div className="summary-item company-info">
              <span className="company-icon">🏢</span>
              <div className="company-details">
                <strong>MALLIKARJUNA TRAVELS</strong>
                <small>mallikarijunatravels1@gmail.com</small>
                <small>+91 96400 59577</small>
              </div>
            </div>

            <div className="summary-item">
              <span className="label">Car Selected</span>
              <span className="value select-link">
                {selectedCar ? `${selectedCar.brand} ${selectedCar.model}` : 'Choose a vehicle...'}
              </span>
            </div>

            <div className="summary-item">
              <span className="label">Pickup Date</span>
              <span className="value">{formData.pickupDate || '-'}</span>
            </div>

            <div className="summary-item">
              <span className="label">Return Date</span>
              <span className="value">{formData.returnDate || '-'}</span>
            </div>

            <div className="summary-item">
              <span className="label">Days</span>
              <span className="value highlight-value">{days}</span>
            </div>

            <div className="summary-item">
              <span className="label">Daily Rate</span>
              <span className="value">${dailyRate}</span>
            </div>

            <div className="summary-item">
              <span className="label">Insurance</span>
              <span className="value">${insurance}</span>
            </div>

            <div className="summary-item total-item">
              <span className="label">Rental Cost</span>
              <span className="value total-value">${totalCost}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
