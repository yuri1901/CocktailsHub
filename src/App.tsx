import { BrowserRouter, Routes, Route } from "react-router-dom";

import useCocktailsByName from "./hooks/useCoctailsByName";

import CocktailsContext from "./context/CocktailsContext";

import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
// import CocktailsList from "./pages/Coctails/components/CoctailsList";
import Coctails from "./pages/Coctails/Coctails";

const App = () => {
  const { nameCard, loading, error, inputValue, handleChangeInput, getCocktailsByName, setLoading } = useCocktailsByName();
  return (
    <CocktailsContext.Provider value={{ nameCard, loading, error, inputValue, handleChangeInput, getCocktailsByName, setLoading }}>
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
          </Route>
        </Routes>
      </BrowserRouter>
    </CocktailsContext.Provider>
  );
};

export default App;
