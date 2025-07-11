import { useNavigate } from "react-router-dom";
import "./customModal.css";
import checkIcon from "../assets/Sign-check-icon.png";
import errorIcon from "../assets/error-icon-25243.png";

type ModalProps = {
  isOpen: boolean;
  status: "success" | "error";
  message: string;
  onClose: () => void;
  user: string;
};

export function CustomModal({ isOpen, status, message, onClose, user }: ModalProps) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleFinish = () => {
    if (status === "success") {
      navigate(`/results/${user}`);
    } else {
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img
          src={status === "success" ? checkIcon : errorIcon}
          alt={status}
          className="modal-icon"
        />
        <p className="modal-message">{message}</p>
        <button onClick={handleFinish} className="modal-button">
          {status === "success" ? "Ver Resultados" : "Cerrar"}
        </button>
      </div>
    </div>
  );
}