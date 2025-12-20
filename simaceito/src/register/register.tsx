import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <main className="register-page">
      <div className="register-card">
        <h1>Crie sua conta</h1>
        <p>
          Comece agora a organizar ou oferecer serviços para um dia inesquecível.
        </p>

        <form className="register-form">
          <label>
            Nome completo
            <input type="text" placeholder="Seu nome" />
          </label>

          <label>
            Email
            <input type="email" placeholder="seu@email.com" />
          </label>

          <label>
            Senha
            <input type="password" placeholder="Crie uma senha segura" />
          </label>

          <label>
            Tipo de conta
            <select>
              <option value="">Selecione uma opção</option>
              <option value="CLIENTE">Cliente (organizar evento)</option>
              <option value="FORNECEDOR">Fornecedor (oferecer serviços)</option>
            </select>
          </label>

          <button type="submit">Criar conta</button>
        </form>

        <div className="register-links">
          <span>Já possui uma conta?</span>
          <Link to="/login">Entrar</Link>
        </div>
      </div>
    </main>
  );
}
