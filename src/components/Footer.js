import { Link } from 'react-router-dom';
import '../styles/global.css';

export default function Footer() {
  return (
    <footer>
      <nav className="nav-footer">
        <Link to="/">Waypoint</Link>
        <Link to="/">Projetos</Link>
        <Link to="/">Produtos</Link>
        <Link to="/">Novidades</Link>
        <Link to="/contact">Contato</Link>
      </nav>

      <p>
        Av. Venezuela 3, 18º andar - Centro - Rio de Janeiro/RJ - Telefone: +55
        21 2203-900
      </p>
    </footer>
  );
}
