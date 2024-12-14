import Header from "./header.js";
import '../styles/pages/index.css';
import Cookies from "js-cookie";
import ManagerView from "../managerView.js";
import UserView from "../userView.js";
import LogoutService from "../services/userServices/LogoutService";
import { useNavigate } from "react-router-dom";
function Profile() {

  const userType = Number(Cookies.get("levelUser"));

  const navigate = useNavigate();
  const handleLogout = () => {
    LogoutService();
    navigate("/login"); // Redireciona para a página de login
  };
  return (

    <div className="Profile">
       <Header />
      <section className="content">
      {(userType
       === 1) ? <ManagerView /> : <UserView />}
      </section>
      <p onClick={handleLogout}> Sair </p>
    </div>
  );
};

export default Profile;
