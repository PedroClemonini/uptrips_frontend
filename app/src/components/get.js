import React from "react";
import api from "../Api";
import Cookies from "js-cookie";

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
    <form onSubmit={handleSubmitGet}>
      <button type="submit">Pegar</button>
    </form>
  );
}
