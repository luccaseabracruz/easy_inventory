import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://servidor-easy-inventory.onrender.com',
  timeout: 10000,
});
