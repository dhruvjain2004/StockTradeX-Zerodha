import axios from 'axios';

// Use environment variable for API URL, fallback to localhost for development
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3002';

// Create axios instance with base URL
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth APIs
export const authAPI = {
  register: (userData) => api.post('/api/auth/register', userData),
  login: (credentials) => api.post('/api/auth/login', credentials),
};

// Trading APIs
export const tradingAPI = {
  getAllHoldings: () => api.get('/allHoldings'),
  getAllPositions: () => api.get('/allPositions'),
  getAllOrders: () => api.get('/allOrders'),
  addNewOrder: (orderData) => api.post('/addNewOrder', orderData),
};

// Health check
export const healthCheck = () => api.get('/health');

export default api; 