import axios from 'axios';

const api = axios.create({
  baseURL: 'https://7wmbjxblzi.execute-api.us-east-1.amazonaws.com/',
});

export const consultarUsuario = async (user: string) => {
  const response = await api.get(`/user/${user}`, {
    validateStatus: () => true,  
  });

  return response;
};