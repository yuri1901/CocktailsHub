// route
import { BrowserRouter, Routes, Route } from "react-router-dom";

// custom hooks
import useCocktailsByName from "./hooks/useCoctailsByName";
import useOrderCocktail from "./hooks/useOrderCocktails";

// context
import CocktailsContext from "./context/CocktailsContext";
import OrderContext from "./context/OrderContext";

// layout
import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home/Home";
import Coctails from "./pages/Coctails/Coctails";
import CocktailDetails from "./pages/CocktailDetails/CocktailDetails";

const App = () => {
  const { nameCard, loading, error, inputValue, handleChangeInput, getCocktailsByName, setLoading } = useCocktailsByName();
  const { orderCocktails, addCocktailToList, removeCocktailFromList, clearCart } = useOrderCocktail();

  return (
    <CocktailsContext.Provider value={{ nameCard, loading, error, inputValue, handleChangeInput, getCocktailsByName, setLoading }}>
      <OrderContext.Provider value={{ orderCocktails, addCocktailToList, removeCocktailFromList, clearCart }}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Layout />}
            >
              <Route
                index
                element={<Home />}
              />
              <Route
                path="/cocktails"
                element={<Coctails />}
              />
              <Route
                path="/cocktails/:id"
                element={<CocktailDetails />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </OrderContext.Provider>
    </CocktailsContext.Provider>
  );
};

export default App;
