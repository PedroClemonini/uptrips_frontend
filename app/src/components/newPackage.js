import '../styles/newpackage.css';
import Input from "./input";
import Title from './title';
import Button from './button';

function NewPackage(){
    return(
        <div class="menu_package">
            <Title className="" content="ADICIONAR VIAGEM"></Title>

            <form method="#" action="#">
               <Input label="Nome da viagem" type="text" name="name" maxlength="" maxvalue=""></Input>
               <Input label="Preço da viagem" type="text" name="price" maxlength="" maxvalue=""></Input>
               <Input label="Descrição" type="textarea" name="description" maxlength="" maxvalue=""></Input>
               <Input label="Máximo de passageiros" type="number" name="max_passengers" maxlength="" maxvalue=""></Input>
               <Input label="Vagas disponíveis" type="number" name="passengers" maxlength="" maxvalue=""></Input>
               <Input label="Data de início da viagem" type="date" name="date_init" maxlength="" maxvalue=""></Input>
               <Input label="Data de término da viagem" type="date" name="date_end" maxlength="" maxvalue=""></Input>
               <Input label="Imagem" type="file" name="image" maxlength="" maxvalue=""></Input>
               <Input label="Viagem disponível?" type="checkbox" name="trip" maxlength="" value="Sim"></Input>
            
              <Input type="submit" value="Adicionar"></Input>
              <Input type="reset" value="Limpar"></Input>
              <Button>Cancelar</Button>
            </form>
        </div>
    );
}

export default NewPackage;