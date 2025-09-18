import { useState } from "react";
import { fetchCocktailByName } from "../services/api";
import type { Cocktail } from "../services/api";

export default function useCocktailsByName() {
  const [nameCard, setNameCard] = useState<Cocktail[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

  const getCocktailsByName = async () => {
    try {
      const data = await fetchCocktailByName(inputValue);
      setNameCard(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
    } finally {
      setInputValue("");
      setLoading(false);
    }
  };

  return { nameCard, loading, error, inputValue, handleChangeInput, getCocktailsByName, setLoading };
}
