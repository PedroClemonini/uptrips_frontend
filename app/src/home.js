import React, { useEffect, useState } from "react";
import Header from './components/header';
import PackageCard from './components/packageCard';
import './homecliente.css';

export default function Home() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Carrega os pacotes de viagem da API quando o componente monta
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        // Simulando a carga de pacotes
        const loadedPackages = [
          { id: 1, name: "Santiago" },
          { id: 2, name: "Praia do Arraial do Cabo" },
          { id: 3, name: "Buenos Aires" } // Novo item adicionado
        ];

        if (Array.isArray(loadedPackages)) {
          setPackages(loadedPackages);
        } else {
          console.error('Os dados carregados não são um array:', loadedPackages);
          setError('Erro ao carregar os pacotes. Por favor, tente novamente mais tarde.');
        }
      } catch (err) {
        console.error('Erro ao buscar pacotes:', err);
        setError('Erro de conexão. Por favor, verifique sua internet.');
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  if (loading) {
    return <div>Carregando pacotes...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="HomePage">
      <Header />
      <main>
        <section className="hero">
          <h2>VIAJAR É DAR UM UP EM SUA VIDA!</h2>
          <h1>DESCUBRA DESTINOS INCRÍVEIS COM OFERTAS EXCLUSIVAS!</h1>
          <p>
            PLANEJE SUA PRÓXIMA VIAGEM COM DESCONTOS IMPERDÍVEIS E VIVA EXPERIÊNCIAS INESQUECÍVEIS! 🌍✈️
          </p>
          <button className="btn-reserve" onClick={() => alert('Reservar Agora!')}>
            Reservar Agora!
          </button>
        </section>
        <section className="recommended-trips">
          <h1>VIAGENS RECOMENDADAS!</h1>
          <section className="package-list">
            {packages.map((packageItem) => (
              <PackageCard
                key={packageItem.id}
                data={packageItem}
                onClick={() => alert(`Visualizar detalhes do pacote: ${packageItem.name}`)}
              />
            ))}
          </section>
        </section>
      </main>
    </div>
  );
}