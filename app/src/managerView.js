import Card from "./components/card.js";

import "./styles/pages/index.css";

function ManagerView() {
  return (
    <div className="ManagerView">
      <section className="manage_section">
        <Card path="manageusers" icon="user" title="Usuários"></Card>
        <Card path="destination" icon="destination" title="Destinos"></Card>
        <Card path="hostings" icon="hosting" title="Hospedagens"></Card>
        <Card path="tours" icon="tour" title="Passeios"></Card>
        <Card path="packages" icon="bus" title="Pacotes"></Card>
        <Card path="reservations" icon="reservation" title="Reservas"></Card>
        <Card path="settings" icon="settings" title="Configurações"></Card>
      </section>
    </div>
  );
}

export default ManagerView;
