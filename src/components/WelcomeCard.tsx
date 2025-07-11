
import './WelcomeCard.css';
import mainImage from '../assets/main.png';
import { Link } from 'react-router-dom';
type WelcomeCardProps = {
    title : string;
    subtitle : string;
    description : string
    linkText : string
    linkHref : string
};

export function WelcomeCard({ title, subtitle, description, linkText, linkHref }: WelcomeCardProps) {
  return (
    <div className="container">
      <div className="text-container">
        <h1 className="text1">{title}</h1>
        <h2 className="text2">{subtitle}</h2>
        <p className="text3">{description} </p>
        <a></a>
        <Link className="vinculo" to={linkHref}>{linkText}</Link>
      </div>

      <div className="image-container">
        <img src={mainImage} alt="Imagen principal" />
      </div>
    </div>
  );
}