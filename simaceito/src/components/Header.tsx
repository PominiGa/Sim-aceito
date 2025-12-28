import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <h2><Link to="/">Meu Dia X</Link></h2>

      <nav>
        <Link to="/">Início</Link>
        <Link to="/login">Entrar</Link>
        <Link to="/register" className="btn">Criar conta</Link>
      </nav>
    </header>
  );
}
