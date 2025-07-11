import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { consultarUsuario } from "../api/userService";
import "./survey.css";
import { Navbar } from "./navbar";
export function SurveyResults() {
  const { user } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await consultarUsuario(user as string);

        if (response.status === 401) {
          setError(true);
          return;
        }

        if (response.status === 200 || response.status === 400) {
          setData(response.data.data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error consultando resultados:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [user]);

  if (loading) return <p>Cargando resultados...</p>;
  if (error || !data) return <p>Error al cargar resultados.</p>;

  // Parsear respuestas de encuesta
  let respuestas: Record<string, string> = {};
    let parseError = false;

    try {
    const cleanedSurvey = data.survey.startsWith('"')
        ? JSON.parse(data.survey)
        : data.survey;

    respuestas = typeof cleanedSurvey === "string"
        ? JSON.parse(cleanedSurvey)
        : cleanedSurvey;
    } catch (e) {
    parseError = true;
    }

  return (
    <div>
        <Navbar />
    
    
    <div className="survey-card">
      <h2>Resultados de la Encuesta</h2>
      <p><strong>Usuario:</strong> {data.user}</p>
      <p><strong>Email:</strong> {data.mail}</p>
      <p><strong>Teléfono:</strong> {data.phone}</p>

      <div className="question-group">
        <h3>Respuestas:</h3>
        {parseError ? (
          <p>No se pudieron cargar las respuestas correctamente.</p>
        ) : (
          <ul style={{ paddingLeft: "20px" }}>
            {Object.entries(respuestas).map(([pregunta, respuesta], idx) => (
              <li key={idx}><strong>{pregunta}:</strong> {respuesta}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="button-wrapper" style={{ marginTop: "20px" }}>
        <button
          className="primary-button"
          onClick={() => navigate("/")}
        >
          Volver al inicio
        </button>
      </div>
    </div>
    </div>
  );
}