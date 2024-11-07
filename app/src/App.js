import React, { useEffect } from "react";
import "./App.css";
import Login from "./login.js";
import axios from "axios";
const App = () => {
  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get("https://uptrips.api.simplifica.gru.br/sanctum/csrf-cookie")
      .then((response) => {
        console.log("Token CSRF obtido com sucesso");
      })
      .catch((error) => {
        console.error("Erro ao obter o token CSRF:", error);
      });
  }, []);
  return <Login />;
};

export default App;
