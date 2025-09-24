// component
import OrderButton from "../orderButton/OrderButton";

// hook
import { useContext } from "react";

// context
import OrderContext from "../../context/OrderContext";

interface CartProps {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  ingredients: string[];
}

const Card: React.FC<CartProps> = ({ idDrink, strDrink, strDrinkThumb, strCategory, strAlcoholic, strGlass, strInstructions, ingredients }: CartProps) => {
  const { addCocktailToList } = useContext(OrderContext);
  return (
    <article className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 max-w-[350px] shadow-md bg-white dark:bg-gray-800 flex flex-col items-center mx-auto transition-colors">
      <img
        src={strDrinkThumb}
        alt={strDrink}
        className="w-full max-w-[220px] rounded-lg mb-4"
      />
      <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">{strDrink}</h2>
      <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 rounded-md px-3 py-1 text-base mb-2">
        {strCategory} | {strAlcoholic}
      </span>
      <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
        <b>Glass:</b> {strGlass}
      </p>
      <div className="mb-2 w-full">
        <h3 className="font-semibold mb-1 dark:text-gray-200">Інгредієнти:</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          {ingredients.map((ing, idx) => (
            <li key={idx}>{ing}</li>
          ))}
        </ul>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4 whitespace-pre-line">{strInstructions}</p>
      <OrderButton
        orderCocktail={() =>
          addCocktailToList({
            idDrink: idDrink!,
            strDrink: strDrink,
            strDrinkThumb: strDrinkThumb,
            strCategory: strCategory,
            strAlcoholic: strAlcoholic,
            strGlass: strGlass,
            strInstructions: strInstructions,
          })
        }
      />
    </article>
  );
};

export default Card;
