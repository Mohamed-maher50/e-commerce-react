import { useDispatch, useSelector } from "react-redux";
import {
  AddToWishList_Async,
  removeToWishList_Async,
} from "../../reducers/WishList/MyWishListReducer";
import add_to_cart_hook from "../cart/add_to_cart_hook";

const useCard_Hook = (loved) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.AuthReducer);
  const [colorOnChange, colorIndex, addToCart] = add_to_cart_hook();
  const handleWishList = async (_id) => {
    if (!_id) return;
    if (loved) dispatch(removeToWishList_Async(_id));
    else dispatch(AddToWishList_Async(_id));
  };
  const handleAddToCart = async () => {
    if (!user) {
      dispatch(addToCart({ product: object, quantity: 1 }));
    } else {
      dispatch(addToCart_async(_id));
    }
  };
  return [addToCart, handleWishList, colorOnChange, colorIndex];
};

export default useCard_Hook;
