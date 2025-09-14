interface NoCocktailsFoundProps {
  show: boolean;
}

export default function NoCocktailsFound({ show }: NoCocktailsFoundProps) {
  if (!show) return null;

  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        className="w-16 h-16 mb-4 text-gray-300"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17v-2a4 4 0 014-4h0a4 4 0 014 4v2m-7 0h8m-8 0a4 4 0 01-4-4V7a4 4 0 014-4h8a4 4 0 014 4v6a4 4 0 01-4 4m-8 0v2a2 2 0 002 2h8a2 2 0 002-2v-2"
        />
      </svg>
      <span className="text-gray-500 text-lg font-semibold">Нічого не знайдено за вашим запитом</span>
      <span className="text-gray-400 text-sm mt-2">Спробуйте змінити критерії пошуку або перевірте написання.</span>
    </div>
  );
}
