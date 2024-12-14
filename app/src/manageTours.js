import React, { useEffect, useState } from "react";
import NewUser from "./components/newUser.js";
import PackageCard from "./components/packageCard";
import LoadTour from "./services/tourServices/LoadTour";
import Header from './components/header'
import "./styles/pages/index.css";
import UniversalCard from "./components/universalCard.js";

export default function ManageTour() {
  const [showModal, setShowModal] = useState(false);
  const [destinations, setTours] = useState([]);
  // Função para abrir o modal
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const loadedTours = await LoadTour();
      setTours(loadedTours);
    };
    fetchUsers();
  }, []);

  return (
    <div className="ManageUsers">
      <Header />
      <section className={`manage_section ${showModal ? "blurred" : ""}`}>
        <PackageCard onClick={openModal} />
        {destinations.map((destination) => (
          <UniversalCard  data={destination} keys={['id','name']} icon="bus" subkey={{id:'id',name:"Titulo"}} />
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
