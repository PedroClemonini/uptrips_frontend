
// import Input from "./input.js";
// import Button from './button.js';

// import '../styles/components/newpackage_user.css';

// function NewUser({ onClose }) {
//     return (
//         <div className="menu_user">
//             <form method="post" action="#">
//                 <Input label="Nome do usuário" type="text" name="user_name" placeholder="Nome completo do usuário..." req="true"/>
//                 <Input label="Email do usuário" type="email" name="user_email" placeholder="Melhor e-mail do usuário..." req="true"/>
//                 <Input label="Senha do usuário" type="password" name="user_password" placeholder="Senha forte..." req="true"/>
//                 <Input label="Número do usuário" type="text" name="user_number" placeholder="Apenas números..." req="true"/>
//                 <Input label="CPF do usuário" type="text" name="user_cpf" placeholder="Apenas números" req="true"/>
//                 <Input label="RG do usuário" type="text" name="user_rg" placeholder="Apenas números" req="true"/>
//                 <Input label="Data de nascimento do usuário" type="date" name="user_datanasc" req="true"/>

//                 <Input type="submit" value="Adicionar" />
//                 <Input type="reset" value="Limpar" />
//                 <Button onClick={onClose}>Cancelar</Button>
//             </form>
//         </div>
//     );
// }

// export default NewUser;

import { useState } from "react";
import Input from "./input.js";
import Button from "./button.js";
import "../styles/components/newpackage_user.css";

function NewUser({ onClose }) {
    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
        let regex;

        switch (name) {
            case "user_name":
                regex = /^[a-zA-ZÀ-ÿ\s]{3,}$/; // Nome com pelo menos 3 caracteres, apenas letras e espaços
                break;
            case "user_email":
                regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Email válido
                break;
            case "user_password":
                regex = /^.{8,}$/; // Senha com pelo menos 8 caracteres
                break;
            case "user_number":
                regex = /^\d{10,11}$/; // Número com 10 ou 11 dígitos
                break;
            case "user_cpf":
                regex = /^\d{11}$/; // CPF com 11 dígitos
                break;
            case "user_rg":
                regex = /^\d{7,14}$/; // RG com 7 a 14 dígitos
                break;
            case "user_datanasc":
                regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/; // Data no formato DD/MM/AAAA
                break;
            default:
                return true;
        }

        return regex.test(value);
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const isValid = validateField(name, value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: !isValid,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let formIsValid = true;
        const newErrors = {};

        for (let [name, value] of formData.entries()) {
            if (!validateField(name, value)) {
                newErrors[name] = true;
                formIsValid = false;
            }
        }

        setErrors(newErrors);

        if (formIsValid) {
            alert("Formulário enviado com sucesso!");
        } else {
            alert("Por favor, corrija os campos destacados em vermelho.");
        }
    };

    return (
        <div className="menu_user">
            <form method="post" action="#" onSubmit={handleSubmit}>
                <Input
                    label="Nome do usuário"
                    type="text"
                    name="user_name"
                    placeholder="Nome completo do usuário..."
                    req="true"
                    onBlur={handleBlur}
                    className={errors["user_name"] ? "error" : ""}
                />
                <Input
                    label="Email do usuário"
                    type="email"
                    name="user_email"
                    placeholder="Melhor e-mail do usuário..."
                    req="true"
                    onBlur={handleBlur}
                    className={errors["user_email"] ? "error" : ""}
                />
                <Input
                    label="Senha do usuário"
                    type="password"
                    name="user_password"
                    placeholder="Senha forte..."
                    req="true"
                    onBlur={handleBlur}
                    className={errors["user_password"] ? "error" : ""}
                />
                <Input
                    label="Número do usuário"
                    type="text"
                    name="user_number"
                    placeholder="Apenas números..."
                    req="true"
                    onBlur={handleBlur}
                    className={errors["user_number"] ? "error" : ""}
                />
                <Input
                    label="CPF do usuário"
                    type="text"
                    name="user_cpf"
                    placeholder="Apenas números"
                    req="true"
                    onBlur={handleBlur}
                    className={errors["user_cpf"] ? "error" : ""}
                />
                <Input
                    label="RG do usuário"
                    type="text"
                    name="user_rg"
                    placeholder="Apenas números"
                    req="true"
                    onBlur={handleBlur}
                    className={errors["user_rg"] ? "error" : ""}
                />
                <Input
                    label="Data de nascimento do usuário"
                    type="date"
                    name="user_datanasc"
                    req="true"
                    onBlur={handleBlur}
                    className={errors["user_datanasc"] ? "error" : ""}
                />

                <Input type="submit" value="Adicionar" />
                <Input type="reset" value="Limpar" />
                <Button onClick={onClose}>Cancelar</Button>
            </form>
        </div>
    );
}

export default NewUser;
