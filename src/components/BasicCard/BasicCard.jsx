import React from "react";

import StarRatings from "react-star-ratings";

const BasicCard = () => {
  return (
    <div
      className={`text-sm duration-300  rounded-md  border-2 flex-col items-center justify-center `}
    >
      <img
        src="/products/apple_iphone_11-_white_3_1.jpg"
        className={` duration-500 h-48`}
      />
      <div className="flex gap-2 p-2 flex-col justify-center items-center">
        <p className="ps-4">Apple iPhone 11 - 128GB - Facetime - White</p>
        <StarRatings
          starSpacing="1px"
          starDimension="15px"
          numberOfStars={5}
          rating={4}
          starRatedColor={"rgb(109, 122, 130)"}
          name="rating"
        />
        <p className="text-xl font-bold">EGP25,999.00</p>
        <p className="line-through text-sm text-gray-400">EGP 28,499.00</p>

        <button className=" py-2  bg-gray-200 uppercase whitespace-nowrap relative z-10 px-2 text-sm ">
          add to cart
        </button>
      </div>
    </div>
  );
};

export default BasicCard;
