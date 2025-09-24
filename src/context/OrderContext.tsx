// context
import { createContext } from "react";

// type
import type { Cocktail } from "../services/api";
import type { CartItem } from "../hooks/useOrderCocktails";

interface OrderContextType {
  orderCocktails: CartItem[];
  addCocktailToList: (cocktail: Cocktail) => void;
  removeCocktailFromList: (index: number) => void;
  clearCart: () => void;
}
const OrderContext = createContext<OrderContextType>({
  orderCocktails: [],
  addCocktailToList: () => {},
  removeCocktailFromList: () => {},
  clearCart: () => {},
});

export default OrderContext;
