import { useState } from "react";
import './authform.css';
import mediaImage from '../assets/Group 13.png';

type InputField = {
  label: string;
  type: string;
  name: string;
};

type Props = {
  title: string;
  primaryButtonText: string;
  inputs: InputField[];
  onSubmit: (formData: any) => void;
};

export function AuthForm({ title, primaryButtonText, inputs, onSubmit }: Props) {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const password = formData["password"];
    const confirmPassword = formData["confirmPassword"];

    if (confirmPassword !== undefined && password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setError(""); 
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>{title}</h2>

      {inputs.map((input) => (
        <div key={input.name} className={input.type === "password" ? "password-wrapper" : ""}>
          <input
            type={
              input.type === "password"
                ? showPassword
                  ? "text"
                  : "password"
                : input.type
            }
            name={input.name}
            value={formData[input.name] || ""}
            onChange={handleChange}
            placeholder={input.label}
            required
          />
          {input.type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="toggle-password"
            >
              <img
                src={showPassword ? "/icons/hide.png" : "/icons/view.png"}
                alt="Ver contraseña"
                className="password-icon"
              />
            </button>
          )}
        </div>
      ))}

      {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}

      <button type="submit">{primaryButtonText}</button>

      <div className="divider">o continúa con</div>

      <div className="social-buttons">
        <img src={mediaImage} alt="Facebook" />
      </div>
    </form>
  );
}