import CocktailsByNameList from "./components/CocktailsByNameList";
import { useLocation } from "react-router-dom";
import CocktailsByLetterList from "./components/CocktailsByLetterList";

export default function Coctails() {
  const location = useLocation();
  const param = new URLSearchParams(location.search);
  const letter = param.get("letter")?.toLowerCase();

  if (letter) {
    return <CocktailsByLetterList letter={letter} />;
  }

  return <CocktailsByNameList />;
}
