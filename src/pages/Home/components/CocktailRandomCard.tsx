import useRandomCocktail from "../../../hooks/useRandomCocktails";

import Loading from "../../../components/loading/Loading";
import Error from "../../../components/error/Error";

export default function CocktailRandomCard() {
  const { randomCard, loading, error } = useRandomCocktail();

  return (
    <>
      {loading && <Loading />}
      {!loading && error && <Error message={error} />}
      {randomCard && (
        <article className="border border-gray-200 rounded-xl p-5 max-w-[350px] shadow-md bg-white flex flex-col items-center mx-auto">
          <span className="mb-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">Персональна рекомендація</span>
          <img
            src={randomCard.strDrinkThumb}
            alt={randomCard.strDrink}
            className="w-full max-w-[220px] rounded-lg mb-4"
          />
          <h2 className="mb-2 text-2xl font-semibold text-gray-800">{randomCard.strDrink}</h2>
          <span className="inline-block bg-gray-100 text-gray-500 rounded-md px-3 py-1 text-base mb-2">
            {randomCard.strCategory} | {randomCard.strAlcoholic}
          </span>
          <p className="text-base text-gray-700 mb-2">
            <b>Glass:</b> {randomCard.strGlass}
          </p>
          <p className="text-sm text-gray-600 text-center mb-4">{randomCard.strInstructions}</p>
          <button className="cursor-pointer mt-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Замовити</button>
        </article>
      )}
    </>
  );
}
