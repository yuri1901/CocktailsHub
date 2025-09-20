import basketIcon from "./../../../assets/images/basket.png";

const Basket = () => {
  return (
    <button
      className="cursor-pointer w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-lg relative hover:scale-105 transition-transform duration-200"
      aria-label="Basket"
    >
      <img
        src={basketIcon}
        alt="basket icon"
        className="w-6 h-6 md:w-10 md:h-10 drop-shadow"
      />
      <span className="absolute bottom-[-4px] right-[-4px] md:bottom-[-8px] md:right-[-8px] bg-pink-500 text-white text-xs md:text-base font-bold rounded-full px-2 py-0.5 md:px-3 md:py-1 shadow-lg border-2 border-white">0</span>
    </button>
  );
};

export default Basket;
