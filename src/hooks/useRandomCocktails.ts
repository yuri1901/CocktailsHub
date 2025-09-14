import { useState, useEffect } from "react";
import { fetchCocktailRandom } from "../services/api";
import type { Cocktail } from "../services/api";

export default function useRandomCocktail() {
  const [randomCard, setRandomCard] = useState<Cocktail | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  const getRandomCard = async () => {
    try {
      const data = await fetchCocktailRandom();
      setRandomCard(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      getRandomCard();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return { randomCard, loading, error };
}
