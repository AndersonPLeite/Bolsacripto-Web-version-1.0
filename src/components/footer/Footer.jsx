import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Sobre Nós</h3>
          <p>Conhecimento é o melhor ativo do investidor.</p>
        </div>
        <div className="footer-section">
          <h3>Links Úteis</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contato</h3>
          <p>Email: contato@bolsacripto.com</p>
          <p>Telefone: (11) 1234-5678</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2025 Bolsacripto. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;