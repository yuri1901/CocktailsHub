// hook
import { useContext } from "react";

// context
import CocktailsContext from "../../../context/CocktailsContext";

// components
import PageContainer from "../../../components/pageContainer/PageContainer";
import Loading from "../../../components/loading/Loading";
import Error from "../../../components/error/Error";
import CardItem from "../../../components/cardItem/CardItem";
import SearchCardWrapper from "../../../components/searchCardWrapper/SearchCardWrapper";
import SearchResultsHeading from "../../../components/searchResultHeading/SearchResultsHeading";
import NoCocktailsFound from "../../../components/noCocktailsFound/NoCocktailsFound";

export default function CocktailsByNameList() {
  const { nameCard, loading, error } = useContext(CocktailsContext);

  return (
    <PageContainer>
      {loading && <Loading />}
      {!loading && error && <Error />}
      {!loading && !error && (
        <>
          <SearchResultsHeading />
          <SearchCardWrapper>
            {nameCard?.map((cocktail) => (
              <CardItem
                key={cocktail.idDrink}
                cocktail={cocktail}
              />
            ))}
          </SearchCardWrapper>
        </>
      )}
      {!loading && !error && !nameCard && <NoCocktailsFound />}
    </PageContainer>
  );
}
