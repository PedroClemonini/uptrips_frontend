import React, { useState } from "react";
import api from "./Api.js";
import "./login.css";
import Cookies from "js-cookie";
import Logout from "./components/logout.js";
import GetUser from "./components/get.js";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const response = await api.post("/login", formData, {
        headers: {
          "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
        },
        withCredentials: true,
      });
      console.log(response.data);
      setSuccessMessage("Login realizado com sucesso!");
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
      <Logout />
      <GetUser />
      <div className="cadastro-form">
        <h1 className="cadastro-title">Cadastro</h1>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="cadastro-button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
