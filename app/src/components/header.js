
import Link from './link.js';

import '../styles/components/header.css';

function Header(){
    return (
        <div className="header">
            <div class="main_title">
                UP Trips
            </div>

            <div class="links">
                <Link href="/home" target="" >Home</Link>
                <Link href="/home#trips" target="" >Destinos</Link>
                <Link href="/home#books" conten target="" >Pacotes</Link>
                <Link href="/home#feedacks" target="" >Feedbacks</Link>
                <Link href="/login" target="" >Login</Link>
            </div>
        </div>
    );
}

export default Header;
