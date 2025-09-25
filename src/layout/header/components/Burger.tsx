import type { ReactNode } from "react";
interface BurgerProps {
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}
const Burger = ({ isOpen, onToggle, children }: BurgerProps) => (
  <article className="relative lg:hidden">
    <button
      className="p-2 rounded focus:outline-none bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
      aria-label="Open menu"
      onClick={onToggle}
    >
      {/* SVG бургер-іконка з адаптацією до теми */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="4"
          y1="7"
          x2="20"
          y2="7"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="4"
          y1="12"
          x2="20"
          y2="12"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="4"
          y1="17"
          x2="20"
          y2="17"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </button>
    {isOpen && (
      <div
        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 z-50 flex flex-row items-center border border-gray-200 dark:border-gray-700 absolute top-full left-1/2 -translate-x-1/2 mt-2 overflow-auto transition-all duration-300"
        style={{ minWidth: "220px" }}
      >
        {children}
      </div>
    )}
  </article>
);

export default Burger;
