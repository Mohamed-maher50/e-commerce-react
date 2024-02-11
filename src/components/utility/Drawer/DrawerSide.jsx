import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import RequireSignIn from "../../../services/RequireSignIn";
import { useDispatch } from "react-redux";
import { setDrawer } from "../../../reducers/Drawer";
import { IoMdSettings } from "react-icons/io";
const DrawerSide = () => {
  const dispatch = useDispatch();
  return (
    <div className="drawer-side z-50 ">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay "
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <RequireSignIn>
          <li
            className="cursor-pointer p-0 h-fit"
            onClick={() => dispatch(setDrawer(false))}
          >
            <Link to={"/account/MyWishList"}>
              <FaHeart className=" w-5 h-5  drop-shadow-md   text-red-500 relative " />
              <span>My WishList</span>
            </Link>
          </li>
          <li
            className="cursor-pointer p-0 h-fit"
            onClick={() => dispatch(setDrawer(false))}
          >
            <Link to={"/account/info"}>
              <IoMdSettings className=" w-5 h-5  drop-shadow-md   text-red-500 relative " />
              <label>Settings</label>
            </Link>
          </li>
        </RequireSignIn>
      </ul>
    </div>
  );
};

export default DrawerSide;
