
import Button from "./button.js";

import plus from "../imgs/icons/plus.png";
import bus from "../imgs/icons/bus.png";

import '../styles/components/packagecard.css';

function PackageCard({id, title, price, onClick}){
    if({title}.title !== undefined){
        return(
            <div className="PackageCard">
                <a href="#" className="package_old">
                    <div class="background">
                        <img src={bus} alt="Viagem" />
                    </div>
                    <div class="info">
                        <span class="title">ID: {id}</span>
                        <span class="title">TÍTULO: {title}</span>
                        <span class="price">PREÇO: {price}</span>
                    </div>
                </a>
            </div>
        );

    } else {
        return(
            <div className="PackageCard">
                <Button onClick={onClick} classe="package_new">
                    <div class="background">
                        <img src={plus} alt="Nova Viagem" />
                    </div>
                    <span class="new">NOVA VIAGEM</span>
                </Button>
            </div>
        );

    }
}

export default PackageCard;
