import { createContext, useContext, useState } from "react";
import { proofByNine } from "../../utils/proofByNine";
import { CARDS } from "../../typescript/CardContextType";
import type { CardContextType } from "../../typescript/CardContextType";

const CardContext = createContext<CardContextType | null>(null);

export function CardContextProvider({ children }: { children: React.ReactNode }) {
  const [cards, setCards] = useState<CardContextType["cards"]>([]) ; // ✅ tableau vide par défaut

  const drawAll = () => {
    const allCardsRandomOrder = [...CARDS].sort(() => Math.random() - 0.5);
    const drawn = allCardsRandomOrder.slice(0, 3).map(c => ({
      id: c.id,
      value: c.value,
    }));
    setCards(drawn);
  };

  const reset = () => {
    setCards([]); // ✅ reset en tableau vide
  };
  
  const score = cards.length === 3 ? proofByNine(cards.reduce((s, c) => s + c.value, 0)) : null;

  return (
    <CardContext.Provider value={{ cards, score, drawAll, reset }}>
      {children}
    </CardContext.Provider>
  );
}

/* ---------- CUSTOM HOOK ---------- */
export function useCardState() {
  const ctx = useContext(CardContext);
  if (!ctx) throw new Error("useCardState must be used within CardContextProvider");
  return ctx;
}
