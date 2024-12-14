import bus from "../imgs/icons/bus.png";
import settings from "../imgs/icons/settings.png";
import user from "../imgs/icons/user.png";
import reservation from '../imgs/icons/reservation.png'
import destination from '../imgs/icons/destination.png'
import trip_package from '../imgs/icons/package.png'
import hosting from '../imgs/icons/hosting.png'
import tour from '../imgs/icons/tour.png'
import "../styles/components/card.css";

function Card({path, icon, title}){
    const icons = {
        bus,
        settings,
        user,
        reservation,
        destination,
        trip_package,
        tour,
        hosting,
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
