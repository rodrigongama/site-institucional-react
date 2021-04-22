import {useState} from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="headerContainer">
        {isOpen && (
          <div className="side-menu">
            <div className="format">
              <h3>Waypoint</h3>
                <a href="./quem-somos/index.html">Quem somos</a>
                <p>Onde estamos</p>
                <p>O que fazemos</p>
             
              <h3>Projetos</h3>

              <h3>Produtos</h3>
                <p>Comunicação</p>
                <p>Navegação</p>
                <p>Segurança</p>
                
              <h3>Novidades</h3>
              
              <a href="./contato/index.html"><h3>Contato</h3></a>
              
              <div className="search-button">
                  <label for="Buscar"></label>
                  <input type="text" name="Buscar" id="search" placeholder="Buscar" />
                  <button className="icon"></button>
              </div>

            </div>
            
            <button className="close-menu" onClick={() => setIsOpen(false)}>X</button>
          </div>
        )}
        
        <button className="nav-top" onClick={() => setIsOpen(!isOpen)}>
            <div className="nav1"></div>
            <div className="nav2"></div>
            <div className="nav3"></div>
        </button>
          
        <img src="/assets/logo-waypoint.png" alt="Logo da Waypoint" />
                
        <div>
            <select name="language" id="select">
                <option value="português" fixed>Português</option>
                <option value="inglês">Inglês</option>
                <option value="italiano">Italiano</option>
            </select>
        </div>
    
  </div>
  );
}