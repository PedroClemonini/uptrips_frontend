
import Input from "./Input.js";
import Title from './Title.js';
import Button from "./Button.js";

import '../styles/components/newpackage_user.css';

function NewPackage({ onClose }) {
    return (
        <div className="menu_package">
            <Title>ADICIONAR VIAGEM</Title>

            <form method="post" action="#">
                <Input label="Nome da viagem" type="text" name="name" placeholder="Título da viagem..." req="true"/>
                <Input label="Preço da viagem" type="text" name="price" placeholder="Preço em R$ da viagem..." req="true"/>
                <Input label="Descrição" type="textarea" name="description" placeholder="Breve descrição da viagem..." />
                <Input label="Máximo de passageiros" type="text" name="max_passengers" placeholder="Máximo de assentos contando todos os ônibus disponíveis" req="true"/>
                <Input label="Vagas disponíveis" type="text" name="passengers" placeholder="Vagas restantes (em caso de lugares reservados)" req="true"/>
                <Input label="Data de início da viagem" type="date" name="date_init" req="true"/>
                <Input label="Data de término da viagem" type="date" name="date_end" req="true"/>
                <Input label="Imagem" type="file" name="image" req="true"/>
                <Input label="Viagem disponível?" type="checkbox" name="trip" value="Sim" />

                <Input type="submit" value="Adicionar" />
                <Input type="reset" value="Limpar" />
                <Button onClick={onClose}>Cancelar</Button>
            </form>
        </div>
    );
}

export default NewPackage;
