import { useState } from 'react';
import { Link } from 'react-router-dom'
import LogoLancha from '../assets/logotipo-lancha-200.jpg';

import '../styles/global.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="headerContainer">
      {isOpen && (
        <div className="side-menu">
          <div className="format">
            <h3>Boat Company</h3>
            <a href="/about">Quem somos</a>
            <a href="/">Onde estamos</a>
            <a href="/">O que fazemos</a>

            <h3>Produtos</h3>
            <a href="/">Comunicação</a>
            <a href="/">Navegação</a>
            <a href="/">Segurança</a>

            <a href="/news">
              <h3>Novidades</h3>
            </a>

            <a href="/contact">
              <h3>Contato</h3>
            </a>

            <div className="search-button">
              <label for="Buscar"></label>
              <input
                type="text"
                name="Buscar"
                id="search"
                placeholder="Buscar"
              />
              <button className="icon"></button>
            </div>
          </div>

          <button className="close-menu" onClick={() => setIsOpen(false)}>
            
          </button>
        </div>
      )}

      <button className="nav-top" onClick={() => setIsOpen(!isOpen)}>
        <div className="nav1"></div>
        <div className="nav2"></div>
        <div className="nav3"></div>
      </button>
      
      <Link to="/">
        <img src={LogoLancha} alt="Logo da Boat Company" />
      </Link>
      

      <div>
        <select name="language" id="select">
          <option value="português" fixed>
            Português
          </option>
          <option value="inglês">Inglês</option>
        </select>
      </div>
    </div>
  );
}
