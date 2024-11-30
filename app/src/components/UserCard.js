
import Button from "./Button.js";

import plus from "../imgs/icons/plus.png";
import user from "../imgs/icons/user.png";

import "../styles/components/usercard.css";

function UserCard({name, number, id, onClick}){
    if({name}.name !== undefined){
        return(
            <div className="UserCard">
                <a href="#" class="user_old">
                    <div class="background">
                        <img src={user} alt="Usuário" />
                    </div>
                    <div class="info">
                        <span class="id">ID: {id}</span>
                        <span class="name">NOME: {name}</span>
                        <span class="number">CEL: {number}</span>
                    </div>
                </a>
            </div>
        );

    } else {
        return(
            <div className="UserCard">
                <Button onClick={onClick} classe="user_new">
                    <div class="background">
                        <img src={plus} alt="Novo Usuário" />
                    </div>
                    <span class="new">NOVO USUÁRIO</span>
                </Button>
            </div>
        );
    }
}

export default UserCard;
