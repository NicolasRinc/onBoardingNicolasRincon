import { SurveyForm } from "../components/SurveyForm";
import { Navbar } from "./navbar";

export function Survey() {

    
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
      />
    </div>
  );
}