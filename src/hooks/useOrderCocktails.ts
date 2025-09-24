import { useState, useEffect } from "react";
import type { Cocktail } from "../services/api";

export interface CartItem {
  cocktail: Cocktail;
  quantity: number;
}

export default function useOrderCocktail() {
  const [orderCocktails, setOrderCocktails] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("orderCocktails");
      if (saved) {
        const parsed = JSON.parse(saved);
        // Перевіряємо та нормалізуємо дані
        if (Array.isArray(parsed)) {
          return parsed.filter((item) => item && item.cocktail && typeof item.quantity === "number" && !isNaN(item.quantity));
        }
      }
      return [];
    } catch (error) {
      console.error("Error parsing localStorage:", error);
      // Очищаємо пошкоджені дані
      localStorage.removeItem("orderCocktails");
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("orderCocktails", JSON.stringify(orderCocktails));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [orderCocktails]);

  const addCocktailToList = (cocktail: Cocktail) => {
    setOrderCocktails((data) => {
      // Знайти існуючий коктейль
      const existingIndex = data.findIndex((item) => item.cocktail.idDrink === cocktail.idDrink);

      if (existingIndex !== -1) {
        const updatedData = [...data];
        const currentQuantity = Number(updatedData[existingIndex].quantity) || 0;
        updatedData[existingIndex] = {
          ...updatedData[existingIndex],
          quantity: currentQuantity + 1,
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
      if (!item) return data;

      const currentQuantity = Number(item.quantity) || 0;
      if (currentQuantity > 1) {
        // Якщо quantity > 1 - зменшити на 1
        const updatedData = [...data];
        updatedData[index] = {
          ...item,
          quantity: currentQuantity - 1,
        };
        return updatedData;
      } else {
        return data.filter((_, i) => i !== index);
      }
    });
  };

  const clearCart = () => {
    setOrderCocktails([]);
    try {
      localStorage.removeItem("orderCocktails");
    } catch (error) {
      console.error("Error clearing localStorage:", error);
    }
  };

  return { orderCocktails, addCocktailToList, removeCocktailFromList, clearCart };
}
