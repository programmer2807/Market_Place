import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="flex justify-between items-center mt-6 p-4 border-t border-gray-200">
            <div>
              <div className="font-bold text-lg">Your Cart</div>
              <div className="text-sm">Summary</div>
              <p className="text-sm">Total Items: {cart.length}</p>
            </div>

            <div className="text-right">
              <p className="text-lg font-bold">Total Amount: ${totalAmount.toFixed(2)}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2">CheckOut Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-20">
          <h1 className="text-2xl font-semibold">Your Cart Is Empty</h1>
          <Link to="/">
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
