

import './App.css';
import { Navbar } from './components/navbar';
import { WelcomeCard } from './components/WelcomeCard';
import { AuthForm } from './components/AuthForm';
import { useNavigate } from 'react-router-dom';
import { loginUsuario } from '../src/api/userLogin';


function App() {
   const navigate = useNavigate();

  const handleLogin = async (formData: any) => {
    try {
      const response = await loginUsuario(formData);

      // Esto solo se ejecuta si el status es 200
      if (response.message === "Inicio de sesión exitoso") {
        navigate("/survey", { state: { userData: response.data } });
      }
    } catch (error: any) {
      if (error.response) {
        // Si la API responde con error 401 u otro, muestra su mensaje
        alert(error.response.data.message);
      } else {
        console.error("Error al iniciar sesión:", error);
        alert("Ocurrió un error al intentar iniciar sesión.");
      }
    }
  };


  return (
    <div className="page">

      <Navbar />


      <div className="main-content">

        <WelcomeCard
          title="Bienvenido"
          subtitle="Ingresa y disfruta"
          description="Si aún no tienes una cuenta puedes"
          linkText="Registrate aquí!"
          linkHref='/register'
        />
        <AuthForm
          title="Iniciar sesión"
          primaryButtonText="Iniciar sesión"
          inputs={[
            { label: 'Email o nombre de usuario', type: 'text', name: 'emailOrUser' },
            { label: 'Contraseña', type: 'password', name: 'password' },
          ]}
          onSubmit={handleLogin}
        />
         </div>
      </div>
    
  );
}

export default App;