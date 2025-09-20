import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import useInputValidation from "../../../hooks/useInputValidation";

import CocktailsContext from "../../../context/CocktailsContext";

const SearchBar = () => {
  const { inputValue, handleChangeInput, getCocktailsByName, setLoading } = useContext(CocktailsContext);
  // const [isError, setIsError] = useState(false);
  const { isError, validateRequiredField } = useInputValidation(inputValue);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!validateRequiredField()) {
          return;
        }
        setLoading(true);
        setTimeout(() => {
          getCocktailsByName();
        }, 1000);
        navigate("/cocktails");
      }}
      action="#"
      className="flex items-center gap-2 p-2 bg-white rounded-lg shadow-md max-w-md "
    >
      <label
        htmlFor="search-coctel"
        className="sr-only"
      ></label>
      <input
        onChange={(e) => {
          handleChangeInput(e);
        }}
        value={inputValue}
        autoComplete="off"
        type="text"
        id="search-coctel"
        placeholder="Пошук коктейлю..."
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 text-gray-700 ${isError ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"}`}
      />
      <button
        type="submit"
        className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 active:bg-blue-700 transition-colors duration-200 font-semibold"
      >
        Пошук
      </button>
    </form>
  );
};

export default SearchBar;
