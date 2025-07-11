import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './survey.css';
import { es } from 'date-fns/locale';
import { enviarEncuesta } from '../api/sendSurvey';
import { CustomModal } from "./CustomModal";

type SurveyFormProps = {
  questions: string[];
  userData: any;
};

export function SurveyForm({ questions, userData }: SurveyFormProps) {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState<"success" | "error">("success");
  const [modalMessage, setModalMessage] = useState("");

  const handleOptionChange = (question: string, value: string) => {
    setFormData({ ...formData, [question]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const surveyPayload = {
      fecha: selectedDate ? selectedDate.toISOString().split('T')[0] : '',
      ...formData
    };

    try {
      const response = await enviarEncuesta(userData.user, surveyPayload);
      console.log("Respuesta API:", response);

      setModalStatus("success");
      setModalMessage(response.message);
      setModalOpen(true);
    } catch (error) {
      console.error("Error enviando encuesta:", error);
      setModalStatus("error");
      setModalMessage("Hubo un error al enviar la encuesta.");
      setModalOpen(true);
    }
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

      <CustomModal
        isOpen={modalOpen}
        status={modalStatus}
        message={modalMessage}
        onClose={() => setModalOpen(false)}
        user={userData.user}
      />
    </div>
  );
}