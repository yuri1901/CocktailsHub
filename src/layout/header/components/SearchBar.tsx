const SearchBar = () => {
  return (
    <form
      action="#"
      className="flex items-center gap-2 p-2 bg-white rounded-lg shadow-md max-w-md mx-auto"
    >
      <label
        htmlFor="search-coctel"
        className="sr-only"
      ></label>
      <input
        autoComplete="off"
        type="text"
        id="search-coctel"
        placeholder="Пошук коктейлю..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 transition-all duration-200"
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
