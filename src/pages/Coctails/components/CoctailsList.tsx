import { useContext } from "react";
import { Link } from "react-router-dom";

import CocktailsContext from "../../../context/CocktailsContext";
import Loading from "../../../components/loading/Loading";
import Error from "../../../components/error/Error";
import NoCocktailsFound from "./NoCocktailsFound";

export default function CocktailsList() {
  const { nameCard, loading, error } = useContext(CocktailsContext);

  return (
    <section className="container mx-auto py-10">
      {loading ? (
        <div className="flex justify-center items-center min-h-[40vh] w-full">
          <Loading />
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold text-center mb-8">Результати пошуку</h1>
          {error && <Error />}
          <NoCocktailsFound show={!nameCard || (nameCard.length === 0 && !error)} />
          {/* <NoCocktailsFound cocktails={nameCard} /> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {nameCard?.map((cocktail) => (
              <div
                key={cocktail.idDrink}
                className="border rounded-xl p-4 bg-white shadow hover:scale-105 transition flex flex-col items-center"
              >
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
                <Link
                  to={`/cocktails/${cocktail.idDrink}`}
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center"
                >
                  Детальніше
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
