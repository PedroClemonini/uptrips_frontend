import Link from './link.js';
import '../styles/header.css';

function Header({user}){

    if({user}.user === "admin"){
        return (
             <div className="header">
                <div class="main_title">
                    UP Trips
                </div>
                <div class="links">
                    <Link href="/home" target="" >Home</Link>
                    <Link href="/users" target="" >Usuários</Link>
                    <Link href="/packages" target="" >Pacotes</Link>
                    <Link href="/config" target="" >Configurações</Link>
                    <Link href="/signout" target="" >Sair</Link>
                </div>
            </div>
        );
    } else {
        return (
            <div className="header">
                <div class="main_title">
                    UP Trips
                </div>
    
                <div class="links">
                    <Link href="/home" content="Home" target="" >Home</Link>
                    <Link href="#" content="Destinos" target="" >Destinos</Link>
                    <Link href="#" content="Como Agendar?" target="" >Pacotes</Link>
                    <Link href="#feedacks" content="Feedbacks" target="" >Feedbacks</Link>
                    <Link href="#" content="Login" target="" >Login</Link>
                </div>
            </div>
        );
    }
}

export default Header;
