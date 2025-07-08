

import './App.css';
import { Navbar } from './components/navbar';
import { WelcomeCard } from './components/WelcomeCard';
import { AuthForm } from './components/AuthForm';


function App() {
  return (
    <div className="page">
      {/* Barra superior */}
      <Navbar />

      {/* Contenedor principal */}
      <div className="main-content">
        {/* Bloque de bienvenida */}
        <WelcomeCard
          title="Bienvenido"
          subtitle="Ingresa y disfruta"
          description="Si aún no tienes una cuenta puedes"
          linkText="Registrate aquí!"
        />
        
    

        {/* Formulario de autenticación */}
        <AuthForm
          title="Iniciar sesión"
          primaryButtonText="Iniciar sesión"
          inputs={[
            { label: 'Email o nombre de usuario', type: 'email', name: 'email' },
            { label: 'Contraseña', type: 'password', name: 'password' },
          ]}
        />
         </div>
      </div>
    
  );
}

export default App;