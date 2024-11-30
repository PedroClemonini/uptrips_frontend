
import Input from "./input.js";
import Title from './title.js';
import Button from './button.js';

import '../styles/components/newpackage_user.css';

function NewUser({ onClose }) {
    return (
        <div className="menu_user">
            <Title>ADICIONAR USUÁRIO</Title>

            <form method="post" action="#">
                <Input label="Nome do usuário" type="text" name="user_name" placeholder="Nome completo do usuário..." req="true"/>
                <Input label="Email do usuário" type="email" name="user_email" placeholder="Melhor e-mail do usuário..." req="true"/>
                <Input label="Senha do usuário" type="password" name="user_password" placeholder="Senha forte..." req="true"/>
                <Input label="Número do usuário" type="text" name="user_number" placeholder="Apenas números..." req="true"/>
                <Input label="Número alternativo do usuário" type="text" name="user_altnumber" placeholder="(Se houver)" />
                <Input label="CPF do usuário" type="text" name="user_cpf" placeholder="Apenas números" req="true"/>
                <Input label="RG do usuário" type="text" name="user_rg" placeholder="Apenas números" req="true"/>
                <Input label="Data de nascimento do usuário" type="date" name="user_datanasc" req="true"/>

                <Input type="submit" value="Adicionar" />
                <Input type="reset" value="Limpar" />
                <Button onClick={onClose}>Cancelar</Button>
            </form>
        </div>
    );
}

export default NewUser;
