import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { carsAPI } from '../services/api';

export const Cars = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ type: '', brand: '', available: '' });

  const fetchCars = useCallback(async () => {
    try {
      setLoading(true);
      const response = await carsAPI.getAllCars(filters);
      setCars(response.data.cars);
    } catch (error) {
      console.error('Failed to fetch cars:', error);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <h1>Our Fleet</h1>
      
      <div style={{ marginBottom: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
        <div>
          <label>Type</label>
          <select name="type" value={filters.type} onChange={handleFilterChange}>
            <option value="">All Types</option>
            <option value="SEDAN">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="SPORTS">Sports</option>
            <option value="LUXURY">Luxury</option>
          </select>
        </div>
        <div>
          <label>Available</label>
          <select name="available" value={filters.available} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="true">Available</option>
            <option value="false">Booked</option>
          </select>
        </div>
      </div>

      <div className="grid grid-3">
        {cars.map(car => (
          <div key={car._id} className="card">
            <h3>{car.brand} {car.model}</h3>
            <p><strong>Year:</strong> {car.year}</p>
            <p><strong>Type:</strong> {car.type}</p>
            <p><strong>Daily Rate:</strong> ₹{car.dailyRate}</p>
            <p><strong>Capacity:</strong> {car.seatingCapacity} seats</p>
            <p><strong>Status:</strong> {car.available ? '✓ Available' : '✗ Booked'}</p>
            <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} onClick={() => navigate('/booking')}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
