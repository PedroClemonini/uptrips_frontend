
import Header from "./components/Header.js";
import Card from './components/Card.js';

import './styles/pages/index.css';

function ManagerView() {
  return (
    <div className="ManagerView">
      <Header user="admin" />
      <section className="manage_section">
        <Card path="manageusers" icon="user" title="Usuários"></Card>
        <Card path="managepackages" icon="bus" title="Pacotes"></Card>
        <Card path="managesettings" icon="settings" title="Configurações"></Card>
      </section>
    </div>
  );
};

export default ManagerView;