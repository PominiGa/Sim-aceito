import { useState } from "react";
import "./agend.css";

const availablePlaces = {
  "2025-01-10": ["Espaço Jardim Real", "Salão Aurora"],
  "2025-01-11": ["Chácara Bela Vista"],
  "2025-01-12": ["Hotel Premium", "Casa de Eventos Lux"],
};

export default function Agenda() {
  const [date, setDate] = useState("");
  const [places, setPlaces] = useState<string[]>([]);

  function handleDateChange(value: string) {
    setDate(value);
    setPlaces(availablePlaces[value as keyof typeof availablePlaces] || []);
  }

  return (
    <main className="agenda-page">
      <section className="agenda-card">
        <h1>Agenda do Evento</h1>
        <p>Escolha a data para ver os locais disponíveis</p>

        {/* DATE PICKER */}
        <label className="date-label">
          Data do evento
          <input
            type="date"
            value={date}
            onChange={(e) => handleDateChange(e.target.value)}
          />
        </label>

        {/* LOCAIS */}
        {date && (
          <div className="places">
            <h2>Locais disponíveis</h2>

            {places.length > 0 ? (
              <ul>
                {places.map((place) => (
                  <li key={place}>{place}</li>
                ))}
              </ul>
            ) : (
              <span className="no-places">
                Nenhum local disponível para essa data
              </span>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
