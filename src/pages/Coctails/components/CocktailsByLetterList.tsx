// custom hook
import useCocktailsByLetter from "../../../hooks/useCocktailsByLetter";

// components
import SearchCardWrapper from "../../../components/searchCardWrapper/SearchCardWrapper";
import Loading from "../../../components/loading/Loading";
import Error from "../../../components/error/Error";
import CardItem from "../../../components/cardItem/CardItem";
import SearchResultsHeading from "../../../components/searchResultHeading/SearchResultsHeading";
import NoCocktailsFound from "../../../components/noCocktailsFound/NoCocktailsFound";

interface CocktailsByLetterListProps {
  letter: string;
}

export default function CocktailsByLetterList({ letter }: CocktailsByLetterListProps) {
  const { cardByLetter, loading, error } = useCocktailsByLetter(letter);
  return (
    <section className="container">
      {loading && <Loading />}
      {!loading && error && <Error />}
      {!loading && !error && (
        <>
          <SearchResultsHeading />
          <SearchCardWrapper>
             
            {cardByLetter?.map((cocktail) => (
              <CardItem
                key={cocktail.idDrink}
                cocktail={cocktail}
              />
            ))}
          </SearchCardWrapper>
        </>
      )}
      {!loading && !error && !cardByLetter && <NoCocktailsFound />}
    </section>
  );
}
