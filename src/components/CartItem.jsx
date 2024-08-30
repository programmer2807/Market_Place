import { toast } from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/Shopcarslice";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item has been removed from the cart");
  };

  return (
    <div className="flex items-center gap-4">
      <div className="w-24 h-24">
        <img src={item.image} className="h-full w-full" alt={item.title} />
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold text-lg">{item.title}</h1>
        <h1 className="text-gray-600 text-sm">{item.description.split(" ").slice(0, 10).join(" ") + "..."}</h1>
        <div className="flex justify-between items-center mt-2">
          <p className="text-green-600 font-semibold">$ {item.price}</p>
          <div
            className="cursor-pointer"
            onClick={removeFromCart}>
            <FcDeleteDatabase size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
