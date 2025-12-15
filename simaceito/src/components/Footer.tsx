import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>💍 Sim, Aceito!</h3>
          <p>
            Tudo o que você precisa para organizar o seu casamento
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
          <a href="#">Lista de presentes</a>
          <a href="#">Agenda</a>
          <a href="#">Fornecedores</a>
        </div>

        <div className="footer-links">
          <h4>Legal</h4>
          <a href="#">Privacidade</a>
          <a href="#">Termos de uso</a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Sim, Aceito! • Todos os direitos reservados
      </div>
    </footer>
  );
}
