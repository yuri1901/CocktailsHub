import { createPortal } from "react-dom";
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
  const modalRoot = document.getElementById("modal-root");

  const handleConfirm = () => {
    confirmOrder(onConfirm, onClose);
  };

  if (!modalRoot || !isOpen) {
    return null;
  }

  return createPortal(
    <article className="absolute top-25 right-50 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">{isOrderConfirmed ? "Замовлення підтверджено!" : "Кошик"}</h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 text-xl cursor-pointer"
        >
          ✕
        </button>
      </div>
      {/* Список коктейлів */}
      {!isOrderConfirmed && (
        <div className="p-4">
          {orderCocktails.length === 0 ? (
            <p className="text-center text-gray-500 text-base py-4">Ваш кошик порожній</p>
          ) : (
            <div>
              <div className="flex flex-col gap-2">
                {orderCocktails.map((item, index) => (
                  <div
                    key={`${item.cocktail.idDrink}-${index}`}
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded group"
                  >
                    <div className="flex items-center">
                      <img
                        src={item.cocktail.strDrinkThumb}
                        alt={item.cocktail.strDrink}
                        className="w-10 h-10 rounded object-cover mr-3"
                      />
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-800 font-medium">{item.cocktail.strDrink}</span>
                        {item.quantity > 1 && <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">x{item.quantity}</span>}
                      </div>
                    </div>
                    <button
                      onClick={() => onRemove(index)}
                      className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-200 p-1 cursor-pointer"
                      title={item.quantity > 1 ? `Зменшити кількість (x${item.quantity})` : "Видалити з кошика"}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}{" "}
      {/* Кнопка підтвердження або повідомлення про успіх */}
      <div className="p-4 border-t border-gray-200">
        {isOrderConfirmed ? (
          <div className="text-center">
            <div className="text-green-600 text-2xl mb-2">✓</div>
            <p className="text-green-600 font-medium">Дякуємо за замовлення!</p>
            <p className="text-gray-500 text-sm">Кошик буде очищено...</p>
          </div>
        ) : (
          <button
            onClick={handleConfirm}
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm font-medium transition-colors cursor-pointer"
            disabled={orderCocktails.length === 0}
          >
            Підтвердити замовлення
          </button>
        )}
      </div>
    </article>,
    modalRoot
  );
};

export default Modal;
