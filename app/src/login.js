
import React, { useState } from "react";

import api from "./Api.js";
import Cookies from "js-cookie";

// import Logout from "./components/logout.js";
// import GetUser from "./components/get.js";

import Input from "./components/input.js";
import Button from "./components/button.js";
import Link from "./components/link.js";

import logo from "./imgs/logo.png";

import "./styles/pages/index.css";
import "./styles/pages/login.css";

function Login() {
  const [formData, setFormData] = useState({
    login_email: "",
    login_password: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => password.length >= 8;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value,});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(formData.login_email)) {newErrors.email = "E-mail inválido."};
    if (!validatePassword(formData.login_password)){newErrors.password = "Senha deve ter pelo menos 8 caracteres.";}

    setErrors(newErrors);

    if (Object.keys(newErrors).length !== 0) {
        alert("Corrija os campos!");
    } else {
        alert("Login realizado com sucesso!");
    }

    try {
      await api.get("sanctum/csrf-cookie", { withCredentials: true });
      await api.post("/login", formData, {
        headers: {
          "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
        },
        withCredentials: true,
      });
      // console.log(response.data);
    } catch (error) {
      console.error("Erro ao consumir a API", error);
      alert(
        "Erro ao realizar o login. Tente novamente.",
      );
    }
  };

  return (
    <div className="login">
      <a href="/home" id="back">← HOME</a>
      {/* <Logout /> */}
      {/* <GetUser /> */}

        <div class="logo">
          <img src={logo} alt="Logo - UP Trips"/>
          <span>Bem-vindo(a) de volta!</span>
        </div>

        <section class="login_section">
          <h1>LOGIN</h1>

          <form method="#" action="#" onSubmit={handleSubmit}>
            <Input
              label="Email"
              type="email"
              name="login_email"
              placeholder="Insira seu e-mail"
              value={formData.login_email}
              onChange={handleChange}
              req="true"
            >
            </Input>
            {errors.email && <span className="error">{errors.email}</span>}

            <Input
              label="Senha"
              type="password"
              name="login_password"
              placeholder="Insira sua senha"
              value={formData.login_password}
              onChange={handleChange}
              req="true"
            >
            </Input>
            {errors.password && <span className="error">{errors.password}</span>}
          
            <Button
              type="submit"
            >
              Login
            </Button>
          </form>

          <Link
              href="#"
              classe="forgot"
          >
              Esqueceu sua senha?
          </Link>

        <h2>É novo(a) por aqui?</h2>
        <Link
            href="/register"
            classe="register"
            >
            Cadastre-se!
        </Link>
        </section>
      </div>
  );
};

export default Login;
