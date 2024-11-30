
import React, { useState } from "react";

import Header from "./components/Header.js";
import NewUser from "./components/NewUser.js";
import User from "./components/UserCard.js";

import './styles/pages/index.css';

function ManageUsers() {
  const [showModal, setShowModal] = useState(false);

  // Função para abrir o modal
  const openModal = () => {
    setShowModal(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="ManageUsers">
      <Header user="admin" />
      <a href="/" id="back">← MENU PRINCIPAL</a>
      <section className={`manage_section ${showModal ? "blurred" : ""}`}>
        <User onClick={openModal} />

        <User name="Eytor" number="123" id="01" />
        <User name="Eytorasd asdasda sdasdasdasf asfas" number="12234234234233" id="01" />
        <User name="Eytor" number="123" id="01" />
        <User name="Eytor" number="123" id="01" />
        <User name="Eytor" number="123" id="01" />
        <User name="Eytor" number="123" id="01" />
        <User name="Eytor" number="123" id="01" />
        <User name="Eytor" number="123" id="01" />
        <User name="Eytor" number="123" id="01" />
      </section>

      {showModal && (
        <section className="new_package_section">
          <NewUser onClose={closeModal} />
        </section>
      )}
    </div>
  );
};

export default ManageUsers;
