//components
import Modal from "../../../components/modal/Modal";

// icon
import basketIcon from "./../../../assets/images/basket.png";

// custom hook
import useModal from "../../../hooks/useModal";

// hook
import { useContext } from "react";

// context
import OrderContext from "../../../context/OrderContext";

const Basket = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const { orderCocktails, removeCocktailFromList, clearCart } = useContext(OrderContext);

  return (
    <nav className="relative">
      <button
        className="cursor-pointer w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-lg relative"
        aria-label="Basket"
        onClick={openModal}
      >
        <img
          src={basketIcon}
          alt="basket icon"
          className="w-6 h-6 drop-shadow"
        />
        <span className="absolute bottom-[-4px] right-[-4px] bg-pink-500 text-white text-sm font-bold rounded-full px-2.5 py-0.5 shadow-lg border-2 border-white">{orderCocktails.reduce((sum, item) => sum + (item.quantity || 0), 0) || 0}</span>
      </button>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        orderCocktails={orderCocktails}
        onRemove={removeCocktailFromList}
        onConfirm={clearCart}
      />
    </nav>
  );
};

export default Basket;
