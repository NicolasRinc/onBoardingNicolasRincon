import { SurveyForm } from "../components/SurveyForm";
import { Navbar } from "./navbar";
import { useLocation } from 'react-router-dom';

export function Survey() {
  const location = useLocation();
  const userData = location.state?.userData;

  return (
    <div>
      <Navbar />
      <SurveyForm
        questions={[
          "Pregunta 1",
          "Pregunta 2",
          "Pregunta 3",
          "Pregunta 4"
        ]}
        userData={userData}
      />
    </div>
  );
}