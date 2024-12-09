
import Button from "./button.js";

import plus from "../imgs/icons/plus.png";
import user from "../imgs/icons/user.png";

import "../styles/components/usercard.css";

function UserCard({name, number, id, onClick}){
    if({name}.name !== undefined){
        return(
            <div className="UserCard">
                <a href="/" className="user_old">
                    <div className="background">
                        <img src={user} alt="Usuário" />
                    </div>
                    <div className="info">
                        <span className="id">ID: {id}</span>
                        <span className="name">NOME: {name}</span>
                        <span className="number">CEL: {number}</span>
                    </div>
                </a>
            </div>
        );

    } else {
        return(
            <div className="UserCard">
                <Button onClick={onClick} className="user_new">
                    <div className="background">
                        <img src={plus} alt="Novo Usuário" />
                    </div>
                    <span className="new">NOVO USUÁRIO</span>
                </Button>
            </div>
        );
    }
}

export default UserCard;
