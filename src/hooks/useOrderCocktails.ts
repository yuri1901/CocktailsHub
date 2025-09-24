import { useState, useEffect } from "react";
import type { Cocktail } from "../services/api";

export interface CartItem {
  cocktail: Cocktail;
  quantity: number;
}

export default function useOrderCocktail() {
  const [orderCocktails, setOrderCocktails] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("orderCocktails");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("orderCocktails", JSON.stringify(orderCocktails));
  }, [orderCocktails]);

  const addCocktailToList = (cocktail: Cocktail) => {
    setOrderCocktails((data) => {
      // Знайти існуючий коктейль
      const existingIndex = data.findIndex((item) => item.cocktail.idDrink === cocktail.idDrink);

      if (existingIndex !== -1) {
        const updatedData = [...data];
        updatedData[existingIndex] = {
          ...updatedData[existingIndex],
          quantity: updatedData[existingIndex].quantity + 1,
        };
        return updatedData;
      } else {
        return [...data, { cocktail, quantity: 1 }];
      }
    });
  };

  const removeCocktailFromList = (index: number) => {
    setOrderCocktails((data) => {
      const item = data[index];
      if (item.quantity > 1) {
        // Якщо quantity > 1 - зменшити на 1
        const updatedData = [...data];
        updatedData[index] = {
          ...item,
          quantity: item.quantity - 1,
        };
        return updatedData;
      } else {
        return data.filter((_, i) => i !== index);
      }
    });
  };

  const clearCart = () => {
    setOrderCocktails([]);
    localStorage.removeItem("orderCocktails");
  };

  return { orderCocktails, addCocktailToList, removeCocktailFromList, clearCart };
}
