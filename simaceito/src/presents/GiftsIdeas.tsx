import { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./GiftsIdeas.css";

const gifts = [
  {
    id: 1,
    name: "Jogo de Jantar",
    price: "R$ 350",
    description: "Um lindo jogo de jantar para começar a nova fase.",
  },
  {
    id: 2,
    name: "Liquidificador",
    price: "R$ 280",
    description: "Perfeito para o dia a dia do casal.",
  },
  {
    id: 3,
    name: "Cotas para Lua de Mel",
    price: "R$ 150",
    description: "Ajude a tornar a lua de mel inesquecível.",
  },
];

export default function GiftIdeas() {
  const [selectedGift, setSelectedGift] = useState<any>(null);

  return (
    <>
      <Header />

      <main className="gift-ideas">
        {/* HERO */}
        <section className="gift-ideas-hero fade-in">
          <h1>Lista de Presentes</h1>
          <p>
            Inspire-se com ideias para criar uma lista personalizada
            e compartilhar com seus convidados
          </p>
        </section>

        {/* CARDS */}
        <section className="gift-ideas-examples">
          <h2>Ideias populares</h2>

          <div className="examples-grid">
            {gifts.map((gift) => (
              <div
                key={gift.id}
                className="example-card"
                onClick={() => setSelectedGift(gift)}
              >
                <h3>{gift.name}</h3>
                <span>{gift.price}</span>
                <small>Clique para ver mais</small>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="gift-ideas-cta">
          <h2>Crie sua própria lista</h2>
          <p>
            Personalize os presentes do seu grande dia
            do seu jeito.
          </p>
          <a href="/register">Criar minha lista</a>
        </section>
      </main>

      {/* MODAL */}
      {selectedGift && (
        <div className="modal-overlay" onClick={() => setSelectedGift(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedGift.name}</h3>
            <p>{selectedGift.description}</p>
            <span>{selectedGift.price}</span>

            <button onClick={() => setSelectedGift(null)}>Fechar</button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}