import logoIcon from '../assets/logo-icon.png';
import logoText from '../assets/logo-text.png';
import './navbar.css';

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo-group">
        <img src={logoIcon} alt="Logo icono" className="logo-icon" />
        <img src={logoText} alt="Logo texto" className="logo-text" />
      </div>
    </nav>
  );
}