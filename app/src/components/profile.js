import Header from "./header.js";
import '../styles/pages/index.css';
import Cookies from "js-cookie";
import ManagerView from "../managerView.js";
import ManageUsers from "../manageUsers.js";
import LogoutService from "../services/LogoutService";
import { useNavigate } from "react-router-dom";
function Profile() {

  const userType =Cookies.get("levelUser");

  const navigate = useNavigate();
  const handleLogout = () => {
    LogoutService();
    navigate("/login"); // Redireciona para a página de login
  };
  return (

    <div className="Profile">
       <Header />
      <section className="content">
      {(userType == 1) ? <ManagerView /> : <ManageUsers />}
      </section>
      <p onClick={handleLogout}> Sair </p>
    </div>
  );
};

export default Profile;
