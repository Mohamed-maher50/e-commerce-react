import shoppingCart from "./ShopingCart/ShopCartReducer.js";
import ReviewsReducer from "./ReivewsReducer.js";
import MyWishListReducer from "./WishList/MyWishListReducer.js";
import categoriesReducer from "./Categories/Reducer.js";
import ProductsReducer from "./products/ProductsReducer.js";
import BrandsReducer from "./Brands/BrandsReducer.js";
import DrawerReducer from "./Drawer.js";
import ProductDetailsReducer from "./products/productDetails/ProductDetailsReducer.js";
import userSettingReducer from "./user/Settings/SettingReducer.js";
import AuthReducer, { addUser } from "./user/userReducer.js";
export default {
  reducer: {
    shoppingCart,
    AuthReducer,
    ReviewsReducer,
    MyWishListReducer,
    categoriesReducer,
    ProductsReducer,
    BrandsReducer,
    DrawerReducer,
    userSettingReducer,
    ProductDetailsReducer,
  },
};
