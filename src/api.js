import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sewa-motor-nodebe.onrender.com/api',
  withCredentials: true
});


export default api;
