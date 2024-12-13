import React, { useState } from "react";
import Header from "./components/header.js";
import "./settings.css";

function ManageSettings() {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    nomeCompleto: "João Silva",
    email: "joao.silva@example.com",
    celular: "11987654321",
    cpf: "12345678900",
    rg: "12345678",
    dataNascimento: "1980-01-01",
    senha: "",
    confirmarSenha: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Código para salvar as alterações
    alert("Informações atualizadas com sucesso!");
    setEditMode(false);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="ManageSettings">
      <Header />
      <a href="/" id="back">← MENU PRINCIPAL</a>
      <section className="manage_section">
        {editMode ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nome completo</label>
              <input
                type="text"
                name="nomeCompleto"
                value={formData.nomeCompleto}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Celular (apenas dígitos)</label>
              <input
                type="text"
                name="celular"
                value={formData.celular}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>CPF (apenas dígitos)</label>
              <input
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>RG (apenas dígitos)</label>
              <input
                type="text"
                name="rg"
                value={formData.rg}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Data de nascimento</label>
              <input
                type="date"
                name="dataNascimento"
                value={formData.dataNascimento}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Senha</label>
              <input
                type="password"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Confirme sua senha</label>
              <input
                type="password"
                name="confirmarSenha"
                value={formData.confirmarSenha}
                onChange={handleChange}
              />
            </div>

            <button type="submit">Salvar</button>
          </form>
        ) : (
          <div className="user-info">
            <p><strong>Nome completo:</strong> {formData.nomeCompleto}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Celular:</strong> {formData.celular}</p>
            <p><strong>CPF:</strong> {formData.cpf}</p>
            <p><strong>RG:</strong> {formData.rg}</p>
            <p><strong>Data de nascimento:</strong> {formData.dataNascimento}</p>
            <button onClick={toggleEditMode}>Editar Informações</button>
          </div>
        )}
      </section>
    </div>
  );
}

export default ManageSettings;