import React, { useEffect, useState } from "react";
import NewUser from "./components/newUser.js";
import User from "./components/userCard.js";
import LoadUserService from "./services/LoadUserService.js";
import Header from './components/header'
import "./styles/pages/index.css";

function ManageUsers() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  // Função para abrir o modal
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const loadedUsers = await LoadUserService();
      setUsers(loadedUsers);
    };
    fetchUsers();
  }, []);

  return (
    <div className="ManageUsers">
      <Header />
      <section className={`manage_section ${showModal ? "blurred" : ""}`}>
        <User onClick={openModal} />
        {users.map((user) => (
          <User name={user.name} id={user.id} />
        ))}
        ;
      </section>

      {showModal && (
        <section className="new_package_section">
          <NewUser onClose={closeModal} />
        </section>
      )}
    </div>
  );
}

export default ManageUsers;


