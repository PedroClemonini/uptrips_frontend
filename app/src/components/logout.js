import React from 'react';
import api from '../Api';
import Cookies from 'js-cookie';
import '../styles/logout.css'; 

export default function Logout() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/logout", null, {
        headers: {
          "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
        },
        withCredentials: true,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao consumir a API", error);
    }
  };

  return (
    <div className="logout-container">
      <form onSubmit={handleSubmit}>
        <button type="submit" className="logout-button">Logout</button>
      </form>
    </div>
  );
}