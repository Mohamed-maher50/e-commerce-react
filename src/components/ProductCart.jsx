/* eslint-disable react/prop-types */
import StarRatings from "react-star-ratings";
import { CiHeart } from "react-icons/ci";
import { SiSimpleanalytics } from "react-icons/si";
const ProductCart = ({ horizontal }) => {
  return (
    <div
      className={`group/item text-sm duration-300 grid gap-y-2 overflow-hidden ${
        horizontal ? " col-span-full grid-cols-4 gap-3" : ""
      }`}
    >
      <img
        src="/products/apple_iphone_11-_white_3_1.jpg"
        className={`group-hover/item:shadow-lg  ${
          horizontal ? "col-span-1" : "col-span-full"
        } duration-500 `}
      />
      <div className={`${horizontal ? "col-span-3 text-start gap-2" : ""}`}>
        <p className=" rounded-lg  p-2 text-xs bg-gray-300">
          982.18 EGP / 36 Months Bank Installment 0 Interest 0 Down Payment
        </p>
        <p>Apple iPhone 11 - 128GB - Facetime - White</p>
        <StarRatings
          starSpacing="1px"
          starDimension="15px"
          numberOfStars={6}
          rating={4}
          starRatedColor={"rgb(109, 122, 130)"}
          name="rating"
        />
        <p className="line-through text-sm text-gray-400">EGP 28,499.00</p>
        <p>Special PriceEGP25,999.00</p>
        <div
          className={`w-fit ${
            horizontal ? " " : "mx-auto"
          } flex relative gap-x-2 duration-500`}
        >
          <button className=" bg-gray-300 px-3 translate-x-[50px] group-hover/item:translate-x-0 duration-500">
            <CiHeart />
          </button>
          <button className=" py-2  bg-gray-200 uppercase whitespace-nowrap relative z-10 px-2 text-sm ">
            add to cart
          </button>
          <button className=" bg-gray-300 px-3 -translate-x-[50px] z-0  group-hover/item:translate-x-0 duration-500">
            <SiSimpleanalytics />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
