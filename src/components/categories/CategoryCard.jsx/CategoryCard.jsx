import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ _id, image }) => {
  return (
    <Link
      to={`/products?category=${_id}`}
      className="rounded-full overflow-hidden"
    >
      <div className="cursor-pointer h-full  hover:scale-110 duration-500">
        <img src={image} className="object-fill overflow-hidden rounded-full" />
      </div>
    </Link>
  );
};

export default CategoryCard;
