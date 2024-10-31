import React, { useState, useEffect } from "react";
import api from './Api.js'; 
import './App.css';

const EditarPacote = ({ packageId, onPackageUpdated }) => {
  const [formData, setFormData] = useState({
    description: "",
    price: "",
    destination: "",
    startDate: "",
    endDate: ""
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

// Busca dados do pacote quando o componente for montado
  useEffect(() => {
    const fetchPackageData = async () => {
      try {
        const response = await api.get(`/packages/${packageId}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do pacote', error);
        setErrorMessage("Erro ao carregar dados do pacote.");
      }
    };

    fetchPackageData();
  }, [packageId]);

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
      const response = await api.put(`/packages/${packageId}`, formData);
      console.log(response.data);
      setSuccessMessage("Pacote atualizado com sucesso!");
      setErrorMessage("");
      onPackageUpdated(); // Callback para notificar que o pacote foi atualizado
    } catch (error) {
      console.error('Erro ao atualizar o pacote', error);
      setErrorMessage("Erro ao atualizar o pacote. Tente novamente.");
      setSuccessMessage("");
    };
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-form">
        <h1 className="cadastro-title">Editar Pacote</h1>
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
          <input
            type="date"
            name="startDate"
            className="cadastro-input"
            placeholder="Data de Início"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="endDate"
            className="cadastro-input"
            placeholder="Data de Término"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
          <button type="submit" className="cadastro-button">Atualizar Pacote</button>
        </form>
      </div>
    </div>
  );
};

export default EditarPacote;