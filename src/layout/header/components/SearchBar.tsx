// hook
import { useContext } from "react";

// router
import { useNavigate } from "react-router-dom";
// custom hook
import useInputValidation from "../../../hooks/useInputValidation";

// context
import CocktailsContext from "../../../context/CocktailsContext";

const SearchBar = () => {
  const { inputValue, handleChangeInput, getCocktailsByName, setLoading } = useContext(CocktailsContext);
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
      className="flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900 w-full"
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
        className={`w-full min-w-[180px] md:min-w-[300px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 placeholder:text-gray-500 dark:placeholder:text-gray-400 ${isError ? "border-red-500 focus:ring-red-400" : "border-gray-300 dark:border-gray-600 focus:ring-blue-400 dark:focus:ring-blue-500"}`}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-200 font-semibold cursor-pointer"
      >
        Пошук
      </button>
    </form>
  );
};

export default SearchBar;
