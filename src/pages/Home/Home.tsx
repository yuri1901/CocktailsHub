import CocktailRandomCard from "./components/CocktailRandomCard";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center py-10 px-4 gap-8 bg-gradient-to-b from-white to-blue-50 min-h-[60vh]">
      <h1 className="text-2xl md:text-3xl font-bold text-blue-700 text-center mb-6 drop-shadow-sm">Для вибору коктейлю скористайтесь пошуком або фільтром</h1>
      <CocktailRandomCard />
    </section>
  );
}
