import Header from "../components/Header";
import Footer from "../components/Footer";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />

      <main className="home">
        {/* HERO */}
        <section className="hero">
          <h1>
            Tudo para o seu Grande Dia em um só lugar
          </h1>
          <p>
            Organize presentes, agenda, fornecedores e muito mais,
            de forma simples e elegante.
          </p>

          <div className="hero-buttons">
            <a href="/register" className="primary">
              Começar agora
            </a>
            <a href="/login" className="secondary">
              Já tenho conta
            </a>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="how">
          <h2>Como funciona?</h2>

          <div className="steps">
            <div>
              <span>1</span>
              <h3>Crie sua conta</h3>
              <p>Cadastre-se gratuitamente e personalize o seu dia especial!</p>
            </div>

            <div>
              <span>2</span>
              <h3>Organize tudo</h3>
              <p>Lista de presentes, agenda e serviços em um só lugar.</p>
            </div>

            <div>
              <span>3</span>
              <h3>Compartilhe</h3>
              <p>Envie o link para seus convidados com facilidade.</p>
            </div>
          </div>
        </section>

        {/* RECURSOS */}
        <section className="features">
          <h2>O que você pode fazer</h2>

          <ul>
            <li>🎁 Criar lista de presentes personalizada</li>
            <li>📝 Criar agenda do dia especial</li>
            <li>📅 Agendar serviços</li>
            <li>📸 Adicionar fotos e descrições</li>
            <li>🔐 Controle total com login seguro</li>
          </ul>
        </section>

      </main>

      <Footer />
    </>
  );
}
