import React from "react";

import bus from "../imgs/icons/bus.png";
import settings from "../imgs/icons/settings.png";
import user from "../imgs/icons/user.png";
import reservation from "../imgs/icons/reservation.png";
import destination from "../imgs/icons/destination.png";
import trip_package from "../imgs/icons/package.png";
import hosting from "../imgs/icons/hosting.png";
import tour from "../imgs/icons/tour.png";
import "../styles/components/card.css";
function UniversalCard({ data, keys, icon, subkey }) {
  const icons = {
    bus,
    settings,
    user,
    reservation,
    destination,
    trip_package,
    tour,
    hosting,
  };

  const img = icons[icon];

  if (typeof data !== "object" || Array.isArray(data)) {
    console.error("O parâmetro `data` deve ser um objeto JSON.");
    return null;
  }

  if (!Array.isArray(keys)) {
    console.error("O parâmetro `keys` deve ser um array.");
    return null;
  }

  const values = keys.map((key) => {
    const value = data[key];
    const displayKey = subkey?.[key] || key;
    return value !== undefined
      ? `${displayKey}: ${value}`
      : `${displayKey}: Valor não encontrado`;
  });

  return (
    <div className="card">
      <img src={img} alt="Ícone" />
      <div className="card-content">
        {values.map((item, index) => (
          <div>
            <div className="card-item">
              <span key={index}>{item}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UniversalCard;
