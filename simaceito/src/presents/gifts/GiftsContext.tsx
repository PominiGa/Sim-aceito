import { createContext, useContext, useState } from "react";

type Gift = {
  id: number;
  name: string;
  price: number;
};

type GiftsPageData = {
  title: string;
  message: string;
  photos: string[];
  gifts: Gift[];
};

type GiftsContextType = {
  data: GiftsPageData;
  setData: React.Dispatch<React.SetStateAction<GiftsPageData>>;
};

const GiftsContext = createContext({} as GiftsContextType);

export function GiftsProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<GiftsPageData>({
    title: "Meu Dia Especial",
    message: "",
    photos: [],
    gifts: [],
  });

  return (
    <GiftsContext.Provider value={{ data, setData }}>
      {children}
    </GiftsContext.Provider>
  );
}

export function useGifts() {
  return useContext(GiftsContext);
}
