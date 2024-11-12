import '../styles/newpackage.css';
import Input from "./input";
import Title from './title';
import Button from './button';

function NewPackage({ onClose }) {
    return (
        <div className="menu_package">
            <Title content="ADICIONAR VIAGEM" />

            <form method="post" action="#">
                <Input label="Nome da viagem" type="text" name="name" />
                <Input label="Preço da viagem" type="text" name="price" />
                <Input label="Descrição" type="textarea" name="description" />
                <Input label="Máximo de passageiros" type="number" name="max_passengers" />
                <Input label="Vagas disponíveis" type="number" name="passengers" />
                <Input label="Data de início da viagem" type="date" name="date_init" />
                <Input label="Data de término da viagem" type="date" name="date_end" />
                <Input label="Imagem" type="file" name="image" />
                <Input label="Viagem disponível?" type="checkbox" name="trip" value="Sim" />

                <Input type="submit" value="Adicionar" />
                <Input type="reset" value="Limpar" />
                <Button onClick={onClose}>Cancelar</Button>
            </form>
        </div>
    );
}

export default NewPackage;
