// context
import { createContext } from "react";

// type
import type { Cocktail } from "../services/api";

export interface CocktailsContextType {
  nameCard: Cocktail[] | null;
  loading: boolean;
  error: string;
  inputValue: string;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getCocktailsByName: () => void;
  setLoading: (value: boolean) => void;
}

const CocktailsContext = createContext<CocktailsContextType>({
  nameCard: null,
  loading: false,
  error: "",
  inputValue: "",
  handleChangeInput: () => {},
  getCocktailsByName: () => {},
  setLoading: (value: boolean) => {
    value;
  },
});

export default CocktailsContext;
