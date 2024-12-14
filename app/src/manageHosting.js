import React, { useEffect, useState } from "react";
import PackageCard from "./components/packageCard";
import LoadHosting from "./services/LoadHosting";
import Header from "./components/header";
import "./styles/pages/index.css";
import UniversalCard from "./components/universalCard.js";
import Hosting from "./forms/Hosting.js";

export default function ManageHosting() {
  const [showComponent, setShowComponent] = useState(false);
  const [hostings, setHostings] = useState([]);
  const [selectedHostingId, setSelectedHostingId] = useState();

  const createHosting = (id) => {
    setSelectedHostingId(id);  // Atualiza o ID do hosting selecionado
    setShowComponent(true);    // Exibe o componente Hosting
  };

  // useEffect para monitorar a mudança de selectedHostingId
  useEffect(() => {
  }, [selectedHostingId]);  // Dependência no selectedHostingId

  useEffect(() => {
    const fetchHostings = async () => {
      const loadedHostings = await LoadHosting();
      setHostings(loadedHostings);
    };
    fetchHostings();
  }, []);

  return (
    <div className="ManageUsers">
      <Header />
      <section className="manage_section">
        {showComponent ? (
          <Hosting id={selectedHostingId} onClose={() => setShowComponent(false)} />
        ) : (
          <>
            <PackageCard onClick={() => createHosting(null)} />
            {hostings.map((hosting) => (
              <div key={hosting.id} onClick={() => createHosting(hosting.id)}>
                <UniversalCard
                  data={hosting}
                  keys={["id", "name"]}
                  icon="bus"
                  subkey={{ id: "id", name: "Titulo" }}
                />
              </div>
            ))}
          </>
        )}
      </section>
    </div>
  );
}

