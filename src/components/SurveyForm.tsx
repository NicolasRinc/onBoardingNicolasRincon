import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './survey.css';
import { es } from 'date-fns/locale';

type SurveyFormProps = {
  questions: string[];
};

export function SurveyForm({ questions }: SurveyFormProps) {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleOptionChange = (question: string, value: string) => {
    setFormData({ ...formData, [question]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ date: selectedDate, ...formData });
  };

  return (
    <div className="survey-card">
      <h2>Encuesta</h2>
      <form onSubmit={handleSubmit}>
        <label>Fecha</label>
        <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Selecciona una fecha"
            className="custom-datepicker"
            locale={es}
            required
        />

        {questions.map((question, index) => (
          <div key={index} className="question-group">
            <p><strong>{question}</strong></p>
            <div className="options">
              {['A', 'B', 'C', 'D'].map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    onChange={() => handleOptionChange(question, option)}
                    required
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}

        <div className="button-wrapper">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}
