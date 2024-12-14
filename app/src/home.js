import React, { useEffect, useState } from "react";
import Header from './components/header';
import Footer from "./components/footer";
import Feedback from "./components/feedback";
import PackageCard from './components/packageCard';
import './styles/pages/home.css';

import LoadPackage from './services/packageServices/LoadPackage'
import getPackage from "./services/packageServices/getPackage";
import { useNavigate } from 'react-router-dom';


export default function Home() {
//   const [packages, setPackages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchPackages = async () => {
  //     try {
  //       // Simulando a carga de pacotes
  //       const loadedPackages = await LoadPackage();

  //       if (Array.isArray(loadedPackages)) {
  //         setPackages(loadedPackages);
  //       } else {
  //         console.error('Os dados carregados não são um array:', loadedPackages);
  //         setError('Erro ao carregar os pacotes. Por favor, tente novamente mais tarde.');
  //       }
  //     } catch (err) {
  //       console.error('Erro ao buscar pacotes:', err);
  //       setError('Erro de conexão. Por favor, verifique sua internet.');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchPackages();
  // }, []);

//   useEffect(() => {
//     const fetchPackages = async () => {
//       try {
//         const loadedPackages = await LoadPackage();


  // if (loading) {
  //   return <div>Carregando pacotes...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }


//   const packageSelect = async (id) => {
//     const data = await getPackage(id);
//     navigate('/package-view', { state: { packageData: data } });
//   }

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <div className="loading-spinner"></div>
//         <p>Carregando pacotes...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="error-container">
//         <h2>Ops! Algo deu errado...</h2>
//         <p>{error}</p>
//         <button onClick={() => window.location.reload()}>Tentar Novamente</button>
//       </div>
//     );
//   }


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
            {packages.slice(0, 3).map((packageItem) => (
              <PackageCard
                key={packageItem.id}
                data={packageItem}
                onClick={() => packageSelect(packageItem.id)}
              />
            ))}
          </section>
        </section>
      </main>
      <section id="steps">
            
      </section>

      <section id="feedbacks">
        <h2>FEEDBACK</h2>
        <h1>VEJA O QUE DIZEM SOBRE NÓS!</h1>
        <Feedback
          text="'Amei viajar com a UpTrips, a Bianca é super atenciosa! Pretendo ir mais vezes...'"
          name="Gleidson"
          trip="Cabo Frio"
        />
        <Feedback
          text="'Viajar com a UpTrips foi incrível, a equipe é super prestativa e organizada! Com certeza quero repetir a experiência em breve.'"
          name="Celia"
          trip="Arraial do Cabo"
        />
        <Feedback
          text="'Amei o cuidado e a atenção da Bianca e de toda a equipe da UpTrips. Minha viagem foi perfeita, já estou planejando a próxima!'"
          name="Débora"
          trip="Angra dos Reis"
        />

        <a href="/">QUERO VIAJAR TAMBÉM!</a>
      </section>

      <Footer/>
    </div>
  );
}

