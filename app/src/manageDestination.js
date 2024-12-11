import React, { useEffect, useState } from "react";
import NewUser from "./components/newUser.js";
import PackageCard from "./components/packageCard";
import LoadDestination from "./services/LoadDestination";
import Header from './components/header'
import "./styles/pages/index.css";

export default function ManageDestination() {
  const [showModal, setShowModal] = useState(false);
  const [destinations, setDestinations] = useState([]);
  // Função para abrir o modal
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const loadedDestinations = await LoadDestination();
      setDestinations(loadedDestinations);
    };
    fetchUsers();
  }, []);

  return (
    <div className="ManageUsers">
      <Header />
      <section className={`manage_section ${showModal ? "blurred" : ""}`}>
        <PackageCard onClick={openModal} />
        {destinations.map((destination) => (
          <PackageCard  key={destination.id} title={destination.name} id={destination.id} />
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
