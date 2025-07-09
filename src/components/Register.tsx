import './register.css';
import { Navbar } from '../components/navbar';
import { WelcomeCard } from '../components/WelcomeCard';
import { AuthForm } from '../components/AuthForm';


export function Register() {
  return (
    <div className="page">
      {/* Barra superior */}
      <Navbar />

      {/* Contenedor principal */}
      <div className="main-content">
        {/* Bloque de bienvenida */}
        <WelcomeCard
          title="Registrate"
          subtitle="Te invitamos a crear tu cuenta"
          description="Si ya tienes una cuenta puedes"
          linkText="Iniciar sesión aqui!"
        />
        
    

        {/* Formulario de autenticación */}
        <AuthForm
          title="Registro"
          primaryButtonText="Registrarte"
          inputs={[
            { label: 'Email', type: 'email', name: 'email' },
            { label: 'Nombre de usuario', type : 'username', name : 'username'},
            { label: 'Número de celular', type : 'phonenumber', name : 'phonenumber'},
            { label: 'Contraseña', type: 'password', name: 'password' },
            { label: 'Confirmar contraseña', type: 'password', name: 'password' },
          ]}
        />
         </div>
      </div>
    
  );
}

export default Register;