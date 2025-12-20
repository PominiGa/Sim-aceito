import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <main className="login-page">
      <div className="login-card">
        <h1>Bem-vindo de volta</h1>
        <p>
          Acesse sua conta para organizar ou gerenciar o seu dia especial.
        </p>

        <form className="login-form">
          <label>
            Email
            <input type="email" placeholder="seu@email.com" />
          </label>

          <label>
            Senha
            <input type="password" placeholder="••••••••" />
          </label>

          <button type="submit">Entrar</button>
        </form>

        <div className="login-links">
          <Link to="/register">Criar conta</Link>
          <Link to="/">Entrar como convidado</Link>
        </div>
      </div>
    </main>
  );
}
