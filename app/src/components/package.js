import '../styles/package.css';
import plus from "../imgs/icons/plus.png";
import Link from "./link.js";
import Button from "./button.js";

function Package({image, title, price, onClick}){
    if({title}.title !== undefined){
        return(
            <Link className="package_old">
                <div class="bg">
                    <img src={image} alt="Viagem" />
                </div>
                <div class="info">
                    <span class="title">{title}</span>
                    <span class="price">{price}</span>
                </div>
            </Link>
        );

    } else {
        return(
            <Button onClick={onClick} className="package_new">
                <div class="bg">
                    <img src={plus} alt="Nova Viagem" />
                </div>
                <div class="info">
                    <span class="new">NOVA VIAGEM</span>
                </div>
            </Button>
        );

    }
}

export default Package;
