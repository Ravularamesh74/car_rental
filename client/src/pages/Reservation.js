import React from 'react';
import { Link } from 'react-router-dom';

export const Reservation = () => {
  return (
    <div style={{ background: '#1a1a2e', minHeight: '100vh', paddingTop: '2rem' }}>
      <div className="container">
        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{ color: '#00d4ff', marginBottom: '1rem', fontSize: '2.5rem' }}>RESERVATION</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Make your reservation with ease</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)', border: '2px solid #00d4ff', borderRadius: '15px', padding: '2rem' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '1rem', fontSize: '1.5rem' }}>📅 Easy Booking</h3>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>Reserve your car in just a few clicks. Select your dates, pick your vehicle, and confirm your booking instantly.</p>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)', border: '2px solid #00d4ff', borderRadius: '15px', padding: '2rem' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '1rem', fontSize: '1.5rem' }}>🔒 Secure Payment</h3>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>Your payment information is encrypted and secure. We accept all major credit cards and digital payment methods.</p>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)', border: '2px solid #00d4ff', borderRadius: '15px', padding: '2rem' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '1rem', fontSize: '1.5rem' }}>⏰ Instant Confirmation</h3>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>Get immediate confirmation of your reservation via email. Modify or cancel up to 24 hours before pickup.</p>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)', border: '2px solid #00d4ff', borderRadius: '15px', padding: '3rem', marginBottom: '3rem' }}>
          <h2 style={{ color: '#00d4ff', marginBottom: '1.5rem' }}>Reservation Process</h2>
          <ol style={{ color: '#ccc', lineHeight: '2', fontSize: '1.05rem' }}>
            <li>📍 Select your preferred pickup location and date</li>
            <li>🚗 Browse and choose from our premium fleet</li>
            <li>📝 Enter your details and preferences</li>
            <li>💳 Complete payment securely</li>
            <li>✅ Receive confirmation and pickup instructions</li>
            <li>🎉 Enjoy your journey with Mallikarjuna Travels!</li>
          </ol>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Link to="/booking" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            START YOUR RESERVATION NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
