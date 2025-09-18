import axios from "axios";

export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
}

const API_BASE: string = import.meta.env.VITE_API_BASE;

export const fetchCocktailByName = async (name: string) => {
  try {
    const { data } = await axios.get(`${API_BASE}/search.php?s=${name}`);
    return data.drinks;
  } catch (error) {
    console.error("Error fetching cocktails by name:", error);
    return [];
  }
};
export const fetchCocktailForLetter = async (letter: string) => {
  try {
    const { data } = await axios.get(`${API_BASE}/search.php?f=${letter}`);
    return data.drinks;
  } catch (error) {
    console.error("Error fetching cocktails by letter:", error);
    return [];
  }
};
export const fetchCocktailRandom = async () => {
  try {
    const { data } = await axios.get(`${API_BASE}/random.php`);
    return data.drinks[0];
  } catch (error) {
    console.error("Помилка fetchRandomCocktail:", error);
    return [];
  }
};

export const fetchCocktailById = async (id: string) => {
  try {
    const { data } = await axios.get(`${API_BASE}/lookup.php?i=${id}`);
    return data.drinks;
  } catch (error) {
    console.error("Помилка fetchCocktailForId:", error);
    return [];
  }
};
