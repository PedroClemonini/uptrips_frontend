
import React, { useState } from "react";

import api from "./Api.js";
import Cookies from "js-cookie";

import Logout from "./components/Logout.js";
import GetUser from "./components/get.js";

import Input from "./components/Input.js";
import Button from "./components/Button.js";
import Link from "./components/Link.js";

import "./styles/pages/index.css";
import "./styles/pages/register.css";

function Register() {
  const [formData, setFormData] = useState({
    register_name: "",
    register_email: "",
    register_phone: "",
    register_cpf: "",
    register_rg: "",
    register_date: "",
    register_password: "",
    register_password_confirm: "",
  });

  const [errors, setErrors] = useState({});

  const validateName = (name) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(name);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateCPF = (cpf) => /^\d{11}$/.test(cpf);
  const validatePhone = (phone) => /^\d{10,11}$/.test(phone);
  const validateRG = (rg) => /^\d{7,9}$/.test(rg);
  const validatePassword = (password) => password.length >= 8;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value,});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateName(formData.register_name)) {newErrors.name = "Nome inválido, insira apenas letras.";}
    if (!validateEmail(formData.register_email)) {newErrors.email = "E-mail inválido.";}
    if (!validatePhone(formData.register_phone)) {newErrors.phone = "Telefone inválido, insira 10 ou 11 dígitos.";}
    if (!validateCPF(formData.register_cpf)) {newErrors.cpf = "CPF inválido, insira 11 dígitos.";}
    if (!validateRG(formData.register_rg)) {newErrors.rg = "RG inválido, insira entre 7 e 9 dígitos.";}
    if (!validatePassword(formData.register_password)) {newErrors.password = "A senha deve ter pelo menos 8 caracteres.";}
    if (formData.register_password !== formData.register_password_confirm) {newErrors.password_confirm = "As senhas não coincidem.";}

    setErrors(newErrors);

    if (Object.keys(newErrors).length !== 0) {
        alert("Corrija os campos!");
    } else {
        alert("Campos corretos!");
    }

    try {
      await api.get("sanctum/csrf-cookie", { withCredentials: true });
      const response = await api.post("/register", formData, {
        headers: {
          "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
        },
        withCredentials: true,
      });
      alert(
        "Registro realizado!",
      );
      // console.log(response.data);
    } catch (error) {
      console.error("Erro ao consumir a API", error);
      alert(
        "Erro ao realizar o registro. Tente novamente.",
      );
    }
  };

  return (
    <div className="register">
      <a href="/home" id="back">← HOME</a>
      {/* <Logout /> */}
      {/* <GetUser /> */}
        <section class="register_section">
          <h1>CADASTRO</h1>

          <form method="#" action="#" onSubmit={handleSubmit}>
            <Input
              label="Nome completo"
              type="text"
              name="register_name"
              placeholder="Insira seu nome completo"
              value={formData.register_name}
              onChange={handleChange}
              req="true"
            >
            </Input>
            {errors.name && <span className="error">{errors.name}</span>}
            
            <Input
              label="Email"
              type="email"
              name="register_email"
              placeholder="Insira seu e-mail"
              value={formData.register_email}
              onChange={handleChange}
              req="true"
            >
            </Input>
            {errors.email && <span className="error">{errors.email}</span>}

            <Input
              label="Celular (apenas dígitos)"
              type="text"
              name="register_phone"
              placeholder="Insira os dígitos do seu número de celular"
              value={formData.register_phone}
              onChange={handleChange}
              req="true"
            >
            </Input>
            {errors.phone && <span className="error">{errors.phone}</span>}

            <Input
              label="CPF (apenas dígitos)"
              type="text"
              name="register_cpf"
              placeholder="Insira apenas os dígitos do seu CPF"
              value={formData.register_cpf}
              onChange={handleChange}
              req="true"
            >
            </Input>
            {errors.cpf && <span className="error">{errors.cpf}</span>}

            <Input
              label="RG (apenas dígitos)"
              type="text"
              name="register_rg"
              placeholder="Insira apenas os dígitos do seu RG"
              value={formData.register_rg}
              onChange={handleChange}
              req="true"
            >
            </Input>
            {errors.rg && <span className="error">{errors.rg}</span>}

            <Input
              label="Data de nascimento"
              type="date"
              name="register_date"
              placeholder=""
              value={formData.register_date}
              onChange={handleChange}
              req="true"
            >
            </Input>
            {errors.date && <span className="error">{errors.date}</span>}

            <Input
              label="Senha"
              type="password"
              name="register_password"
              placeholder="Insira sua senha"
              value={formData.register_password}
              onChange={handleChange}
              req="true"
            >
            </Input>
            {errors.password && <span className="error">{errors.password}</span>}

            <Input
              label="Confirme sua senha"
              type="password"
              name="register_password_confirm"
              placeholder="Insira sua senha"
              value={formData.register_password_confirm}
              onChange={handleChange}
              req="true"
            >
            </Input>
            {errors.password_confirm && <span className="error">{errors.password_confirm}</span>}
          
            <Button
              type="submit"
            >
              CADASTRAR
            </Button>
          </form>

        <h2>Já possui uma conta?</h2>
        <Link
            href="/login"
            classe="login"
            >
            Conecte-se!
        </Link>
        </section>
      </div>
  );
};

export default Register;
