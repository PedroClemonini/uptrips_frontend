import React, { useState } from "react";
import api from "./Api.js"; // Certifique-se de que o caminho está correto
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import Input from "./components/input.js";
import Button from "./components/button.js";
import { useNavigate } from "react-router-dom";
import "./styles/pages/index.css";
import "./styles/pages/register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    rg: "",
    birth: "",
    password: "",
    password_confirmation: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const validateName = (name) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(name);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateCPF = (cpf) => /^\d{11}$/.test(cpf);
  const validatePhone = (phone) => /^\d{10,11}$/.test(phone);
  const validateRG = (rg) => /^\d{7,9}$/.test(rg);
  const validatePassword = (password) => password.length >= 8;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateName(formData.name)) {
      newErrors.name = "Nome inválido, insira apenas letras.";
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = "E-mail inválido.";
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Telefone inválido, insira 10 ou 11 dígitos.";
    }
    if (!validateCPF(formData.cpf)) {
      newErrors.cpf = "CPF inválido, insira 11 dígitos.";
    }
    if (!validateRG(formData.rg)) {
      newErrors.rg = "RG inválido, insira entre 7 e 9 dígitos.";
    }
    if (!validatePassword(formData.password)) {
      newErrors.password = "A senha deve ter pelo menos 8 caracteres.";
    }
    if (formData.password !== formData.password_confirmation) {
      newErrors.password_confirmation = "As senhas não coincidem.";
    }

    setErrors(newErrors);

    // Se não houver erros, prossiga com a submissão
    if (Object.keys(newErrors).length === 0) {
      try {
        await api.get("sanctum/csrf-cookie", { withCredentials: true });
        await api.post("/register", formData, {
          headers: {
            "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
          },
          withCredentials: true,
        });
        alert("Registro realizado!");
        navigate("/login");
      } catch (error) {
        console.error("Erro ao consumir a API", error);
        alert("Erro ao realizar o registro. Tente novamente.");
      }
    }
  };

  return (
    <div className="register">
      <a href="/" id="back">
        ← HOME
      </a>
      <section className="section">
        <h1>CADASTRO</h1>

        <form onSubmit={handleSubmit}>
          <Input
            label="Nome completo"
            type="text"
            name="name"
            placeholder="Insira seu nome completo"
            value={formData.name}
            onChange={handleChange}
            req="true"
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Insira seu e-mail"
            value={formData.email}
            onChange={handleChange}
            req="true"
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <Input
            label="Celular (apenas dígitos)"
            type="text"
            name="phone"
            placeholder="Insira os dígitos do seu número de celular"
            value={formData.phone}
            onChange={handleChange}
            req="true"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}

          <Input
            label="CPF (apenas dígitos)"
            type="text"
            name="cpf"
            placeholder="Insira apenas os dígitos do seu CPF"
            value={formData.cpf}
            onChange={handleChange}
            req="true"
          />
          {errors.cpf && <span className="error">{errors.cpf}</span>}

          <Input
            label="RG (apenas dígitos)"
            type="text"
            name="rg"
            placeholder="Insira apenas os dígitos do seu RG"
            value={formData.rg}
            onChange={handleChange}
            req="true"
          />
          {errors.rg && <span className="error">{errors.rg}</span>}

          <Input
            label="Data de nascimento"
            type="date"
            name="birth"
            value={formData.birth}
            onChange={handleChange}
            req="true"
          />
          {errors.date && <span className="error">{errors.date}</span>}

          <Input
            label="Senha"
            type="password"
            name="password"
            placeholder="Insira sua senha"
            value={formData.password}
            onChange={handleChange}
            req="true"
          />
          {errors.password && <span className="error">{errors.password}</span>}

          <Input
            label="Confirme sua senha"
            type="password"
            name="password_confirmation"
            placeholder="Insira sua senha"
            value={formData.password_confirmation}
            onChange={handleChange}
            req="true"
          />
          {errors.password_confirmation && (
            <span className="error">{errors.password_confirmation}</span>
          )}

          <Button type="submit">CADASTRAR</Button>
        </form>

        <h2>Já possui uma conta?</h2>
        <Link to="/login" className="login">
          Conecte-se!
        </Link>
      </section>
    </div>
  );
}

export default Register;