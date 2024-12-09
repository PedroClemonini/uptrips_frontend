import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "./components/input.js";
import Button from "./components/button.js";
import { Outlet, Link } from "react-router-dom";
import logo from "./imgs/logo.png";
import Cookies from "js-cookie";
import "./styles/pages/index.css";
import "./styles/pages/login.css";
import LoginService from "./services/UserService.js";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => password.length >= 8;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = "E-mail inválido.";
    }
    if (!validatePassword(formData.password)) {
      newErrors.password = "Senha deve ter pelo menos 8 caracteres.";
    }

    setErrors(newErrors);

    try {
      await LoginService(formData);
      navigate("/profile");
    } catch (error) {
      if (error.status === 422) {
        alert("Credenciais inválidas Tente novamente.");
      }
      Cookies.remove("laravel_session");
      Cookies.remove("XSRF-TOKEN");
    }
  };

  return (
    <div className="login">
      <a href="/" id="back">
        ← HOME
      </a>
      {/* <Logout /> */}
      {/* <GetUser /> */}

      <div className="logo">
        <img src={logo} alt="Logo - UP Trips" />
        <span>Bem-vindo(a) de volta!</span>
      </div>

      <section className="login_section">
        <h1>LOGIN</h1>

        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Insira seu e-mail"
            value={formData.email}
            onChange={handleChange}
            req="true"
          ></Input>
          {errors.email && <span className="error">{errors.email}</span>}

          <Input
            label="Senha"
            type="password"
            name="password"
            placeholder="Insira sua senha"
            value={formData.password}
            onChange={handleChange}
            req="true"
          ></Input>
          {errors.password && <span className="error">{errors.password}</span>}

          <Button type="submit">Login</Button>
        </form>

        <Link to="/" className="forgot">
          Esqueceu sua senha?
        </Link>

        <h2>É novo(a) por aqui?</h2>
        <Link to="/register" className="register">
          Cadastre-se!
        </Link>
      </section>
    </div>
  );
}

export default Login;
