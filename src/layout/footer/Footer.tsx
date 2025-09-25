// link
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50  rounded-t-xl dark:bg-gray-900">
      <section className="container mx-auto px-[5px] py-4 flex flex-wrap justify-center gap-2 shadow">
        <AlphabetLinks />
      </section>
    </footer>
  );
}

function AlphabetLinks() {
  const ALPHABET_LETTERS: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  return (
    <>
      {ALPHABET_LETTERS.map((letter) => (
        <Link
          key={letter}
          to={`/cocktails?letter=${letter}`}
          className="inline-block px-3 py-1 rounded-lg bg-white text-gray-700 font-semibold shadow hover:bg-blue-500 hover:text-white transition-colors duration-200 cursor-pointer text-lg dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-blue-600 dark:hover:text-white dark:shadow-gray-900"
        >
          {letter}
        </Link>
      ))}
    </>
  );
}
