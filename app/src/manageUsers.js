import React, { useEffect, useState } from "react";
import NewUser from "./components/newUser.js";
import LoadUserService from "./services/LoadUserService.js";
import Header from "./components/header";
import "./styles/pages/index.css";
import "./styles/components/usercard.css"
import UniversalCard from "./components/universalCard.js";
function ManageUsers() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

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

        <div className="UserCard">
          <button onClick={openModal} className="user_new">
            <div className="background"></div>
            <span className="new">NOVO USUÁRIO</span>
          </button>
        </div>

        {users.map((user) => (
          <UniversalCard
            data={user}
            icon="user"
            keys={["id", "name"]}
            subkey={{ name: "Nome", id: "id" }}
          />
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

export default ManageUsers;
