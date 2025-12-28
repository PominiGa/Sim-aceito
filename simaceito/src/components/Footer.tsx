import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>Meu Dia X</h3>
          <p>
            Tudo o que você precisa para organizar o seu dia especial!
            em um só lugar.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navegação</h4>
          <Link to="/">Início</Link>
          <Link to="/login">Entrar</Link>
          <Link to="/register">Criar conta</Link>
        </div>

        <div className="footer-links">
          <h4>Recursos</h4>
          <Link to="/lista-de-presentes">Lista de presentes</Link>
          <Link to="/agenda">Agenda</Link>
          <a href="#">Fornecedores</a>
        </div>

        <div className="footer-links">
          <h4>Legal</h4>
          <a href="#">Privacidade</a>
          <a href="#">Termos de uso</a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Meu Dia X • Todos os direitos reservados
      </div>
    </footer>
  );
}
