import React, { useState } from "react";
import api from './Api.js'; 
import './App.css';

const Login = () => {
 const [formData, setFormData] = useState({
    name: "",
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
    try{
  
     const response = await api.post("/users", formData);
        console.log(response.data);
        setSuccessMessage("Cadastro realizado com sucesso!");
        setErrorMessage(""); 
      
    }catch (error) {
      console.error('Erro ao consumir a API', error);
      setErrorMessage("Erro ao realizar o cadastro. Tente novamente[<8;53;10m.");
      setSuccessMessage("");
    };
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
          <button type="submit" className="cadastro-button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
