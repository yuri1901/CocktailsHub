import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 shadow-inner py-4 mt-8">
      <div className="container mx-auto flex flex-wrap justify-center gap-2">
        <AlphabetLinks />
      </div>
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
          to={`/cocktails/${letter}`}
          className="inline-block px-3 py-1 rounded-lg bg-white text-gray-700 font-semibold shadow hover:bg-blue-500 hover:text-white transition-colors duration-200 cursor-pointer text-lg"
        >
          {letter}
        </Link>
      ))}
    </>
  );
}
