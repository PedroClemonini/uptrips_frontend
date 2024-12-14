import React, { useEffect, useState } from "react";
import NewUser from "./components/newUser.js";
import PackageCard from "./components/packageCard";
import LoadPackage from "./services/packageServices/LoadPackage";
import Header from './components/header'
import "./styles/pages/index.css";
import UniversalCard from "./components/universalCard.js";

export default function ManagePackages() {

  const [showModal, setShowModal] = useState(false);
  const [destinations, setPackages] = useState([]);
  // Função para abrir o modal
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const loadedPackages = await LoadPackage();
      setPackages(loadedPackages);
    };
    fetchUsers();
  }, []);

  return (
    <div className="ManageUsers">
      <Header />
      <section className={`manage_section ${showModal ? "blurred" : ""}`}>
        <PackageCard onClick={openModal} />
        {destinations.map((destination) => (
          <UniversalCard  data={destination} keys={['id','description']} icon="bus" subkey={{id:'id',description:"Titulo"}} />
        ))}
      </section>

      {showModal && (
        <section className="new_package_section">
          <NewUser onClose={closeModal} />
        </section>
      )}
    </div>
  );
}
