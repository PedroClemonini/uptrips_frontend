import React from "react";
import api from "../Api";
import Cookies from "js-cookie";
import '../styles/get.css'; 

export default function GetUser() {
  const handleSubmitGet = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get("/api/user", {
        headers: {
          "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
        },
        withCredentials: true,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao pegar usuário", error);
    }
  };

  return (
    <div className="get-container">
      <form onSubmit={handleSubmitGet}>
        <button type="submit" className="get-button">Pegar</button>
      </form>
    </div>
  );
}