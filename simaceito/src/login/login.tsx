import { Link, useNavigate } from "react-router-dom";
import { loginFake } from "../auth/auth";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // login fake por enquanto
    loginFake("contratante");

    // após login → editor de presentes
    navigate("/minha-lista");
  }

  return (
    <main className="login-page">
      <div className="login-card">
        <h1>Bem-vindo de volta</h1>
        <p>
          Acesse sua conta para organizar ou gerenciar o seu dia especial.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input type="email" placeholder="seu@email.com" required />
          </label>

          <label>
            Senha
            <input type="password" placeholder="••••••••" required />
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
