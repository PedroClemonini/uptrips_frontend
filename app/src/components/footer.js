import instagram from "../imgs/icons/instagram.png";
import facebook from "../imgs/icons/facebook.png";

import "../styles/components/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div class="logo">
        <h1>UPTrips</h1>
        <span>Agende sua viagem em minutos. Controle total sobre seus destinos.</span>
      </div>

      <div class="topics"> 
        <div class="topic"><h2>Compania</h2><a href="/">Sobre</a></div>

        <div class="topic">
            <h2>Contato</h2>
            <a href="https://wa.me/5511931319915" target="_blank">WhatsApp</a>
            <a href="/">E-mail</a>
        </div>

        <div class="topic"><h2>Destinos</h2><a href="">Passagens</a></div>

        <div class="topic">
            <h2>Redes Sociais</h2>
            <div>
                <a href="https://www.instagram.com/voudeuptrips/" target="_blank"><img src={instagram} alt="Instagram"/></a>
                <a href="https://www.facebook.com/voudeuptrips" target="_blank"><img src={facebook} alt="Facebook"/></a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
