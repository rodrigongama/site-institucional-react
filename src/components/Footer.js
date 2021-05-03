import { Link } from 'react-router-dom';
import '../styles/global.css';

export default function Footer() {
  return (
    <footer>
      <nav className="nav-footer">
        <Link to="/about">Boat S.A.</Link>
        <Link to="/">Projetos</Link>
        <Link to="/">Produtos</Link>
        <Link to="/news">Novidades</Link>
        <Link to="/contact">Contato</Link>
      </nav>

      <p>
        Estrada de lorem, 1003 - Ipsum - Rio de Janeiro/RJ - Telefone: +55
        21 2222-2222
      </p>
    </footer>
  );
}
