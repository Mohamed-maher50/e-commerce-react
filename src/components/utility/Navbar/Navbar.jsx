import React from "react";
import { BiLogOut, BiMenu } from "react-icons/bi";
import ProductsCartNav from "./ProductsCartNav/ProductsCartNav";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateCart } from "../../../reducers/ShopingCart/ShopCartReducer";
import { submitLocalProducts } from "../../../reducers/ShopingCart/ShopingCartThunks";
import { logOut } from "../../../reducers/user/userReducer";
import { setDrawer } from "../../../reducers/Drawer";
import DropMenu from "../DropMenu/DropMenu";
import RequireSignIn from "../../../services/RequireSignIn";
import SearchContainer from "../../../containers/search/SearchContainer";
import useNavbar_Hook from "../../../hooks/nav/Navbar_Hook";
import ShoppingMenu from "../../cart/ShoppingMenu/ShoppingMenu";
const Navbar = () => {
  const { user } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
    dispatch(updateCart([]));
  };
  const [] = useNavbar_Hook();
  useEffect(() => {
    dispatch(submitLocalProducts());
  }, [user]);
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-5">
          <div className="flex items-center text-xl ">
            <Link to={"/"}>
              <img
                src="/Logo1.jpg"
                width={60}
                height={60}
                className="rounded-md object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:block grow  p-5">
            <SearchContainer />
          </div>
          <label
            onClick={() => dispatch(setDrawer(true))}
            htmlFor="my-drawer"
            className="md:hidden flex gap-4 "
          >
            <BiMenu className="text-3xl cursor-pointer" />
          </label>
          <div className="hidden md:flex justify-between gap-5">
            <RequireSignIn>
              <DropMenu.Container tabIndex={0} label={user?.data?.name}>
                <DropMenu.Item>
                  <Link to={"/"}>profile page</Link>
                </DropMenu.Item>
                <DropMenu.Item>
                  {user && (
                    <span
                      onClick={handleLogOut}
                      className="flex cursor-pointer"
                    >
                      <BiLogOut className="" />
                      logout
                    </span>
                  )}
                </DropMenu.Item>
              </DropMenu.Container>
            </RequireSignIn>

            <ShoppingMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
