import axios from 'axios';

const api = axios.create({
  baseURL: 'https://7wmbjxblzi.execute-api.us-east-1.amazonaws.com/',
});

export default api;