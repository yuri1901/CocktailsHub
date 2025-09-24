interface OrderButtonProps {
  orderCocktail: () => void;
}

const OrderButton = ({ orderCocktail }: OrderButtonProps) => {
  return (
    <button
      onClick={orderCocktail}
      className="cursor-pointer flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-center"
    >
      Додати в кошик
    </button>
  );
};

export default OrderButton;
