import mainImage from '../assets/main.png';


type WelcomeImageProps = {
  altText: string;
};

export function WelcomeImage({ altText }: WelcomeImageProps) {
  return (
    <img src={mainImage} className="main-image" alt={altText} />
  );
}