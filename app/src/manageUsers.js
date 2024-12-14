import React, { useEffect, useState } from "react";
import NewUser from "./components/newUser.js";
import LoadUserService from "./services/userServices/LoadUserService";
import Header from "./components/header";
import "./styles/pages/index.css";
import "./styles/components/usercard.css"
import UniversalCard from "./components/universalCard.js";
import userRow from "./components/userRow.js";

import "./styles/pages/manage_users.css";
import UserRow from "./components/userRow.js";

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((prev) => !prev);

  // Carregar os usuários na montagem do componente
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const loadedUsers = await LoadUserService();
  //     setUsers(loadedUsers);
  //   };
  //   fetchUsers();
  // }, []);

  return (
    <div className="ManageUsers">
      <Header />
      <button className="add-user-btn" onClick={toggleModal}>
          Adicionar Usuário
      </button>
      <main>
        <div class="filter"></div>
        <div className="table">
          <div className="table-header">
            <span>ID</span>
            <span>Nome</span>
            <span>Email</span>
            <span>Telefone</span>
            <span>CPF</span>
            <span>RG</span>
            <span>Nascimento</span>
            <span>Senha</span>
            <span>Ações</span>
          </div>
          <div className="table-body">
            {users.map((user) => (
              <UserRow
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                phone={user.phone}
                cpf={user.cpf}
                rg={user.rg}
                birth={user.birth}
                password={user.password}
                onEdit={() => console.log(`Editar usuário: ${user.id}`)}
                onDelete={() => console.log(`Excluir usuário: ${user.id}`)}
              />
            ))}
          </div>
        </div>
      </main>
        {showModal && <NewUser onClose={toggleModal} />}
    </div>
  );
}
  

export default ManageUsers;
