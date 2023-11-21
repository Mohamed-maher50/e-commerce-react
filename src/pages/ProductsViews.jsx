import React from "react";
import CategoryNav from "../components/CategoryNav";
import ProductFilter from "../components/ProductFilter";
import ProductCart from "../components/ProductCart";
import { useState } from "react";
import Divider from "../components/Divider/Divider";

const ProductsViews = () => {
  const [horizontal, setHorizontal] = useState(true);
  return (
    <div className="container  mx-auto">
      <CategoryNav />
      <Divider />

      <div className="grid grid-cols-7 gap-x-2">
        <div className="bg-gray-300 hidden md:block md:col-span-2">filter</div>
        <div
          className={`grid col-span-full md:col-span-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  duration-300  gap-2 `}
        >
          <ProductFilter setHorizontal={setHorizontal} />
          <ProductCart horizontal={horizontal} />
          <ProductCart horizontal={horizontal} />
          <ProductCart horizontal={horizontal} />
          <ProductCart horizontal={horizontal} />
        </div>
      </div>
    </div>
  );
};

export default ProductsViews;
