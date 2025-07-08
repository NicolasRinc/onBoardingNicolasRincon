
import './WelcomeCard.css';
import mainImage from '../assets/main.png';
type WelcomeCardProps = {
    title : string;
    subtitle : string;
    description : string
    linkText : string
};

export function WelcomeCard({ title, subtitle, description, linkText }: WelcomeCardProps) {
  return (
    <div className="container">
      <div className="text-container">
        <h1 className="text1">{title}</h1>
        <h2 className="text2">{subtitle}</h2>
        <p className="text3">{description} <p></p><a className="vinculo" href="#">{linkText}</a></p>
      </div>

      <div className="image-container">
        <img src={mainImage} alt="Imagen principal" />
      </div>
    </div>
  );
}