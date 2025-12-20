import { useGifts } from "./GiftsContext";

export default function GiftsView() {
  const { data } = useGifts();

  return (
    <main>
      <h1>{data.title}</h1>
      <p>{data.message}</p>

      {data.gifts.map((gift) => (
        <div key={gift.id}>
          {gift.name} - R$ {gift.price}
        </div>
      ))}
    </main>
  );
}
