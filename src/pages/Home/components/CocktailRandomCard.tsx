// custom hook
import useRandomCocktail from "../../../hooks/useRandomCocktails";

// hook
import { useContext } from "react";

// context
import OrderContext from "../../../context/OrderContext";

// components
import Loading from "../../../components/loading/Loading";
import Error from "../../../components/error/Error";
import OrderButton from "../../../components/orderButton/OrderButton";

export default function CocktailRandomCard() {
  const { randomCard, loading, error } = useRandomCocktail();
  const { addCocktailToList } = useContext(OrderContext);

  return (
    <>
      {loading && <Loading />}
      {!loading && error && <Error message={error} />}
      {randomCard && (
        <article className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 max-w-[350px] shadow-md bg-white dark:bg-gray-900 flex flex-col gap-4 items-center mx-auto">
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold">Персональна рекомендація</span>
          <img
            src={randomCard.strDrinkThumb}
            alt={randomCard.strDrink}
            className="w-full max-w-[220px] rounded-lg"
          />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{randomCard.strDrink}</h2>
          <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300 rounded-md px-3 py-1 text-base mb-2">
            {randomCard.strCategory} | {randomCard.strAlcoholic}
          </span>
          <p className="text-base text-gray-700 dark:text-gray-200">
            <b>Glass:</b> {randomCard.strGlass}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{randomCard.strInstructions}</p>
          <OrderButton orderCocktail={() => addCocktailToList(randomCard)} />
        </article>
      )}
    </>
  );
}
