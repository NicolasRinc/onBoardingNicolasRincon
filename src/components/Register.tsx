import '../App.css';
import { Navbar } from '../components/navbar';
import { WelcomeCard } from '../components/WelcomeCard';
import { AuthForm } from '../components/AuthForm';
import { registrarUsuario } from '../api/registerUser';
import { useNavigate } from 'react-router-dom';

export function Register() {

    const navigate = useNavigate();
    const handleRegister = async (formData: any) => {
        try {
            await registrarUsuario(formData);
            navigate("/");  
        } catch (error) {
            console.error("Error al registrar:", error);
        }
        };



  return (
    <div className="page">

      <Navbar />


      <div className="main-content">

        <WelcomeCard
          title="Registrate"
          subtitle="Te invitamos a crear tu cuenta"
          description="Si ya tienes una cuenta puedes"
          linkText="Iniciar sesión aqui!"
          linkHref="/"
        />
        

        <AuthForm
          title="Registro"
          primaryButtonText="Registrarte"
          inputs={[
            { label: 'Email', type: 'email', name: 'email' },
            { label: 'Nombre de usuario', type : 'text', name : 'user'},
            { label: 'Número de celular', type : 'tel', name : 'phone'},
            { label: 'Contraseña', type: 'password', name: 'password' },
            { label: 'Confirmar contraseña', type: 'password', name: 'confirmPassword' },
          ]}
          onSubmit={handleRegister}
        />
         </div>
      </div>
    
  );
}

export default Register;