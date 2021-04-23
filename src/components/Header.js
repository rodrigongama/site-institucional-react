import { useState } from 'react';
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
            <a href="/"><p>Onde estamos</p></a>
            <a href="/"><p>O que fazemos</p></a>

            <a href="/"><h3>Projetos</h3></a>

            <h3>Produtos</h3>
            <a href="/"><p>Comunicação</p></a>
            <a href="/"><p>Navegação</p></a>
            <a href="/"><p>Segurança</p></a>

            <a href="/"><h3>Novidades</h3></a>

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
      
      <a href="/">
        <img src={LogoLancha} alt="Logo da Boat Company" />
      </a>
      

      <div>
        <select name="language" id="select">
          <option value="português" fixed>
            Português
          </option>
          <option value="inglês">Inglês</option>
          <option value="italiano">Italiano</option>
        </select>
      </div>
    </div>
  );
}
