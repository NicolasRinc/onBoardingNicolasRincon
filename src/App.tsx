

import { WelcomeCard } from './components/WelcomeCard';
import { WelcomeImage } from './components/WelcomeImage';
import { Navbar } from './components/navbar';
import './App.css';
function App() {
  return (
    <>
    <Navbar/>
    <div className="page">
      
      <div className='app-layout'>
        <div className="welcome-card-position">
        <WelcomeCard
         title="Bienvenido"
         subtitle='Ingresa y disfruta'
         description='Si aún no tienes una cuenta puedes'
        linkText=' Registrarte aquí!' 
        />
        </div>
        
        <div className='app-image-wrapper'>
          <WelcomeImage 
          altText='img'/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;