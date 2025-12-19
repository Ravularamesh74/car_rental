import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { bookingsAPI, carsAPI } from '../services/api';

export const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
    fetchCars();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await bookingsAPI.getUserBookings();
      setBookings(response.data.bookings);
    } catch (error) {
      console.error('Failed to fetch bookings:', error);
    }
  };

  const fetchCars = async () => {
    try {
      const response = await carsAPI.getAllCars({});
      setCars(response.data.cars || []);
    } catch (error) {
      console.error('Failed to fetch cars:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelBooking = async (id) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      try {
        await bookingsAPI.cancelBooking(id);
        fetchBookings();
      } catch (error) {
        alert('Failed to cancel booking');
      }
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <div className="fleet-section">
        <div className="container">
          <h2 className="fleet-title">Our Premium Fleet</h2>
          
          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
            </div>
          ) : (
            <div className="fleet-grid">
              {cars && cars.length > 0 ? (
                cars.map(car => (
                  <div key={car._id} className="fleet-card">
                    <div className="car-image-placeholder">
                      <span>🚗</span>
                    </div>
                    <div className="car-info">
                      <h3>{car.brand}</h3>
                      <h4>{car.model}</h4>
                      <div className="price-badge">💰 ${car.dailyRate}/day</div>
                      
                      <div className="specs-grid">
                        <div className="spec-item">
                          <span className="spec-label">FUEL TYPE</span>
                          <span className="spec-value">{car.fuelType}</span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-label">TRANSMISSION</span>
                          <span className="spec-value">{car.transmission}</span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-label">SEATS</span>
                          <span className="spec-value">{car.seatingCapacity}</span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-label">ENGINE</span>
                          <span className="spec-value">{car.mileage}</span>
                        </div>
                      </div>

                      <Link to="/booking" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                        Book Now
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p style={{ textAlign: 'center', color: '#666' }}>No cars available</p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="container" style={{ marginTop: '3rem' }}>
        <h2 style={{ marginBottom: '2rem', color: 'white' }}>My Bookings</h2>
        
        {bookings.length === 0 ? (
          <p>No bookings found. <Link to="/booking" style={{ color: '#00d4ff' }}>Book a car now!</Link></p>
        ) : (
          <div className="grid grid-2">
            {bookings.map(booking => (
              <div key={booking._id} className="card">
                <h3>{booking.car.brand} {booking.car.model}</h3>
                <p><strong>Pickup:</strong> {new Date(booking.pickupDate).toLocaleDateString()}</p>
                <p><strong>Return:</strong> {new Date(booking.returnDate).toLocaleDateString()}</p>
                <p><strong>Days:</strong> {booking.totalDays}</p>
                <p><strong>Total Amount:</strong> ₹{booking.totalAmount}</p>
                <p><strong>Status:</strong> {booking.status}</p>
                <button 
                  className="btn btn-danger" 
                  style={{ width: '100%', marginTop: '1rem' }}
                  onClick={() => handleCancelBooking(booking._id)}
                >
                  Cancel Booking
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
