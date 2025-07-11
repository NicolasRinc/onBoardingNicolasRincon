import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import { Register } from '../src/components/Register.tsx';
import { Survey } from './components/Survey.tsx';
import { SurveyResults } from './components/SurveyResults.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/results/:user" element={<SurveyResults />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);