import React, { useState } from "react";
import api from "./Api.js";
import "./register.css";
import Cookies from "js-cookie";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation:"",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.get("sanctum/csrf-cookie", { withCredentials: true });
      const response = await api.post("/register", formData, {
        headers: {
          "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
        },
        withCredentials: true,
      });
      console.log(response.data);
      setSuccessMessage("Cadastro realizado com sucesso!");
      setErrorMessage("");
    } catch (error) {
      console.error("Erro ao consumir a API", error);
      setErrorMessage(
        "Erro ao realizar o cadastro. Tente novamente[<8;53;10m.",
      );
      setSuccessMessage("");
    }
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-form">
        <h1 className="cadastro-title">Cadastro</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="cadastro-input"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="cadastro-input"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            className="cadastro-input"
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password_confirmation"
            className="cadastro-input"
            placeholder="Confirme sua Senha"
            value={formData.password_confirmation}
            onChange={handleChange}
            required
          />
          <button type="submit" className="cadastro-button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};
export default Register;
