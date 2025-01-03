import "../styles/components/header.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { HashLink as Link } from 'react-router-hash-link';

import user from '../imgs/icons/user.png'
function Header() {
  const [isLogged, setIsLogged] = useState(false);


  useEffect(() => {
    const userId = Cookies.get("userId");
    setIsLogged(!!userId);
  },[]);


  return (
    <div className="header">
      <div className="main_title">UP Trips</div>

      <div className="links">
        <Link className="link" to="/" >
          Home
        </Link>
        <Link className="link" to="/#steps" >
          Como Reservar
        </Link>
        <Link className="link" to="/packagesList" >
          Pacotes
        </Link>
        <Link className="link" to="/#feedbacks" >
          Feedbacks
        </Link>
        {isLogged ? (
          <Link to="/profile" className="link">
            {" "}
            <img className="icon" src={user} alt="user-icon"/>{" "}
          </Link>
        ) : (
          <Link to="/login" className="link ">
            Login
          </Link>
        )}{" "}
      </div>
    </div>
  );
}

export default Header;
