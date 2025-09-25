// react router
import { Link } from "react-router-dom";

// type Cocktail
import type { Cocktail } from "../../services/api";

// components
import OrderButtons from "../orderButton/OrderButton";

// context
import OrderContext from "../../context/OrderContext";

// hook
import { useContext } from "react";

interface CardItemProps {
  cocktail: Cocktail;
}

export default function CardItem({ cocktail }: CardItemProps) {
  const { addCocktailToList } = useContext(OrderContext);

  return (
    <article className="w-full cursor-pointer border border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-6 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 shadow-lg flex flex-col items-center transition-all duration-300 dark:text-gray-100">
      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">{cocktail.strDrink}</h2>
      <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300 rounded-md px-3 py-1 text-base mb-2">
        {cocktail.strCategory} | {cocktail.strAlcoholic}
      </span>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 text-center">Glass: {cocktail.strGlass}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 w-full">
        <Link
          to={`/cocktails/${cocktail.idDrink}`}
          className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl hover:from-blue-600 hover:to-blue-800 transition text-center font-semibold text-base"
        >
          Детальніше
        </Link>
        <OrderButtons orderCocktail={() => addCocktailToList(cocktail)} />
      </div>
    </article>
  );
}
