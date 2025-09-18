import Order from "../order/Order";

interface CartProps {
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  ingredients: string[];
}

const Card: React.FC<CartProps> = ({ strDrink, strDrinkThumb, strCategory, strAlcoholic, strGlass, strInstructions, ingredients }: CartProps) => {
  return (
    <article className="border border-gray-200 rounded-xl p-5 max-w-[350px] shadow-md bg-white flex flex-col items-center mx-auto">
      <img
        src={strDrinkThumb}
        alt={strDrink}
        className="w-full max-w-[220px] rounded-lg mb-4"
      />
      <h2 className="mb-2 text-2xl font-semibold text-gray-800">{strDrink}</h2>
      <span className="inline-block bg-gray-100 text-gray-500 rounded-md px-3 py-1 text-base mb-2">
        {strCategory} | {strAlcoholic}
      </span>
      <p className="text-base text-gray-700 mb-2">
        <b>Glass:</b> {strGlass}
      </p>
      <div className="mb-2 w-full">
        <h3 className="font-semibold mb-1">Інгредієнти:</h3>
        <ul className="list-disc list-inside text-gray-700">
          {ingredients.map((ing, idx) => (
            <li key={idx}>{ing}</li>
          ))}
        </ul>
      </div>
      <p className="text-sm text-gray-600 text-center mb-4 whitespace-pre-line">{strInstructions}</p>
      <Order />
    </article>
  );
};

export default Card;
