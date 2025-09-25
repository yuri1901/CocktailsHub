// react router
import { Link } from "react-router-dom";

// type Cocktail
import type { Cocktail } from "../../services/api";

// components
import OrderButtons from "../orderButton/OrderButton";

interface CardItemProps {
  cocktail: Cocktail;
}

export default function CardItem({ cocktail }: CardItemProps) {
  return (
    <article className="cursor-pointer border rounded-xl p-4 bg-white shadow  flex flex-col items-center">
      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{cocktail.strDrink}</h2>
      <span className="inline-block bg-gray-100 text-gray-500 rounded-md px-3 py-1 text-base mb-2">
        {cocktail.strCategory} | {cocktail.strAlcoholic}
      </span>
      <p className="text-sm text-gray-600 mb-2">Glass: {cocktail.strGlass}</p>
      <div className="flex gap-2 mt-2 w-full">
        <Link
          to={`/cocktails/${cocktail.idDrink}`}
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center"
        >
          Детальніше
        </Link>
        <OrderButtons />
      </div>
    </article>
  );
}
