import '../styles/newpackage.css';
import React, { useState } from "react";
import Header from "./header.js";
import Package from "./package.js";
import NewPackage from "./newPackage.js";
import '../styles/index.css';
const ManagerView = () => {
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
    <div className="App">
      <Header user="admin" />
      <section className={`package_section ${showModal ? "blurred" : ""}`}>
        <Package onClick={openModal} />
        <Package image="#" title="Ilha Bela" price="R$500,00" />
        <Package image="#" title="Guarulhos" price="R$100,00" />
        <Package image="#" title="Rio de Janeiro" price="R$200,00" />
        <Package image="#" title="Praias" price="R$900,00" />
        <Package image="#" title="Holambra" price="R$400,00" />
        <Package image="#" title="Campos do Jordão" price="R$1200,00" />
        <Package image="#" title="Natal" price="R$300,00" />
        <Package image="#" title="São Paulo" price="R$200,00" />
      </section>
      {showModal && (
        <section className="new_package_section">
          <NewPackage onClose={closeModal} />
        </section>
      )}
    </div>
  );
};

export default ManagerView;
