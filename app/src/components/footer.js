import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>UP Trips</h2>
          <p>Agende sua viagem em minutos. Controle total sobre seus destinos.</p>
        </div>
        <div className="footer-section">
          <h3>Destinos</h3>
          <ul>
            <li>Passagens</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Compania</h3>
          <ul>
            <li>Sobre</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contato</h3>
          <ul>
            <li>Whatsapp</li>
            <li>Email</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Redes Sociais</h3>
          <ul className="social-icons">
            <li><img src="facebook-icon.png" alt="Facebook" /></li>
            <li><img src="instagram-icon.png" alt="Instagram" /></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Todos os direitos reservados</p>
        <p>UP Trips - CNPJ</p>
      </div>
    </footer>
  );
};

export default Footer;