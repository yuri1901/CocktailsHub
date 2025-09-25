// hooks
import { useState, useEffect } from "react";

// type Cocktail
import type { Cocktail } from "../services/api";

// fetch API by letter
import { fetchCocktailForLetter } from "../services/api";

export default function useCocktailsByLetter(letter: string) {
  const [cardByLetter, setCardByLetter] = useState<Cocktail[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  const handleLetterClick = async () => {
    try {
      const data = await fetchCocktailForLetter(letter);
      setCardByLetter(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    handleLetterClick();
  }, [letter]);

  return { cardByLetter, loading, error };
}
