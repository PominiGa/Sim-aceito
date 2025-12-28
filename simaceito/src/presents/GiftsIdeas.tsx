import { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./GiftsIdeas.css";

const gifts = [
  {
    id: 1,
    name: "Jogo de Jantar",
    img: "https://portobrasil.vtexassets.com/arquivos/ids/180505/61091R---APARELHO-DE-JANTAR-42-PECAS-ROMA-BRANCO---02.jpg?v=638942263635530000",
    price: "R$ 754",
    description: "Um lindo jogo de jantar para começar a nova fase.",
  },
  {
    id: 2,
    name: "Liquidificador",
    img: "https://lojawap.vtexassets.com/arquivos/ids/174109/liquidificador-wb2000_01.jpg.jpg?v=638792101499170000",
    price: "R$ 449",
    description: "Perfeito para o dia a dia do casal.",
  },
  {
    id: 3,
    name: "Caixinha",
    img: "https://lojaboradecora.com.br/wp-content/uploads/2021/09/por-que-os-cofrinhos-para-moedas-tem-formato-porco-scaled.jpeg",
    price: "R$ 150",
    description: "Ajude com uma contribuição.",
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
                <img src={gift.img} alt={gift.name} />
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
            <p><img src={selectedGift.img} alt={selectedGift.name} /></p>
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