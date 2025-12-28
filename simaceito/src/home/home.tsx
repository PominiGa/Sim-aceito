import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./home.css";

const lugares = [
  {
    name: "Engenho",
    images: [
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
      "https://images.unsplash.com/photo-1519741497674-611481863552",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    ],
  },
  {
    name: "Villa Garden",
    images: [
      "https://images.unsplash.com/photo-1519227355453-8f982e425321",
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    ],
  },
  {
    name: "Espaço Lux",
    images: [
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
      "https://images.unsplash.com/photo-1500534314209-a26db0f5a0f9",
    ],
  },
];

const fotografo = [
  {
    name: "Fotógrafo Profissional",
    images: [
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
      "https://images.unsplash.com/photo-1519741497674-611481863552",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    ],
  },
  {
    name: "Fotógrafo Amador",
    images: [
      "https://images.unsplash.com/photo-1519227355453-8f982e425321",
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    ],
  },
];

const decoracao = [
  {
    name: "Decoração Profissional",
    images: [
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
      "https://images.unsplash.com/photo-1500534314209-a26db0f5a0f9",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="home">

        {/* HERO */}
        <section className="hero">
          <div>
            <h1>Tudo para o seu Grande Dia em um só lugar</h1>
            <p>
              Organize presentes, agenda, fornecedores e muito mais,
              de forma simples e elegante.
            </p>

            <div className="hero-buttons">
              <a href="/register" className="primary">Começar agora</a>
              <a href="/login" className="secondary">Já tenho conta</a>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="how">
          <div>
            <h2>Como funciona?</h2>

            <div className="steps">
              <div>
                <span>1</span>
                <h3>Crie sua conta</h3>
                <p>Cadastre-se gratuitamente e personalize o seu dia especial.</p>
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
          </div>
        </section>

        {/* SERVIÇOS */}
        <ServiceSection title="Contratar Lugar" items={lugares} />
        <ServiceSection title="Contratar Fotógrafo" items={lugares} />
        <ServiceSection title="Contratar Decoração" items={lugares} />

        {/* FEATURES */}
        <section className="features">
          <div>
            <h2>O que você pode fazer</h2>
            <ul>
              <li>🎁 Criar lista de presentes personalizada</li>
              <li>📝 Criar agenda do dia especial</li>
              <li>📅 Agendar serviços</li>
              <li>📸 Adicionar fotos e descrições</li>
              <li>🔐 Controle total com login seguro</li>
            </ul>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

/* ===== COMPONENTES ===== */

function ServiceSection({ title, items }: any) {
  return (
    <section className="services">
      <div>
        <h2>{title}</h2>

        <div className="services-grid">
          {items.map((item: any, index: number) => (
            <ServiceCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ item }: any) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex(index === 0 ? item.images.length - 1 : index - 1);

  const next = () =>
    setIndex(index === item.images.length - 1 ? 0 : index + 1);

  return (
    <div className="service-card">
      <div className="service-image">
        <button className="arrow left" onClick={prev}>‹</button>
        <img src={item.images[index]} alt={item.name} />
        <button className="arrow right" onClick={next}>›</button>
      </div>

      <h3>{item.name}</h3>
      <button className="hire-btn">Contratar</button>
    </div>
  );
}
