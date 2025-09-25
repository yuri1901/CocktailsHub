import type { CartItem } from "../../hooks/useOrderCocktails";
import useOrderConfirmation from "../../hooks/useOrderConfirmation";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRemove: (index: number) => void;
  onConfirm: () => void;
  orderCocktails: CartItem[];
}

const Modal = ({ isOpen, onClose, orderCocktails, onRemove, onConfirm }: ModalProps) => {
  const { isOrderConfirmed, confirmOrder } = useOrderConfirmation();
  const handleConfirm = () => {
    confirmOrder(onConfirm, onClose);
  };

  if (!isOpen) {
    return null;
  }
  // top-full -translate-y-[-13%] translate-x-[17%] right-0
  return (
    <article
      className="absolute bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 z-50 max-h-96 overflow-y-auto
        right-0 -translate-y-[-13%] -translate-x-[-17%] w-80 sm:w-96
        max-[767px]:top-1/2 max-[767px]:left-1/2 max-[767px]:right-auto max-[767px]:-translate-x-1/2 max-[767px]:-translate-y-1/2 max-[767px]:w-72
        max-[640px]:w-64
        max-[380px]:w-56"
      style={{ maxWidth: "96vw" }}
    >
      <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-600">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{isOrderConfirmed ? "Замовлення підтверджено!" : "Кошик"}</h3>
        <button
          onClick={onClose}
          className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 text-xl cursor-pointer"
        >
          ✕
        </button>
      </header>
      {!isOrderConfirmed && (
        <main className="p-4">
          {orderCocktails.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400 text-base py-4">Ваш кошик порожній</p>
          ) : (
            <ul className="flex flex-col gap-2">
              {orderCocktails.map((item, index) => (
                <li
                  key={`${item.cocktail.idDrink}-${index}`}
                  className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded group"
                >
                  <div className="flex items-center">
                    <img
                      src={item.cocktail.strDrinkThumb}
                      alt={item.cocktail.strDrink}
                      className="w-10 h-10 rounded object-cover mr-3"
                    />
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-800 dark:text-gray-200 font-medium">{item.cocktail.strDrink}</span>
                      {item.quantity > 1 && <span className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">x{item.quantity}</span>}
                    </div>
                  </div>
                  <button
                    onClick={() => onRemove(index)}
                    className="text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 cursor-pointer"
                    title={item.quantity > 1 ? `Зменшити кількість (x${item.quantity})` : "Видалити з кошика"}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </main>
      )}

      <footer className="p-4 border-t border-gray-200 dark:border-gray-600">
        {isOrderConfirmed ? (
          <section className="text-center">
            <div className="text-green-600 text-2xl mb-2">✓</div>
            <p className="text-green-600 dark:text-green-400 font-medium">Дякуємо за замовлення!</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Кошик буде очищено...</p>
          </section>
        ) : (
          <button
            onClick={handleConfirm}
            className="w-full py-2 px-4 bg-blue-500 dark:bg-blue-600 text-white rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 text-sm font-medium transition-colors cursor-pointer"
            disabled={orderCocktails.length === 0}
          >
            Підтвердити замовлення
          </button>
        )}
      </footer>
    </article>
  );
};

export default Modal;
