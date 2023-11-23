import React from "react";
import CategoryNav from "../components/CategoryNav";
import Breadcrumbs from "../components/Breadcrumbs/Index";
import ReactImageMagnify from "react-image-magnify";
import image1 from "/products/apple_iphone_11-_white_3_1.jpg";
import { useState } from "react";
import StarRatings from "react-star-ratings";
const images = [image1, image1, image1];
import {
  IoBagHandleOutline,
  IoAdd,
  IoRemove,
  IoHeart,
  IoHeartOutline,
} from "react-icons/io5";
import { SiSimpleanalytics } from "react-icons/si";
import ImageMagnify from "../components/Image-magnify/Index";

const ProductPage = () => {
  return (
    <div className="container mx-auto">
      <CategoryNav />
      <Breadcrumbs />
      <div className="grid md:grid-cols-9 ">
        <div className="md:col-span-3 ">
          <ImageMagnify />
        </div>
        <div className="  md:col-span-4 p-4 flex flex-col gap-2">
          <h1 className="text-xl">
            Recci REP-W18 TWS Wireless Earphone - Blue
          </h1>
          <StarRatings
            rating={3}
            starSpacing="1px"
            starDimension="15px"
            numberOfStars={6}
            starRatedColor={"rgb(109, 122, 130)"}
            name="rating"
          />

          <div>
            <span className="text-gray-600 font-semibold">Type: </span>
            <label className="text-gray-400">Wireless</label>
          </div>
          <div>
            <span className="text-gray-600 font-semibold">Connectivity:</span>
            <label>Bluetooth 5.1</label>
          </div>
          <div>
            <span className="text-gray-600 font-semibold">Playtime:</span>
            <label>Up to 6 Hours</label>
          </div>
          <div>
            <span className="text-gray-600 font-semibold">Color:</span>
            <label>Blue</label>
          </div>
          <hr className=" border" />
          <div className="flex justify-between">
            <span className="text-primary font-bold text-2xl">EGP 889.00</span>
            <div>
              <span className="block">In stock</span>
              <span>SKU# HP404</span>
            </div>
          </div>
          <hr className=" border" />
          <div className="flex  gap-1 w-fit mx-auto">
            <div className="flex gap-1  border-2 w-fit">
              <button className="btn bg-white border rounded-none">
                <IoRemove />
              </button>
              <input
                type="text"
                value={5}
                className=" btn bg-white rounded-none outline-none w-16 inline-block h-full ps-5 "
              />
              <button className="border-2 bg-white btn rounded-none">
                <IoAdd />
              </button>
            </div>
            <button className="btn  capitalize rounded-none bg-primary text-white font-bold">
              <IoBagHandleOutline className="text-xl" /> Add to cart
            </button>
            <button className="btn bg-white text-lg rounded-none">
              <IoHeartOutline />
            </button>
            <button className="btn bg-white text-lg rounded-none">
              <SiSimpleanalytics />
            </button>
          </div>
        </div>
        <div className="hidden md:block">box</div>
      </div>
    </div>
  );
};

export default ProductPage;
