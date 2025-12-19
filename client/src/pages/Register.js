import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export const Register = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await register(formData);
      navigate('/');
    } catch (err) {
      console.error('Register error details:', err);
      // Handle different error formats
      if (err.error) {
        setError(err.error);
      } else if (err.message) {
        setError(err.message);
      } else if (err.errors && Array.isArray(err.errors)) {
        setError(err.errors.map(e => e.msg).join(', '));
      } else if (err.code === 'ERR_NETWORK') {
        setError('Network error: Cannot connect to server. Make sure the backend is running on port 5000.');
      } else {
        setError('Registration failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)',
        border: '2px solid #00d4ff',
        borderRadius: '15px',
        padding: '3rem',
        maxWidth: '500px',
        width: '100%',
        boxShadow: '0 10px 40px rgba(0, 212, 255, 0.2)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ color: '#00d4ff', fontSize: '2.5rem', marginBottom: '0.5rem', letterSpacing: '2px' }}>
            🚗 CREATE ACCOUNT
          </h1>
          <p style={{ color: '#ccc', fontSize: '1rem' }}>Join Mallikarjuna Travels Today</p>
        </div>

        {error && (
          <div style={{
            background: 'rgba(255, 76, 76, 0.1)',
            border: '2px solid #ff4c4c',
            borderRadius: '8px',
            padding: '1rem',
            marginBottom: '1.5rem',
            color: '#ff6b6b',
            fontSize: '0.95rem'
          }}>
            ❌ {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', color: '#00d4ff', marginBottom: '0.75rem', fontWeight: '600' }}>
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              style={{
                width: '100%',
                padding: '0.85rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                borderRadius: '8px',
                color: 'white',
                fontSize: '1rem',
                boxSizing: 'border-box',
                transition: 'all 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#00d4ff'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(0, 212, 255, 0.3)'}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', color: '#00d4ff', marginBottom: '0.75rem', fontWeight: '600' }}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '0.85rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                borderRadius: '8px',
                color: 'white',
                fontSize: '1rem',
                boxSizing: 'border-box',
                transition: 'all 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#00d4ff'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(0, 212, 255, 0.3)'}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', color: '#00d4ff', marginBottom: '0.75rem', fontWeight: '600' }}>
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              style={{
                width: '100%',
                padding: '0.85rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                borderRadius: '8px',
                color: 'white',
                fontSize: '1rem',
                boxSizing: 'border-box',
                transition: 'all 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#00d4ff'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(0, 212, 255, 0.3)'}
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', color: '#00d4ff', marginBottom: '0.75rem', fontWeight: '600' }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter a strong password"
              style={{
                width: '100%',
                padding: '0.85rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                borderRadius: '8px',
                color: 'white',
                fontSize: '1rem',
                boxSizing: 'border-box',
                transition: 'all 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#00d4ff'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(0, 212, 255, 0.3)'}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '0.95rem',
              background: 'linear-gradient(135deg, #00d4ff 0%, #00f4ff 100%)',
              border: 'none',
              borderRadius: '8px',
              color: '#0f2027',
              fontSize: '1.1rem',
              fontWeight: '700',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s',
              opacity: loading ? 0.7 : 1,
              letterSpacing: '1px'
            }}
            onMouseEnter={(e) => !loading && (e.target.style.transform = 'translateY(-2px)')}
            onMouseLeave={(e) => (e.target.style.transform = 'translateY(0)')}
          >
            {loading ? '⏳ CREATING ACCOUNT...' : '✓ CREATE ACCOUNT'}
          </button>
        </form>

        <div style={{
          marginTop: '2rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(0, 212, 255, 0.2)',
          textAlign: 'center'
        }}>
          <p style={{ color: '#ccc', marginBottom: '1rem' }}>
            Already have an account?
          </p>
          <Link
            to="/login"
            style={{
              display: 'inline-block',
              background: 'rgba(0, 212, 255, 0.1)',
              border: '2px solid #00d4ff',
              color: '#00d4ff',
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#00d4ff';
              e.target.style.color = '#0f2027';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(0, 212, 255, 0.1)';
              e.target.style.color = '#00d4ff';
            }}
          >
            BACK TO LOGIN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
