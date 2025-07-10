import axios from 'axios';

const api = axios.create({
  baseURL: 'https://7wmbjxblzi.execute-api.us-east-1.amazonaws.com/',
});

export const loginUsuario = async (datos: any) => {
  const response = await api.post('/login', datos);
  return response.data;
};