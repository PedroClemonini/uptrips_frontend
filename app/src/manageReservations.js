import React, { useEffect, useState } from "react";
import NewUser from "./components/newUser.js";
import PackageCard from "./components/packageCard";
import LoadReservation from "./services/reservationServices/LoadReservation";
import Header from './components/header'
import "./styles/pages/index.css";
import UniversalCard from "./components/universalCard.js";

export default function ManageReservation() {
  const [showModal, setShowModal] = useState(false);
  const [destinations, setReservations] = useState([]);
  // Função para abrir o modal
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const loadedReservations = await LoadReservation();
      setReservations(loadedReservations);
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
