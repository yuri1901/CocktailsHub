// components
import CocktailRandomCard from "./components/CocktailRandomCard";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center py-6 px-4 gap-4 min-h-[60vh] rounded-xl bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950 dark:border dark:border-gray-700">
      <h1 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-300 text-center mb-2 drop-shadow-sm">Для вибору коктейлю скористайтесь пошуком або фільтром</h1>
      <CocktailRandomCard />
    </section>
  );
}
