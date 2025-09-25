import { useState } from "react";
export default function useBurger() {
  const [isMenu, setIsMenu] = useState(false);
  const toggleMenu = () => setIsMenu((prev) => !prev);
  return { isMenu, toggleMenu };
}
