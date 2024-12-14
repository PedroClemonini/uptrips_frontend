import React, { useEffect, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import "./styles/pages/home.css";
import getDestination from "./services/destinationServices/getDestination";
import LoadPackage from "./services/packageServices/LoadPackage";
import getPackage from "./services/packageServices/getPackage";
import { useNavigate } from "react-router-dom";

export default function PackagesList() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
         const loadedPackages = await LoadPackage();
      
     const packagesWithDestinations = await Promise.all(
       loadedPackages.map(async (packageItem) => {
         const destinationData = await getDestination(packageItem.id);
         return { ...packageItem, ...destinationData }; // Combina os dados
       }),
     );
        if (Array.isArray(packagesWithDestinations)) {
          setPackages(packagesWithDestinations);
        } else {
          console.error("Os dados carregados não são um array:", packagesWithDestinations);
          setError(
            "Erro ao carregar os pacotes. Por favor, tente novamente mais tarde."
          );
        }
      } catch (err) {
        console.error("Erro ao buscar pacotes:", err);
        setError("Erro de conexão. Por favor, verifique sua internet.");
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const packageSelect = async (id) => {
    const data = await getPackage(id);
    navigate("/package-view", { state: { packageData: data } });
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Carregando pacotes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Ops! Algo deu errado...</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Tentar Novamente</button>
      </div>
    );
  }

  return (
    <div className="HomePage">
      <Header />
      <main>
      
        <section className="recommended-trips">
          <section className="package-list">
            {packages.map((packageItem) => (
              <div onClick={() => packageSelect(packageItem.id)} className="toptrip">
                <div class="img">
                  <img
                    src={require(`./imgs${packageItem.image1_path}`)}
                    alt="Imagem do pacote"
                  />
                </div>
                <div className="info">
                  <h1>{packageItem.city}</h1>
                  <span>{parseFloat(packageItem.adult_value).toFixed(2)}</span>
                </div>
              </div>
            ))}
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}
