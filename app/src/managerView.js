import Card from './components/card.js';

import './styles/pages/index.css';

function ManagerView() {
  return (
    <div className="ManagerView">
      <section className="manage_section">
        <Card path="manageusers" icon="user" title="Usuários"></Card>
        <Card path="managepackages" icon="bus" title="Pacotes"></Card>
        <Card path="managedestination" icon="destination" title="Destinos"></Card>
        <Card path="managepackages" icon="bus" title="Viagens"></Card>
        <Card path="managepackages" icon="bus" title="Transporte"></Card>
        <Card path="managepackages" icon="hosting" title="Hospedagens"></Card>
        <Card path="managepackages" icon="tour" title="Passeios"></Card>
        <Card path="managepackages" icon="reservation" title="Reservas"></Card>
        <Card path="managesettings" icon="settings" title="Configurações"></Card>
      </section>
    </div>
  );
};

export default ManagerView;
