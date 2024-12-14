import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/header";
import "./styles/pages/PackageView.css";
function PackageView() {
  // Obtendo o estado (dados do pacote) passado via navegação
  const location = useLocation();
  const { packageData } = location.state || {}; // Pegando os dados do estado, com fallback vazio

  if (!packageData) {
    return <div>Dados do pacote não encontrados.</div>;
  }

  return (
    <div>
      <Header />
      <div className="package-view">
        {packageData.image1_path && (
          <img
            src={require(`./imgs${packageData.image1_path}`)}
            alt="Imagem do pacote"
            style={{ width: "100%", height: "auto", marginTop: "20px" }}
          />
        )}
        <h1>{packageData.description}</h1>
        <p>
          <strong>Início:</strong>{" "}
          {new Date(packageData.start_date).toLocaleDateString()}
        </p>
        <p>
          <strong>Fim:</strong>{" "}
          {new Date(packageData.end_date).toLocaleDateString()}
        </p>
        <p>
          <strong>Valor Adulto:</strong> R${" "}
          {parseFloat(packageData.adult_value).toFixed(2)}
        </p>
        <p>
          <strong>Valor Criança:</strong> R${" "}
          {parseFloat(packageData.child_value).toFixed(2)}
        </p>

        {/* Exibindo mais informações do pacote */}
        <div className="package-details">
          <h3>Detalhes do Pacote</h3>
          <p>{packageData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default PackageView;
