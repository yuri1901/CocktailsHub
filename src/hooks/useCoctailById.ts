// hooks
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// fetch API by id
import { fetchCocktailById } from "../services/api";

// type Cocktail
import type { Cocktail } from "../services/api";

export default function useCoctailById() {
  const [cardById, setCardById] = useState<Cocktail | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  const { id } = useParams();
  if (!id) return { cardById: null, loading: false, error: "" };
  const getCardById = async () => {
    try {
      const data = await fetchCocktailById(id);
      setCardById(data[0]);
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    getCardById();
  }, [id]);

  return { cardById, loading, error };
}
