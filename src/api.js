import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: 'https://sewa-motor-backend.onrender.com/api',
  withCredentials: true
});

export default api;
