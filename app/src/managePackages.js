
import React, { useState } from "react";

import Header from "./components/header.js";
import NewPackage from "./components/newPackage.js";
import PackageCard from "./components/packageCard.js";

import './styles/pages/index.css';
import './styles/components/newpackage_user.css';

function ManagePackages() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="ManagePackages">
      <Header user="admin" />
      <a href="/" id="back">← MENU PRINCIPAL</a>
      <section className={`manage_section ${showModal ? "blurred" : ""}`}>
        <PackageCard onClick={openModal} />
        <PackageCard image="#" id="01" title="Ilha Bela" price="R$500,00" />
        <PackageCard image="#" id="01" title="Guarulhos" price="R$100,00" />
        <PackageCard image="#" id="01" title="Rio de Janeiro" price="R$200,00" />
        <PackageCard image="#" id="01" title="Praias" price="R$900,00" />
        <PackageCard image="#" id="01" title="Holambra" price="R$400,00" />
        <PackageCard image="#" id="01" title="Campos do Jordão" price="R$1200,00" />
        <PackageCard image="#" id="01" title="Natal" price="R$300,00" />
        <PackageCard image="#" id="01" title="São Paulo" price="R$200,00" />
      </section>
      {showModal && (
        <section className="new_package_section">
          <NewPackage onClose={closeModal} />
        </section>
      )}
    </div>
  );
};

export default ManagePackages;
