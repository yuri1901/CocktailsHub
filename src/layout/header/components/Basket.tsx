import basketIcon from "./../../../assets/images/basket.png";

const Basket = () => {
  return (
    <button
      className="cursor-pointer w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-lg relative hover:scale-105 transition-transform duration-200"
      aria-label="Basket"
    >
      <img
        src={basketIcon}
        alt="basket icon"
        className="w-10 h-10 drop-shadow"
      />
      <span className="absolute bottom-[-8px] right-[-8px] bg-pink-500 text-white text-base font-bold rounded-full px-3 py-1 shadow-lg border-2 border-white">0</span>
    </button>
  );
};

export default Basket;
