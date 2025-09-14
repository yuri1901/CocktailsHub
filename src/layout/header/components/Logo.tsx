import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-lg tracking-widest no-underline transition-transform duration-200 "
      to="/"
    >
      cocktails hub
    </Link>
  );
};

export default Logo;
