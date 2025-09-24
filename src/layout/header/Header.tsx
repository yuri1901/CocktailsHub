// components
import Logo from "./components/Logo";
import Basket from "./components/Basket";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "../../components/themeToggle/ThemeToggle";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-lg">
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-4 dark:bg-black">
        <Logo />
        <section className="flex items-center gap-6 w-full md:w-auto justify-center md:justify-end">
          <SearchBar />
          <Basket />
          <ThemeToggle />
        </section>
      </section>
    </header>
  );
}
