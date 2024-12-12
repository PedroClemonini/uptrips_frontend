import Card from './components/card.js';

import './styles/pages/index.css';

function UserView() {
  return (
    <div className="ManagerView">
      <section className="manage_section">
        <Card path="managepackages" icon="bus" title="Minhas Viagens"></Card>
        <Card path="managesettings" icon="settings" title="Configurações"></Card>
      </section>
    </div>
  );
};

export default UserView;
