
import bus from "../imgs/icons/bus.png";
import settings from "../imgs/icons/settings.png";
import user from "../imgs/icons/user.png";

import "../styles/components/card.css";

function Card({path, icon, title}){
    const icons = {
        bus,
        settings,
        user,
      };
    
    const img = icons[icon]; 

    return(
        <a href={path} className="card">
            <img src={img} alt="Ícone"></img>
            <span>{title}</span>
        </a>
    );
}

export default Card;
