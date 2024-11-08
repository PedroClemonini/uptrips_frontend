import React, { useState } from "react";
import api from './Api.js'; 
import './App.css';

const InserirPacote = () => {
  const [formData, setFormData] = useState({
    description: "",
    price: "",
    destination: "",
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
      const response = await api.post("/packages", formData);
      console.log(response.data);
      setSuccessMessage("Pacote inserido com sucesso!");
      setErrorMessage(""); 
    } catch (error) {
      console.error('Erro ao consumir a API', error);
      setErrorMessage("Erro ao inserir o pacote. Tente novamente.");
      setSuccessMessage("");
    };
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-form">
        <h1 className="cadastro-title">Inserção de Pacotes</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="description"
            className="cadastro-input"
            placeholder="Descrição"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            className="cadastro-input"
            placeholder="Preço"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="destination"
            className="cadastro-input"
            placeholder="Destino"
            value={formData.destination}
            onChange={handleChange}
            required
          />
          <button type="submit" className="cadastro-button">Inserir Pacote</button>
        </form>
      </div>
    </div>
  );
};

export default InserirPacote;
