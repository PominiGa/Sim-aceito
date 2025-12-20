import "./gifts.css";

export default function GiftsEditor() {
  return (
    <main className="gifts-page">
      <section className="gifts-editor">

        <header className="gifts-header">
          <h1>Lista de Presentes</h1>
          <p>Personalize a página do seu dia especial</p>
        </header>

        {/* INFORMAÇÕES DO EVENTO */}
        <div className="gifts-card">
          <h2>Informações do Evento</h2>

          <label>
            Título da página
            <input type="text" placeholder="Casamento de Ana & João" />
          </label>

          <label>
            Mensagem para convidados
            <textarea placeholder="Estamos muito felizes em compartilhar esse momento com você..." />
          </label>
        </div>

        {/* TEMA */}
        <div className="gifts-card">
          <h2>Tema visual</h2>

          <div className="theme-options">
            <button className="theme active">Clássico</button>
            <button className="theme">Romântico</button>
            <button className="theme">Moderno</button>
          </div>
        </div>

        {/* PRESENTES */}
        <div className="gifts-card">
          <h2>Presentes</h2>

          <div className="gift-item">
            <input type="text" placeholder="Jogo de jantar" />
            <input type="number" placeholder="Valor" />
            <button>Remover</button>
          </div>

          <button className="add-gift">+ Adicionar presente</button>
        </div>

        <button className="save">Salvar alterações</button>

      </section>
    </main>
  );
}
