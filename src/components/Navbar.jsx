import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cart} = useSelector((state) => state);
  return (
    <div className="bg-blue-600 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <NavLink to="/">
          <img
            src="https://qph.cf2.quoracdn.net/main-qimg-59ce21cbff09db8c68f4252fc93ef7c0-lq"
            alt="Logo"
            className="h-10"
          />
        </NavLink>

        <div className="flex-grow text-center">
          <h1 className="text-white text-xl font-semibold">Market Place</h1>
        </div>

        <div className="flex space-x-6 text-white relative">
          <NavLink to="/" className="hover:text-gray-300">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart" className="hover:text-gray-300 relative">
            <FaShoppingCart className="text-lg" />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white text-blue-600 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
