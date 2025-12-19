import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
});

// Add token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle responses and errors
API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    if (error.response) {
      // Server responded with error
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // Request made but no response
      return Promise.reject({
        error: 'No response from server. Make sure the backend is running on http://localhost:5000',
        code: 'ERR_NETWORK'
      });
    } else {
      // Error in request setup
      return Promise.reject({
        error: error.message,
        code: 'ERR_REQUEST'
      });
    }
  }
);

// Auth API
export const authAPI = {
  register: (data) => API.post('/auth/register', data),
  login: (data) => API.post('/auth/login', data),
  getCurrentUser: () => API.get('/auth/me'),
};

// Cars API
export const carsAPI = {
  getAllCars: (filters) => API.get('/cars', { params: filters }),
  getCarById: (id) => API.get(`/cars/${id}`),
  createCar: (data) => API.post('/cars', data),
  updateCar: (id, data) => API.put(`/cars/${id}`, data),
  deleteCar: (id) => API.delete(`/cars/${id}`),
};

// Bookings API
export const bookingsAPI = {
  createBooking: (data) => API.post('/bookings', data),
  getUserBookings: () => API.get('/bookings/user/my-bookings'),
  getBookingById: (id) => API.get(`/bookings/${id}`),
  cancelBooking: (id) => API.put(`/bookings/${id}/cancel`),
  getAllBookings: () => API.get('/bookings'),
  updateBookingStatus: (id, data) => API.put(`/bookings/${id}/status`, data),
};

// Users API
export const usersAPI = {
  getUserProfile: () => API.get('/users/profile'),
  updateUserProfile: (data) => API.put('/users/profile', data),
  getAllUsers: () => API.get('/users'),
  deleteUser: (id) => API.delete(`/users/${id}`),
};

export default API;
