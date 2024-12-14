import "../styles/components/step.css";

import smile from "../imgs/icons/smile.png";
import wallet from "../imgs/icons/wallet.png";
import location from "../imgs/icons/location.png";

export default function Step({ icon, title, text }) {
  // Função para selecionar o caminho da imagem com base no ícone
  const getImageSrc = (icon) => {
    switch (icon) {
      case "location":
        return location;
      case "smile":
        return smile;
      case "wallet":
        return wallet;
      default:
        return ""; // Retorne um fallback ou imagem padrão se necessário
    }
  };

  return (
    <div className="Step">
      <div className="icon">
        <img src={getImageSrc(icon)} alt={title} />
      </div>

      <div className="info">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}
