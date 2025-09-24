import useCoctailById from "../../hooks/useCoctailById";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import Card from "../../components/card/Card";
import NoCocktailsFound from "../../components/noCocktailsFound/NoCocktailsFound";

export default function CocktailDetails() {
  const { cardById, loading, error } = useCoctailById();
  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (!cardById) return <NoCocktailsFound />;
  const ingredients = Object.keys(cardById)
    .filter((key) => key.startsWith("strIngredient") && cardById[key as keyof typeof cardById])
    .map((key) => cardById[key as keyof typeof cardById])
    .filter(Boolean);

  return (
    <>
      {loading && <Loading />}
      {!loading && error && <Error />}
      {!loading && !error && !cardById && <NoCocktailsFound />}
      {!loading && !error && cardById && (
        <Card
          idDrink={cardById.idDrink}
          strDrink={cardById.strDrink}
          strDrinkThumb={cardById.strDrinkThumb}
          strCategory={cardById.strCategory}
          strAlcoholic={cardById.strAlcoholic}
          strGlass={cardById.strGlass}
          strInstructions={cardById.strInstructions}
          ingredients={ingredients}
        />
      )}
    </>
  );
}
