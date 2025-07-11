import axios from 'axios';

const api = axios.create({
  baseURL: 'https://7wmbjxblzi.execute-api.us-east-1.amazonaws.com/',
});

export const enviarEncuesta = async (user: string, surveyData: any) => {
  const payload = {
    user,
    survey: JSON.stringify(surveyData), 
  };

  const response = await api.post('/survey', payload);
  return response.data;
};