import axios from 'axios';

export const baseURL = 'http://localhost:9002/api';

const api = axios.create({
  baseURL,
});

export default api;