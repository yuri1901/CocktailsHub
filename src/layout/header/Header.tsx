// components
import Logo from "./components/Logo";
import Basket from "./components/Basket";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "../../components/themeToggle/ThemeToggle";

export default function Header() {
  return (
    <header className="w-full bg-gray-50 rounded-b-xl dark:bg-gray-900">
      <section className="container mx-auto px-4 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4 shadow">
        {/* Логотип окремо */}
        <div className="w-full flex justify-center md:justify-start mb-2 md:mb-0">
          <Logo />
        </div>
        {/* Пошук окремим рядком на мобільних */}
        <div className="w-full md:w-auto flex justify-center mb-2 md:mb-0">
          <SearchBar />
        </div>
        {/* Корзина та перемикач теми окремо */}
        <div className="w-full md:w-auto flex justify-center md:justify-end gap-4">
          <Basket />
          <ThemeToggle />
        </div>
      </section>
    </header>
  );
}
