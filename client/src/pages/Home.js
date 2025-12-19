import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    pickupDate: '',
    pickupTime: '09:00',
    returnDate: '',
    returnTime: '18:00',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    navigate('/booking', { state: { formData } });
  };

  return (
    <>
      <div className="hero-booking-section">
        <div className="hero-left">
          <div className="container">
            <div className="hero-content">
              <h1>MALLIKARJUNA TRAVELS</h1>
              <h2>SPACE AURA FLEET</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#ccc' }}>
                Experience premium luxury cars for your next adventure
              </p>
              <div style={{ marginTop: '2rem' }}>
                <p style={{ color: '#00d4ff', marginBottom: '1rem' }}>✓ 24/7 Customer Support</p>
                <p style={{ color: '#00d4ff', marginBottom: '1rem' }}>✓ Best Prices Guaranteed</p>
                <p style={{ color: '#00d4ff' }}>✓ Premium Fleet Selection</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-center">
          <div className="real-time-info-card">
            <h3>Real Time Information</h3>
            
            <div className="info-item">
              <div className="info-icon">₹</div>
              <div className="info-content">
                <p className="info-label">Avg Daily Price</p>
                <h4>₹2400 <span>per day</span></h4>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🚗</div>
              <div className="info-content">
                <p className="info-label">Most Popular Model</p>
                <h4>Creta 2024</h4>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">💰</div>
              <div className="info-content">
                <p className="info-label">Cheapest Rate Found</p>
                <h4>₹100 <span>per hour</span></h4>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📅</div>
              <div className="info-content">
                <p className="info-label">Dates Selling Out Fast</p>
                <h4>4th Dec, 5th Dec</h4>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">👍</div>
              <div className="info-content">
                <p className="info-label">Average Rating</p>
                <h4>4.6 ⭐⭐⭐⭐⭐</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="booking-form-card">
            <h3>Quick Booking</h3>
            <p style={{ color: '#999', marginBottom: '1.5rem' }}>Find and book your perfect car</p>
            
            <form onSubmit={handleBooking}>
              <div className="form-group">
                <label>Pickup Date</label>
                <input
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                    borderRadius: '5px',
                    color: 'white',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <div className="form-group">
                <label>Pickup Time</label>
                <input
                  type="time"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                    borderRadius: '5px',
                    color: 'white',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <div className="form-group">
                <label>Return Date</label>
                <input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                    borderRadius: '5px',
                    color: 'white',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <div className="form-group">
                <label>Return Time</label>
                <input
                  type="time"
                  name="returnTime"
                  value={formData.returnTime}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                    borderRadius: '5px',
                    color: 'white',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '1.5rem', padding: '0.85rem' }}
              >
                FIND A VEHICLE →
              </button>

              <Link 
                to="/cars" 
                className="btn btn-secondary"
                style={{ 
                  width: '100%', 
                  marginTop: '0.75rem', 
                  padding: '0.85rem',
                  display: 'inline-block',
                  textAlign: 'center',
                  textDecoration: 'none'
                }}
              >
                View All Cars
              </Link>
            </form>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0, 212, 255, 0.2)' }}>
              <h4 style={{ color: '#00d4ff', marginBottom: '1rem' }}>Contact Us</h4>
              <p style={{ fontSize: '0.9rem', color: '#ccc', marginBottom: '0.5rem' }}>📞 +91 7989345281</p>
              <p style={{ fontSize: '0.9rem', color: '#ccc', marginBottom: '0.5rem' }}>📧 info@mallikarjunatravels.com</p>
              <p style={{ fontSize: '0.9rem', color: '#ccc' }}>🕐 MON - SAT 8:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'white' }}>Why Choose Us?</h2>
          <div className="grid grid-3">
            <div className="feature-card">
              <h3>🏎️ Premium Fleet</h3>
              <p>Wide selection of luxury vehicles maintained to perfection</p>
            </div>
            <div className="feature-card">
              <h3>💰 Best Prices</h3>
              <p>Competitive rates with special discounts for long rentals</p>
            </div>
            <div className="feature-card">
              <h3>🛡️ Full Insurance</h3>
              <p>Comprehensive coverage for peace of mind during your journey</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
