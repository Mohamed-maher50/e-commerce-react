import React from "react";
import CategoryNav from "../components/CategoryNav";
import ProductFilter from "../components/ProductFilter";
import ProductCart from "../components/ProductCart";
import { useState } from "react";
import Divider from "../components/Divider/Divider";
import Breadcrumbs from "../components/Breadcrumbs/Index";
import SidebarFilter from "../components/SidebarFilter/Index";

const ProductsViews = () => {
  const [horizontal, setHorizontal] = useState(true);
  console.log(new Array(50));
  return (
    <div className="container  mx-auto">
      <CategoryNav />
      <Breadcrumbs />
      <Divider />

      <div className="grid grid-cols-7 gap-x-2">
        <div className=" rounded-md shadow-sm h-fit sticky top-4 p-2 border-2 hidden md:block md:col-span-2">
          <SidebarFilter />
        </div>
        <div
          className={`grid col-span-full md:col-span-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  duration-300  gap-2 `}
        >
          <ProductFilter setHorizontal={setHorizontal} />
          {new Array(50).fill(<ProductCart horizontal={horizontal} />)}
        </div>
      </div>
    </div>
  );
};

export default ProductsViews;
