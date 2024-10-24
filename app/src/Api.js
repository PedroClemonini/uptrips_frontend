import axios from 'axios';

// URL da API a partir da variável de ambiente
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export default api;
